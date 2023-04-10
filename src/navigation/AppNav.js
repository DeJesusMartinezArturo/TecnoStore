import React, { useContext } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider, View } from "native-base";
import AuthStack from './AuthStack';

import { AuthContext } from "../context/AuthContext";
import { MenuDrawer } from "./MenuDrawer";

export default function AppNav() {
    const { userToken } = useContext(AuthContext);



    return (
        <NativeBaseProvider>
            <NavigationContainer>
                {userToken !== null ? <MenuDrawer /> : <AuthStack />}
            </NavigationContainer>
        </NativeBaseProvider>
    )
}