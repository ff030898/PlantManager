import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, KeyboardAvoidingView, Platform, SafeAreaView, Text, TextInput, View } from 'react-native';
import { Button } from '../../components/button';
import styles from './styles';

export default function UserIdentification() {

    const [name, setName] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    const navigation = useNavigation();

    function handleInputBlur() {
        setIsFocused(false);
        setIsFilled(!!name);
    }

    function handleInputFocus() {
        setIsFocused(true)
    }

    function handleInputChange(value: string) {
        setIsFilled(!!value);
        setName(value);
    }

    async function handleSubmit() {
        if (!name) {
            return Alert.alert("Me diz ai como se chama!");
        }

        try {
            await AsyncStorage.setItem('@plantmanager:user', name);
            navigation.navigate('Confirmation');
        } catch {
            return Alert.alert("Erro ao salvar nome");
        }

    }


    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView style={styles.container} behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
                <View style={styles.content}>
                    <View style={styles.form}>
                        <View style={styles.header}>
                            <Text style={styles.emogi}>
                                {'\u{263A}'}
                            </Text>

                            <Text style={styles.title}>
                                Como podemos{'\n'}chamar você?
                            </Text>

                        </View>

                        <TextInput
                            style={[
                                styles.input,
                                (isFocused || isFilled) &&
                                styles.input2

                            ]}
                            placeholder="Digite seu nome"
                            onBlur={handleInputBlur}
                            onFocus={handleInputFocus}
                            onChangeText={(value) => handleInputChange(value)}
                        />

                        <View style={styles.footer}>
                            <Button disabled={!name}
                                onPress={handleSubmit}>
                                <Text style={styles.buttonText}>
                                    Confirmar
                                </Text>
                            </Button>
                        </View>


                    </View>

                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}
