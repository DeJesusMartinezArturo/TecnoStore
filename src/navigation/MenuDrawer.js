import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from "react-native-vector-icons/Ionicons";
import CustomDrawer from "../components/CustomDrawer";

import { Tabs } from "./Tabs";
import ListaProducto from "../screens/ListaProducto";
import ListaEmpresas from "../screens/ListaEmpresas";
import ListaMaquina from "../screens/ListaMaquina";
import ListaSubcategoria from "../screens/ListaSubcategoria";
import ListaCategoria from "../screens/ListaCategoria";
import { View, Text, ScrollView, SafeAreaView, ImageBackground, Touchable, TouchableOpacity } from "react-native";


const Drawer = createDrawerNavigator();

export const MenuDrawer = ({ navigation}) => {
    return (
        <Drawer.Navigator
            drawerContent={props => <CustomDrawer {...props} />}
            screenOptions={{
                headerShown: true,  // Oculta la hamburguesa
                drawerLabelStyle: { marginLeft: -25, fontSize: 15, fontFamily: 'Roboto-Medium' }
            }}
        >
            <Drawer.Screen name="TecnoStore" component={Tabs} options={{
                drawerIcon: ({ color }) => (
                    <Icon name='home-sharp' size={22} color={color} />
                )
            }} />
            <Drawer.Screen name="Registro Productos" component={ListaProducto} options={{
                drawerIcon: ({ color }) => (
                    <Icon name='bar-chart' size={22} color={color} />
                )
            }} />
            <Drawer.Screen name="Registro Empresas" component={ListaEmpresas} options={{
                drawerIcon: ({ color }) => (
                    <Icon name='business-sharp' size={22} color={color} />
                )
            }} />
            <Drawer.Screen name="Registro Maquina" component={ListaMaquina} options={{
                drawerIcon: ({ color }) => (
                    <Icon name='md-print' size={22} color={color} />
                )
            }} />
            <Drawer.Screen name="Registro Categoria" component={ListaCategoria} options={{
                drawerIcon: ({ color }) => (
                    <Icon name='md-folder-open-sharp' size={22} color={color} />
                )
            }} />
            <Drawer.Screen name="Registro Subcategoria" component={ListaSubcategoria} options={{
                drawerIcon: ({ color }) => (
                    <Icon name='md-options' size={22} color={color} />
                )
            }} />

        </Drawer.Navigator>
        
    );
}
//Ionicons
