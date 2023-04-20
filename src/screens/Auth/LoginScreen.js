import React, { useContext, useState } from "react";
import { View, Text, SafeAreaView, ImageBackground, TouchableOpacity, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Ionicons";
import { AuthContext } from "../../context/AuthContext";

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const { login } = useContext(AuthContext);
            
    
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <ImageBackground style={{ padding: 100 }} source={require('../../assets/images/Logo.png')}></ImageBackground>
            </View>

            <View style={{ paddingHorizontal: 30 }}>
                <Text style={styles.titleLogin}> Iniciar Sesión </Text>

                <View style={styles.inputEmail}>
                    <Icon style={{ marginRight: 5 }} name='mail-outline' size={22} color='#333' />
                    <TextInput style={styles.textInput} placeholder="Email" keyboardType="email-addres" 
                    value={email} onChangeText={text=>setEmail(text)}/>
                </View>

                <View style={styles.inputEmail} >
                    <Icon style={{ marginRight: 5 }} name='lock-closed-outline' size={22} color='#333' />
                    <TextInput style={styles.textInput} placeholder="Contraseña" secureTextEntry={true} 
                     value={password} onChangeText={text=>setPassword(text)}/>
                </View>

                <TouchableOpacity onPress={() => { login(email,password) }}
                    style={styles.boton}
                >
                    <Text style={styles.letraBoton}>
                        Iniciar Sesión</Text>
                </TouchableOpacity>


                <Text style={{ textAlign: 'center', fontSize: 16, color: '#666' }}>No tienes una cuenta</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.Regresar}>
                        Registrate </Text>

                </TouchableOpacity>

            </View>
        </SafeAreaView>
    );

}
export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: 'center', backgroundColor: '#fff'
    },
    titleLogin: {
        fontFamily: 'Roboto-Medium',
        fontSize: 28, fontWeight: '900',
        color: '#4953E0',
        marginBottom: 30,
        textAlign: 'center',
    },
    inputEmail: {
        flexDirection: 'row',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginBottom: 25
    },
    boton: {
        backgroundColor: '#4953E0',
        padding: 15,
        borderRadius: 10,
        marginBottom: 20
    },
    letraBoton: {
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 20,
        color: '#fff'
    },
    Regresar: {
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 16,
        color: '#4953E0'
    },
    textInput: {
        flex: 1, paddingVertical: 0
    }

})
