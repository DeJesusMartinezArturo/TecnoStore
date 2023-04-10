import React, { useContext, useState } from "react";
import { View, Text, SafeAreaView, ImageBackground, TouchableOpacity, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Ionicons";
import { AuthContext } from "../../context/AuthContext";
import Spinner from "react-native-loading-spinner-overlay";

const Register = ({ navigation }) => {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const { registro, isLoading } = useContext(AuthContext);

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', backgroundColor: '#fff' }}>

            <View>
                <ImageBackground style={{ padding: 100 }} source={require('../../assets/images/Logo.png')}>
                </ImageBackground>

            </View>
            <Spinner visible={isLoading}/>

            <View style={{ paddingHorizontal: 30 }}>
                <Text style={styles.titleLogin}> Registro </Text>

                <View style={styles.inputEmail}>
                    <Icon style={{ marginRight: 5 }} name='person-outline' size={22} color='#333' />
                    <TextInput style={styles.textInput} placeholder="Nombre"
                        value={name} onChangeText={text => setName(text)} />
                </View>

                <View style={styles.inputEmail}>
                    <Icon style={{ marginRight: 5 }} name='mail-outline' size={22} color='#333' />
                    <TextInput style={styles.textInput} placeholder="Email" keyboardType="email-addres"
                        value={email} onChangeText={text => setEmail(text)} />
                </View>

                <View style={styles.inputEmail}>
                    <Icon style={{ marginRight: 5 }} name='lock-closed-outline' size={22} color='#333' />
                    <TextInput style={styles.textInput} placeholder="Contraseña"
                        value={password} onChangeText={text => setPassword(text)} />
                </View>


                <TouchableOpacity  onPress={() => {registro(name, email, password)} }
                    style={styles.boton}
                >
                <Text style={styles.letraBoton}>
                Crear Cuenta</Text>

                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.Regresar}>
                        Regresar </Text>

                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );

}
export default Register;
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
