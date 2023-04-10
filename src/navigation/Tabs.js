import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Inicio from '../screens/Inicio';
import Perfil from "../screens/Perfil";
import Icon from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export const Tabs = ({navigation}) => {
    return (
        <Tab.Navigator
            sceneAnimationEnabled={true}
            screenOptions={() => ({
                headerShown: false,
                tabBarShowLabel: true,
                tabBarStyle: { backgroundColor: '#fff' },
            })}
        >
            <Tab.Screen name='Inicio' component={Inicio} options={{
                tabBarIcon: ({ color }) => (
                    <Icon name='home' size={30} color={color} />
                )
            }} />
            <Tab.Screen name='Perfil' component={Perfil} options={{
                tabBarIcon: ({ color }) => (
                    <Icon name='person-sharp' size={22} color={color} />
                )
            }} />
            

        </Tab.Navigator>

    );
}




