import React from "react";
import { View, Text, SafeAreaView, ImageBackground, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Ionicons";

const LoginScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', backgroundColor:'#fff' }}>

            <View>
                <ImageBackground style={{ padding: 100 }} source={require('../assets/images/Logo.png')}>
                </ImageBackground>

            </View>

            <View style={{ paddingHorizontal: 30 }}>
                <Text style={{
                    fontFamily: 'Roboto-Medium',
                    fontSize: 28, fontWeight: '900',
                    color: '#4953E0',
                    marginBottom: 30,
                    textAlign: 'center',
                }}> Iniciar Sesión </Text>

                <View style={{
                    flexDirection: 'row',
                    borderBottomColor: '#ccc',
                    borderBottomWidth: 1,
                    paddingBottom: 8,
                    marginBottom: 25
                }}>
                    <Icon style={{ marginRight: 5 }} name='mail-outline' size={22} color='#333' />
                    <TextInput style={{ flex: 1, paddingVertical: 0 }} placeholder="Email" keyboardType="email-addres" />

                </View>

                <View style={{
                    flexDirection: 'row',
                    borderBottomColor: '#ccc',
                    borderBottomWidth: 1,
                    paddingBottom: 8,
                    marginBottom: 25
                }}>
                    <Icon style={{ marginRight: 5 }} name='lock-closed-outline' size={22} color='#333' />
                    <TextInput style={{ flex: 1, paddingVertical: 0 }} placeholder="Contraseña" secureTextEntry={true} />
                </View>

                <TouchableOpacity onPress={() => navigation.navigate('Drawer')}
                    style={{
                        backgroundColor: '#4953E0',
                        padding: 15,
                        borderRadius: 10,
                        marginBottom: 20
                    }}
                >
                    <Text style={{
                        textAlign: 'center',
                        fontWeight: '900',
                        fontSize: 20,
                        color: '#fff'
                    }}>
                        Iniciar Sesión</Text>

                </TouchableOpacity>

                <Text style={{ textAlign: 'center', fontSize: 16, color: '#666' }}>No tienes una cuenta</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text style={{
                        textAlign: 'center',
                        fontWeight: '900',
                        fontSize: 16,
                        color: '#4953E0'
                    }}>
                        Registrate </Text>

                </TouchableOpacity>


            </View>


        </SafeAreaView>
    );

}
export default LoginScreen;