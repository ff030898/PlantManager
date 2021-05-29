import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import EnviromentButton from '../../components/EnviromentButton';
import Header from '../../components/header';
import Load from '../../components/Load';
import PlantCardPrimary from '../../components/PlantCardPrimary';
import { PlantProps } from '../../libs/storage';
import api from '../../services/api';
import colors from '../../styles/colors';
import styles from './styles';

interface EnviromentProps {
    key: string;
    title: string;
}


export default function Dashboard() {

    const [enviroments, setEnviroments] = useState<EnviromentProps[]>([]);
    const [plants, setPlants] = useState<PlantProps[]>([]);
    const [filteredPlants, setFilteredPlants] = useState<PlantProps[]>([]);
    const [enviremontSelected, setEnviromentSelected] = useState('all');
    const [loading, setLoading] = useState(true);

    const [page, setPage] = useState(1);
    const [loadingMore, setLoadingMore] = useState(false);

    const navigation = useNavigation();


    useEffect(() => {
        async function fetchEnviroment() {
            const { data } = await api.get('plants_environments?_sort=title&_order=asc');
            setEnviroments([
                {
                    key: 'all',
                    title: 'Todos'
                },
                ...data
            ]);
        }

        fetchEnviroment();
    }, []);

    async function fetchPlants() {
        const { data } = await api.get(`plants?_sort=name&_order=asc&_page=${page}&_limit=8`);
        if(!data){
            return setLoading(true);
        }

        if(page > 1){
            setPlants(oldValue => [...oldValue, ...data]);
            setFilteredPlants(oldValue => [...oldValue, ...data]);
        }else {
            setPlants(data);
            setFilteredPlants(data);
        }
        
        setLoading(false);
        setLoadingMore(false);
    }


    useEffect(() => {
    
        fetchPlants();
    }, []);

    function handleEnviromentSelected(enviroment: string) {

        setEnviromentSelected(enviroment);

        if (enviroment == 'all')
            return setFilteredPlants(plants);

        const filtered = plants.filter(plant =>
            plant.environments.includes(enviroment)
        );

        setFilteredPlants(filtered);

    }

    function handleFetchMore(distance: number){
        if(distance < 1){
            return;
        }

        setLoadingMore(true);
        setPage(oldValue => oldValue + 1);
        fetchPlants();
    }

    function handlePlantSelect(plant: PlantProps){
        navigation.navigate('PlantSave', {plant});
    }

    if(loading){
        return <Load />
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Header />
                <Text style={styles.title}>Em qual ambiente</Text>
                <Text style={styles.subtitle}>você quer colocar sua planta?</Text>
            </View>

            <View>
                <FlatList
                    data={enviroments}
                    keyExtractor={(item) => item.key}
                    renderItem={({ item }) => (
                        <EnviromentButton
                            title={item.title}
                            active={item.key == enviremontSelected}
                            onPress={() => handleEnviromentSelected(item.key)}
                        />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.enviromentList}
                />
            </View>

            <View style={styles.plants}>

                <FlatList
                    data={filteredPlants}
                    keyExtractor={(plant) => plant.id}
                    renderItem={({ item }) => (
                        <PlantCardPrimary 
                        data={item} 
                        onPress={() => handlePlantSelect(item)} />
                    )}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    contentContainerStyle={styles.plantList}
                    ListFooterComponent={loadingMore ? <ActivityIndicator color={colors.green}  /> : <></>}
                    onEndReachedThreshold={0.1}
                    onEndReached={( { distanceFromEnd }) => handleFetchMore(distanceFromEnd)}
                    
                />

            </View>


        </View>
    )
}