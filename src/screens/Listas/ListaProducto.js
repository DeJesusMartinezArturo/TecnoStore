import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import InicioP from "../Producto/InicioP";
import NuevoP from "../Producto/NuevoP";
import DetallesP from "../Producto/DetallesP";
import EditarP from "../Producto/EditarP";

const Stack = createNativeStackNavigator();

const ListaProducto = ({ navigation }) => {
    return (
        <Stack.Navigator initialRouteName="InicioP" screenOptions={{ headerShown: false }}>
            
            <Stack.Screen component={NuevoP} name='NuevoP' />
            <Stack.Screen component={InicioP} name='InicioP' />
            <Stack.Screen component={DetallesP} name='DetallesP' />
            <Stack.Screen component={EditarP} name='EditarP' />
        </Stack.Navigator>

    );

}
export default ListaProducto;