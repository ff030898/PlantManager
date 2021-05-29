import DateTimePicker from '@react-native-community/datetimepicker';
import { useRoute } from '@react-navigation/core';
import { useNavigation } from '@react-navigation/native';
import { format, isBefore } from 'date-fns';
import React, { useState } from 'react';
import { Alert, Image, Platform, Text, TouchableOpacity, View } from 'react-native';
import { SvgFromUri } from 'react-native-svg';
import waterdrop from '../../assets/waterdrop.png';
import { Button } from '../../components/button';
import { PlantProps, savePlant } from '../../libs/storage';
import styles from './styles';

interface Params {
    plant: PlantProps
    
}

export default function PlantSave() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(Platform.OS == 'ios');

    const router = useRoute();
    const { plant } = router.params as Params;

    const navigation = useNavigation();


    function handleChangeTime(event: Event, dateTime: Date | undefined){
        if (Platform.OS == 'android') {
            setShowDatePicker(oldState => !oldState)
        }

        if (dateTime && isBefore(dateTime, new Date())) {
            setSelectedDate(new Date());

            return Alert.alert('Escolha uma hora no futuro!');
        }

        if (dateTime)
            setSelectedDate(dateTime);
    }

    function handleOpenDateTimePickerAndroid() {
        if (Platform.OS == 'android') {
            setShowDatePicker(oldState => !oldState);
        }

    }

    async function handleSave(){
    
        try{
          await savePlant({
              ...plant,
              dateTimeNotification: selectedDate
          })

          navigation.navigate('PlantSaveConfirmation');

        }catch{
            return Alert.alert('Não foi possível salvar :(');
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.plantInfo}>
                <SvgFromUri uri={plant.photo} width={150} height={150} />
                <Text style={styles.plantName}>{plant.name}</Text>
                <Text style={styles.plantAbout}>
                    {plant.about}
                </Text>
            </View>
            <View style={styles.controller}>
                <View style={styles.tipContainer}>
                    <Image source={waterdrop} style={styles.tipImage} />
                    <Text style={styles.tipText}>
                        {plant.water_tips}
                    </Text>
                </View>

                <Text style={styles.alertLabel}>
                    Escolha o melhor horário pra ser lembrado
                </Text>

                {showDatePicker && (
                    <DateTimePicker value={selectedDate} mode="time"
                        display="spinner" onChange={handleChangeTime} />
                )}

                {Platform.OS == 'android' && (
                    <TouchableOpacity style={styles.dateTimePickerButton} onPress={handleOpenDateTimePickerAndroid}>
                        <Text style={styles.dateTimePickerText}>
                            {`Mudar ${format(selectedDate, 'HH:mm')}`}
                        </Text>
                    </TouchableOpacity>
                )}


                <Button
                    onPress={handleSave}>
                    <Text style={styles.buttonText}>
                        Cadastrar Planta
                    </Text>
                </Button>
            </View>
        </View>

    )
}