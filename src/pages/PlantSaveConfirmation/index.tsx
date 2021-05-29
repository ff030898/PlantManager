import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { Button } from '../../components/button';
import styles from './styles';

export default function PlantSaveConfirmation() {

    const navigation = useNavigation();

    function handleNavigation() {
      navigation.navigate('MyPlants');
    }

    return (
        <View style={styles.container}>

            <Text style={styles.emogi}>
                {'\u{263A}'}
            </Text>

            <Text style={styles.title}>
                Tudo certo
            </Text>

            <Text style={styles.subtitle}>
                Fique tranquilo que sempre vamos lembrar você de cuidar da sua plantinha com bastante amor.
            </Text>


            <Button
                onPress={handleNavigation}>
                <Text style={styles.buttonText}>
                    Muito obrigado :D
                    </Text>
            </Button>
        </View>


    )
}