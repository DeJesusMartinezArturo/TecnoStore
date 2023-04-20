import React from "react";
import { View, Text, ScrollView } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import InicioM from "../Maquina/InicioM";
import NuevoM from "../Maquina/NuevoM";
import DetallesM from "../Maquina/DetallesM";
import EditarM from "../Maquina/EditarM";

const Stack = createNativeStackNavigator();
 

const ListaMaquina = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen component={InicioM} name='InicioM' />
            <Stack.Screen component={NuevoM} name='NuevoM' />
            <Stack.Screen component={DetallesM} name='DetallesM' />
            <Stack.Screen component={EditarM} name='EditarM' />
        </Stack.Navigator>

    )
}
export default ListaMaquina;