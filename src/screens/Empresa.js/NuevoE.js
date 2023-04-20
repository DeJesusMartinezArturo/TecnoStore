import React, { } from 'react';
import Icon from "react-native-vector-icons/Ionicons";
import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    TextInput,
    StyleSheet,
} from 'react-native';

const NuevoE = ({ navigation }) => {
    return (
        <View style={styles.container}>

            <View>
                <Text style={{
                    textAlign: 'center',
                    paddingTop: 10,
                    fontWeight: '900',
                    fontSize: 30,
                    color: '#4953E0'
                }}>
                    Nueva Empresa
                </Text>
            </View>

            <View style={{ alignItems: 'center', paddingTop: 35 }}>
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
                <Text style={{ fontSize: 30, fontWeight: 'bold', marginTop: 40 }}>

                </Text>
            </View>
            <View style={{ marginTop: 20 }}>

                <View style={styles.action}>
                    <Icon style={{ marginRight: 5 }} name='business-outline' color='#000000' size={30} />
                    <TextInput
                        placeholder="Empresa"
                        placeholderTextColor="#666666"
                        keyboardType="number-pad"
                        autoCorrect={false}
                    />
                </View>
                <View style={styles.action}>
                    <Icon style={{ marginRight: 5 }} name='person-outline' color='#000000' size={30} />
                    <TextInput
                        placeholder="Usuario"
                        placeholderTextColor="#666666"
                        keyboardType="email-address"
                        autoCorrect={false}
                    />
                </View>
            </View>

            <View style={{ paddingHorizontal: 30, flexDirection: 'row' }} >
                <TouchableOpacity style={styles.commandButton}
                    onPress={() => navigation.navigate('InicioE')}>
                    <Text style={styles.panelButtonTitle}>Crear</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.commandButto}
                    onPress={() => navigation.navigate('InicioE')}
                >
                    <Text style={styles.panelButtonTitle}>
                        Cancelar </Text>
                </TouchableOpacity>
            </View>

        </View>


    );
}
export default NuevoE;

const styles = StyleSheet.create({
    container: {
        flex: 1, paddingHorizontal: 50, backgroundColor: '#fff'
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