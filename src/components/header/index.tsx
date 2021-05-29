import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import styles from './styles';

interface HeaderProps {
  myPlants?: boolean;
}

export default function Header({myPlants = false} : HeaderProps) {
  const [userName, setUserName] = useState<String>('');

  useEffect(() => {
    async function loadStorageUserName() {
      const user = await AsyncStorage.getItem('@plantmanager:user');
      setUserName(user || '');
    }

    loadStorageUserName();
  }, [])
  return (
    <View style={styles.container}>
      <View>

        {myPlants ? (
          <>
            <Text style={styles.greeting}>Minhas</Text>
            <Text style={styles.userName}>Plantinhas</Text>
          </>
        ) : (
          <>
            <Text style={styles.greeting}>Olá,</Text>
            <Text style={styles.userName}>{userName}</Text>
          </>
        )}
      </View>

      <Image source={{ uri: 'https://avatars.githubusercontent.com/u/45288456?v=4' }} style={styles.image} />
    </View>
  )
}