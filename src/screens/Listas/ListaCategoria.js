import React from "react";
import { View, Text, ScrollView } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InicioC from "../Categoria/InicioC";
import NuevoC from "../Categoria/NuevoC";
import DetallesC from "../Categoria/DetallesC";
import EditarC from "../Categoria/EditarC";

const Stack = createNativeStackNavigator();

const ListaCategoria = () => {
    return (
        <Stack.Navigator initialRouteName="NuevoC" screenOptions={{ headerShown: false }}>
            <Stack.Screen component={NuevoC} name='NuevoC' />
            <Stack.Screen component={InicioC} name='InicioC' />
            <Stack.Screen component={DetallesC} name='DetallesC' />
            <Stack.Screen component={EditarC} name='EditarC' />
        </Stack.Navigator>

    );

}
export default ListaCategoria;