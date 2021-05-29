import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Confirmation from '../pages/Confirmation';
import HomeScreen from '../pages/HomeScreen';
import PlantSave from '../pages/PlantSave';
import PlantSaveConfirmation from '../pages/PlantSaveConfirmation';
import UserIdentification from '../pages/UserIdentification';
import AuthRoutes from './tab.routes';


const { Navigator, Screen } = createStackNavigator();

const Routes = () => {

    return (
        <NavigationContainer>
            <Navigator
                screenOptions={
                    {
                        headerShown: false,
                        cardStyle:
                            { backgroundColor: '#fff' }
                    }}>

                <Screen
                    name="HomeScreen"
                    component={HomeScreen} />

                <Screen
                    name="UserIdentification"
                    component={UserIdentification} />

                <Screen
                    name="Confirmation"
                    component={Confirmation} />

                <Screen
                    name="Dashboard"
                    component={AuthRoutes} />

                <Screen
                    name="PlantSave"
                    component={PlantSave} />

                <Screen
                    name="PlantSaveConfirmation"
                    component={PlantSaveConfirmation} />

                <Screen
                    name="MyPlants"
                    component={AuthRoutes} />


            </Navigator>
        </NavigationContainer>
    );

}
export default Routes;