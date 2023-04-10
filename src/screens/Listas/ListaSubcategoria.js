import React from "react";
import { View, Text, ScrollView } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InicioS from "../SubCategoria/InicioS";
import NuevoS from "../SubCategoria/NuevoS";
import DetallesS from "../SubCategoria/DetallesS";
import EditarS from "../SubCategoria/EditarS";

const Stack = createNativeStackNavigator();

const ListaSubcategoria = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen component={InicioS} name='InicioS' />
            <Stack.Screen component={NuevoS} name='NuevoS' />
            <Stack.Screen component={DetallesS} name='DetallesS' />
            <Stack.Screen component={EditarS} name='EditarS' />

        </Stack.Navigator>

    );

}
export default ListaSubcategoria;