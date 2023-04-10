import React from "react";
import { View, Text, ScrollView, ImageBackground } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();
import InicioE from "../Empresa.js/InicioE";
import NuevoE from "../Empresa.js/NuevoE";
import DetallesE from "../Empresa.js/DetallesE";
import EditarE from "../Empresa.js/EditarE";


const ListaEmpresas = () => {
    return (
        <Stack.Navigator initialRouteName="NuevoE" screenOptions={{ headerShown: false }}>
            <Stack.Screen component={NuevoE} name='NuevoE' />
            <Stack.Screen component={InicioE} name='InicioE' />
            <Stack.Screen component={DetallesE} name='DetallesE' />
            <Stack.Screen component={EditarE} name='EditarE' />
        </Stack.Navigator>

    );

}
export default ListaEmpresas;