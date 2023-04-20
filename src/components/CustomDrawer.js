import React, { useContext } from "react";
import { View, Text, ImageBackground, Image, Touchable, Alert } from "react-native";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { Avatar } from "native-base";
import Icon from "react-native-vector-icons/Ionicons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AuthContext } from "../context/AuthContext";

const CustomDrawer = (props) => {
    const { logout } = useContext(AuthContext);
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}
                contentContainerStyle={{ backgroundColor: '#4953E0' }}>

                <ImageBackground source={require('../assets/images/menu-bg.jpeg')}
                    style={{ padding: 30 }}>
                    <Avatar source={{
                        uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    }}
                        style={{ height: 80, width: 80, borderRadius: 40, marginBottom: 10 }} />
                    <View style={{ flexDirection: 'row' }}>
                        <Icon name='person-outline' size={16} color='#fff' />
                        <Text style={{ color: '#fff', fontFamily: 'Roboto-Medium', marginRight: 5 }} >  Usuario</Text>
                    </View>
                    <Text style={{ color: '#fff', fontSize: 18, fontFamily: 'Roboto-Medium' }} >Jesús Martínez</Text>
                </ImageBackground>
                <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 10 }}>
                    <DrawerItemList {...props} />
                </View>

            </DrawerContentScrollView>
            <TouchableOpacity onPress={() => { logout() }} style={{ paddingVertical: 15 }}>



                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon name="exit-outline" size={22} />
                    <Text style={{ fontSize: 15, marginLeft: 5 }}>
                        Salir
                    </Text>
                </View>
            </TouchableOpacity>

            

        </View >

    );

}
export default CustomDrawer;