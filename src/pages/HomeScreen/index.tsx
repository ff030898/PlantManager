import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import watering from '../../assets/watering.png';
import styles from './styles';

export default function HomeScreen(){

    const navigation = useNavigation();

    function handleNavigate() {
        navigation.navigate('UserIdentification');
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
            <Text style={styles.title}>Gerencie {'\n'}suas plantas de {'\n'}forma fácil</Text>
            <Image style={styles.image} source={watering} resizeMode="contain"/>
            <Text style={styles.subtitle}>Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você sempre que precisar.</Text>
            <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={handleNavigate}>
                <Feather 
                 name="chevron-right"
                 style={styles.buttonIcon}
                />
            </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}