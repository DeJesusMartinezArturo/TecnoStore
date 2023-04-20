import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { BASE_URL } from "../config";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(false);
    const [userToken, setUserToken] = useState(null);
    const [userInfo, setUserInfo] = useState(null);

    const registro = (name, email, password) => {
        setIsLoading(true);
        axios.post(`${BASE_URL}/register`, {
            name,
            email,
            password,
        })
            .then(res => {
                let userInfo = res.data;
                setUserInfo(userInfo);
                AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
                setIsLoading(false);
                console.log(userInfo);
            })
            .catch(e => {
                console.log(`Registro error ${e}`);

            });
        setIsLoading(false);

    };

    const login = (email, password) => {
        setIsLoading(true);
        axios.post(`${BASE_URL}/login`, {
            email,
            password
        })
            .then(res => {
                let userInfo = res.data;
                setUserInfo(userInfo);
                setUserToken(userInfo.message);
                
                AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
                AsyncStorage.setItem('userToken', userInfo.message);

                console.log(userInfo);
                console.log('User Token: ' + userInfo.message);
            })
            .catch(e => {
                console.log(`Error al registrarse ${e}`);
            });

        setIsLoading(false);
    }

    const logout = () => {
        setIsLoading(true);
        setUserToken(null);
        AsyncStorage.removeItem('userInfo');
        AsyncStorage.removeItem('userToken');
        setIsLoading(false);
    }
    const isLoggedIn = async () => {
        try {
            let userInfo = await AsyncStorage.getItem('userInfo');
            let userToken = await AsyncStorage.getItem('userToken');
            userInfo = JSON.parse(userInfo);

            if (userInfo) {
                setUserToken(userToken);
                setUserInfo(userToken);
            }
            setIsLoading(false);

        } catch (e) {
            console.log(`login es error $(e)`);
        }
    }

    useEffect(() => {
        isLoggedIn();

    }, []);

    return (
        <AuthContext.Provider value={{ registro, login, logout, isLoading, userToken }}>
            {children}
        </AuthContext.Provider>
    )

}