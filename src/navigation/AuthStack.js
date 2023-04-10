
import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from "../screens/OnboardingScreen";
import LoginScreen from "../screens/Auth/LoginScreen";
import Register from "../screens/Auth/Register";
import { MenuDrawer } from "./MenuDrawer";
import EditPerfil from "../screens/EditPerfil";
import DetalleI from "../screens/DetalleI";

const Stack = createNativeStackNavigator();

const AuthStack = ({ navigation }) => {
  return (

    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen component={OnboardingScreen} name='OnboardingScreen' />
      <Stack.Screen component={MenuDrawer} name='Drawer' />
      <Stack.Screen component={LoginScreen} name='Login' />
      <Stack.Screen component={Register} name='Register' />
      <Stack.Screen component={EditPerfil} name='EditPerfil'/>
      <Stack.Screen component={DetalleI} name='DetalleI'/>
    </Stack.Navigator>

  )
}

export default AuthStack;