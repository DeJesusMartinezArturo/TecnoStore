import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { SafeAreaView } from 'react-native-safe-area-context';


const OnboardingScreen = ({ navigation }) => {
    return (
        <SafeAreaView
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
            <View>
                <Text style={{ fontSize: 40, fontWeight: 'boid', color: '#20315f' }} >TecnoStore</Text>
            </View>

            <TouchableOpacity
                onPress={() => navigation.navigate('Login')}
            >

                <View style={{ flexDirection: 'row' }}>
                    <Text style={{
                        color: '#20315f', fontFamily: 'Roboto-Medium',
                        marginRight: 0, fontSize: 25
                    }} >Iniciar {' '}</Text>
                    <Icon name='caret-forward-circle' size={30} color='#20315f' />
                </View>
            </TouchableOpacity>

        </SafeAreaView>

    );
}
export default OnboardingScreen;