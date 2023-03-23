import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    StyleSheet,
} from 'react-native';

import Icon from "react-native-vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Avatar } from "native-base";

const DetalleI = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>

            <View>
                <Text style={{
                    textAlign: 'center',
                    fontWeight: '900',
                    fontSize: 30,
                    color: '#4953E0'
                    , marginTop: 50
                }}>
                    Descripción
                </Text>
            </View>
            <View style={{ paddingHorizontal: 110, marginTop: 20 }}>
                <ImageBackground
                    imageStyle={{ borderRadius: 50, backgroundColor: '#4953E0' }}
                    style={{ width: 100, height: 100 }} source={require('../assets/images/Osito.png')}
                ></ImageBackground>

            </View>
            <View>

            </View>
            <View>
                <Text style={{
                    textAlign: 'auto',
                    fontWeight: '300',
                    fontSize: 25,
                    color: '#000000'
                }}>
                    Fecha
                </Text>
                <Text style={{
                    textAlign: 'auto',
                    fontWeight: '300',
                    fontSize: 25,
                    color: '#4953E0'
                }} >Lunes: 16 de Enero del 2023</Text>
            </View>

            <View>
                <Text style={{
                    textAlign: 'auto',
                    fontWeight: '300',
                    fontSize: 25,
                    color: '#000000'
                }}>
                    Nombre
                </Text>
                <Text style={{
                    textAlign: 'auto',
                    fontWeight: '300',
                    fontSize: 25,
                    color: '#4953E0'
                }} >Oso Ted</Text>
            </View>

            <View>
                <Text style={{
                    textAlign: 'auto',
                    fontWeight: '300',
                    fontSize: 25,
                    color: '#000000'
                }}>
                    Categoría
                </Text>
                <Text style={{
                    textAlign: 'auto',
                    fontWeight: '300',
                    fontSize: 25,
                    color: '#4953E0'
                }} >Animales</Text>

                <Text style={{
                    textAlign: 'auto',
                    fontWeight: '300',
                    fontSize: 25,
                    color: '#000000'
                }}>
                    Precio
                </Text>
                <Text style={{
                    textAlign: 'auto',
                    fontWeight: '300',
                    fontSize: 25,
                    color: '#4953E0'
                }} >$ 30.00</Text>
            </View>

            <View>
                <Text style={{
                    textAlign: 'auto',
                    fontWeight: '300',
                    fontSize: 25,
                    color: '#000000'
                }}>
                    Elaborados por Dia
                </Text>
                <Text style={{
                    textAlign: 'auto',
                    fontWeight: '300',
                    fontSize: 25,
                    color: '#4953E0'
                }} > 500 piezas</Text>
            </View>

            <View style={{ paddingHorizontal: 20, flexDirection: 'row', paddingTop: 20 }} >
                <TouchableOpacity style={styles.commandButton}
                    onPress={() => navigation.navigate('Inicio')}>
                    <Text style={styles.panelButtonTitle}>Regresar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.commandButto}
                    onPress={() => navigation.navigate('Inicio')}
                >
                    <Text style={styles.panelButtonTitle}>
                        Eliminar </Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>

    );
}
export default DetalleI;

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: '#fff', paddingHorizontal: 50
    },
    commandButton: {
        backgroundColor: '#4953E0',
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
        marginLeft: 20
    },
    commandButto: {
        backgroundColor: '#ff0000',
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
        marginLeft: 20
    },
    panel: {
        padding: 20,
        backgroundColor: '#FFFFFF',
        paddingTop: 20,
    },
    header: {
        backgroundColor: '#FFFFFF',
        shadowColor: '#333333',
        shadowOffset: { width: -1, height: -3 },
        shadowRadius: 2,
        shadowOpacity: 0.4,
        // elevation: 5,
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    panelHeader: {
        alignItems: 'center',
    },
    panelHandle: {
        width: 40,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#00000040',
        marginBottom: 10,
    },
    panelTitle: {
        fontSize: 27,
        height: 35,
    },
    panelSubtitle: {
        fontSize: 14,
        color: 'gray',
        height: 30,
        marginBottom: 10,
    },
    panelButton: {
        padding: 13,
        borderRadius: 10,
        backgroundColor: '#FF6347',
        alignItems: 'center',
        marginVertical: 7,
    },
    panelButtonTitle: {
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 20,
        color: '#fff'
    },
    action: {
        paddingTop: 2,
        flexDirection: 'row',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginBottom: 25,

    }
});