import React from "react";
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet, } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";

const DetallesP = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>

            <View>
                <Text style={{
                    textAlign: 'center',
                    fontWeight: '900',
                    fontSize: 30,
                    color: '#4953E0'
                }}>
                    Detalle Registro
                </Text>
            </View><View style={{ alignItems: 'center', paddingTop: 10 }}>

                <TouchableOpacity onPress={() => { }}>
                    <View
                        style={{
                            height: 100,
                            width: 100,
                            borderRadius: 15,
                            justifyContent: 'center',
                            alignItems: 'center'

                        }}>
                        <ImageBackground
                            style={{ height: 100, width: 100 }}
                            imageStyle={{ borderRadius: 15 }}>
                            <View
                                style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                <Icon style={{ marginRight: 5 }} name='newspaper-outline' color='#000000' size={100} />
                            </View>
                        </ImageBackground>
                    </View>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.action} >
                    Nombre
                </Text>
                <Text style={styles.action} >Producto 1</Text>
            </View>

            <View>
                <Text style={styles.action} >
                    Categoria
                </Text>
                <Text style={styles.action}  >Perros</Text>
            </View>

            <View>
                <Text style={styles.action} >
                    Empresa
                </Text>
                <Text style={styles.exp} >Expreso 1</Text>
            </View>

            <View style={{ paddingHorizontal: 80, flexDirection: 'row', paddingTop: 20 }} >
                <TouchableOpacity style={styles.commandButton}
                    onPress={() => navigation.navigate('EditarP')}>
                    <Text style={styles.panelButtonTitle}>Editar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.commandButto}
                    onPress={() => navigation.navigate('InicioP')}
                >
                    <Text style={styles.panelButtonTitle}>
                        Eliminar </Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>

    );
}
export default DetallesP;

const styles = StyleSheet.create({

    commandButto: {
        backgroundColor: '#ff0000',
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
        marginLeft: 20
    },
    panelButtonTitle: {
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 20,
        color: '#fff'
    },
    panelHeader: {
        alignItems: 'center',
    },
    action: {
        textAlign: 'center',
        fontWeight: '300',
        fontSize: 25,
        color: '#000000'
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
    exp: {
        textAlign: 'center',
        fontWeight: '300',
        fontSize: 25,
        color: '#4953E0'
    },
});