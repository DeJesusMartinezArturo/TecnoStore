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
                <Text style={{
                    textAlign: 'center',
                    fontWeight: '300',
                    fontSize: 25,
                    color: '#000000'
                }}>
                    Nombre Empresa
                </Text>
                <Text style={{
                    textAlign: 'center',
                    fontWeight: '300',
                    fontSize: 25,
                    color: '#4953E0'
                }} >Ositos Ted</Text>
            </View>

            <View>
                <Text style={{
                    textAlign: 'center',
                    fontWeight: '300',
                    fontSize: 25,
                    color: '#000000'
                }}>
                    Usuario
                </Text>
                <Text style={{
                    textAlign: 'center',
                    fontWeight: '300',
                    fontSize: 25,
                    color: '#4953E0'
                }} >Jesus_Martinez</Text>
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
    container: {
        flex: 1,  paddingHorizontal: 50,backgroundColor: '#fff'
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