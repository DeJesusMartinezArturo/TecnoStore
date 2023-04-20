import React from "react";
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";

const DetallesE = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>

            <View>
                <Text style={{
                    textAlign: 'center',
                    fontWeight: '900',
                    fontSize: 30,
                    color: '#4953E0'
                }}>
                    Detalle Empresa
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
                                <Icon style={{ marginRight: 5 }} name='business-outline' color='#000000' size={100} />
                            </View>
                        </ImageBackground>
                    </View>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.action} >
                    Nombre Empresa
                </Text>
                <Text style={styles.action}  >Ositos Ted</Text>
            </View>

            <View>
                <Text style={styles.action}>
                    Usuario
                </Text>
                <Text style={styles.exp} >Jesus_Martinez</Text>
            </View>

            <View style={{ paddingHorizontal: 80, flexDirection: 'row', paddingTop: 20 }} >
                <TouchableOpacity style={styles.commandButton}
                    onPress={() => navigation.navigate('EditarE')}>
                    <Text style={styles.panelButtonTitle}>Editar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.commandButto}
                    onPress={() => navigation.navigate('InicioE')}
                >
                    <Text style={styles.panelButtonTitle}>
                        Eliminar </Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>

    );
}
export default DetallesE;

const styles = StyleSheet.create({
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
    panelHeader: {
        alignItems: 'center',
    },
    panelTitle: {
        fontSize: 27,
        height: 35,
    },
    panelButtonTitle: {
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 20,
        color: '#fff'
    },
    action: {
        textAlign: 'center',
        fontWeight: '300',
        fontSize: 25,
        color: '#000000'
    },
    exp: {
        textAlign: 'center',
        fontWeight: '300',
        fontSize: 25,
        color: '#4953E0'
    },
});