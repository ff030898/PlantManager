import { formatDistance } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import waterdrop from '../../assets/waterdrop.png';
import Header from '../../components/header';
import Load from '../../components/Load';
import { PlantCardSecondary } from '../../components/PlantCardSecundary';
import { loadPlant, PlantProps } from '../../libs/storage';
import styles from './styles';

export default function MyPlants() {
    const [myPlants, setMyPlants] = useState<PlantProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [nextWatered, setNextWatered] = useState<string>();


    useEffect(() => {
        async function loadStorageData() {
            const plantsStoraged = await loadPlant();

            const nextTime = formatDistance(
                new Date(plantsStoraged[0].dateTimeNotification).getTime(),
                new Date().getTime(),
                { locale: ptBR }
            );

            setNextWatered(
                `Não esqueça de regar a ${plantsStoraged[0].name} às ${nextTime}`
            )

            setMyPlants(plantsStoraged);
            setLoading(false);

        }


        loadStorageData();
    }, [])


    if (loading) {
        return <Load />
    }

    return (
        <View style={styles.container}>
            <Header myPlants />
            <View style={styles.spotLight}>
                <Image source={waterdrop} style={styles.spotLightImage} />
                <Text style={styles.spotLightText}>{nextWatered}</Text>
            </View>

            <View style={styles.plants}>
                <Text style={styles.plantsTitle}>Próximas regadas</Text>

                <FlatList data={myPlants} 
                    keyExtractor={(item) => String(item.id)} 
                    renderItem={({item}) => (
                       <PlantCardSecondary data={item}/>
                    )} 
                    showsVerticalScrollIndicator={false} 
                    
                    />
            </View>
        </View>
    )
}