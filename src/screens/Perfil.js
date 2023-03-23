import React from 'react';
import { View, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import { Avatar } from "native-base";
import {
    Title,
    Caption,
    Text,
    TouchableRipple,
} from 'react-native-paper';

const Perfil = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>

            <View>
                <Text style={{
                    textAlign: 'center',
                    paddingTop:10,
                    fontWeight: '900',
                    fontSize: 30,
                    color: '#4953E0'
                }}>
                    Perfil
                </Text>
            </View>

            <View style={styles.userInfoSection}>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <Avatar source={{
                        uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    }} size={20}
                    />
                    <View style={{ marginLeft: 20 }}>
                        <Title style={[styles.title, {
                            marginTop: 15,
                            marginBottom: 5,
                        }]}>Jesús Martínez</Title>
                        <Caption style={styles.caption}>@j_mtz</Caption>
                    </View>
                </View>
            </View>
            <View style={styles.userInfoSection}>
                <View style={styles.row}>
                    <Icon name='person-outline' size={29} color='#000000' />
                    <Text style={{ color: "#000000", marginLeft: 20 }}>Jesús</Text>
                </View>
                <View style={styles.row}>
                    <Icon name='person-outline' size={29} color='#000000' />
                    <Text style={{ color: "#000000", marginLeft: 20 }}>Martínez</Text>
                </View>
                <View style={styles.row}>
                    <Icon name='ios-call-outline' size={29} color='#000000' />
                    <Text style={{ color: "#000000", marginLeft: 20 }}>7227060541</Text>
                </View>
                <View style={styles.row}>
                    <Icon name='mail-outline' size={29} color='#000000' />
                    <Text style={{ color: "#000000", marginLeft: 20 }}>admin1@email.com</Text>
                </View>
                <View style={styles.row}>
                    <Icon name='lock-closed-outline' size={29} color='#000000' />
                    <Text style={{ color: "#000000", marginLeft: 20 }}>Contraseña</Text>
                </View>

                <TouchableOpacity onPress={() => navigation.navigate('Login')}
                    style={styles.row}>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                        <Icon name='exit-outline' size={29} />
                        <Text style={{ color: "#000000", marginLeft: 20 }}>
                            Cerrar sesión
                        </Text>
                    </View>

                </TouchableOpacity>

            </View>
            <View style={{ paddingHorizontal: 50 }}>
                <TouchableOpacity onPress={() => navigation.navigate('EditarPerfil')}
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
                        Editar Perfil </Text>

                </TouchableOpacity>


            </View>

        </SafeAreaView>
    );

}
export default Perfil;

const styles = StyleSheet.create({
    container: {
        flex: 1,backgroundColor: '#fff'
    },
    userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    infoBoxWrapper: {
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100,
    },
    infoBox: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuWrapper: {
        marginTop: 10,
    },
    menuItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30,
    },
    menuItemText: {
        color: '#777777',
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26,
    },
});