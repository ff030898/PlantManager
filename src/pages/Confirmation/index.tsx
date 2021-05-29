import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { KeyboardAvoidingView, Platform, SafeAreaView, Text, View } from 'react-native';
import { Button } from '../../components/button';
import styles from './styles';

export default function Confirmation() {

    const navigation = useNavigation();

    function handleNavigate(){
        navigation.navigate('Dashboard');
    }
    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView style={styles.container} behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
                <View style={styles.content}>
                    <View style={styles.form}>
                        <View style={styles.header}>
                            <Text style={styles.emogi}>
                                {'\u{1F604}'}
                            </Text>

                            <Text style={styles.title}>
                                Prontinho
                            </Text>

                            <Text style={styles.subtitle}>
                                 Agora vamos começar a cuidar das suas plantinhas com muito cuidado.
                            </Text>

                        </View>
                      

                        <View style={styles.footer}>
                            <Button onPress={handleNavigate}>
                                <Text style={styles.buttonText}>
                                    Começar
                                </Text>
                            </Button>
                        </View>


                    </View>

                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}