import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet

} from 'react-native';
import { DrawerContentScrollView, DrawerItemList, } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function CustomDrawer(props) {
    return (

        <View style={{ flex: 1, }}>
            <DrawerContentScrollView
                {...props}
                contentContainerStyle={{ backgroundColor: 'white' }}>
                <View style={{ marginBottom: 30, marginTop: 10 }}>
                    <View style={styles.userInfoSection}>
                        <View style={[styles.ImgBox, styles.shadowProp]}>
                            <Icon name="person" size={30} color="gray" />
                        </View>
                        <View style={styles.UserBox}>
                            <Text style={styles.User}>User</Text>
                            <Text style={styles.Email}>Email</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 10 }}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: '#ccc' }}>
                <TouchableOpacity onPress={() => { }} style={{ paddingVertical: 15 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon name="exit-to-app" size={30} color="#52b372" />
                        <Text
                            style={{
                                fontSize: 15,
                                fontFamily: "Labrada-Bold",
                                marginLeft: 5,
                                color: 'black'
                            }}>
                            Log Out
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        flex: 1,
        justifyContent: "space-between",
        alignSelf: "center",
        flexDirection: "row",
        width: "90%",
        height: 80,
        borderColor: "gray",
        borderRadius: 20,
        borderWidth: 1,
        marginTop: 40
    },
    ImgBox: {
        height: 65,
        width: 65,
        // borderWidth:1,
        borderRadius: 50,
        // borderColor:"Black",
        alignSelf: "flex-start",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 20,
        marginTop: 6,
        backgroundColor: "white",
        elevation: 10,
    },
    shadowProp: {
        shadowOffset: { width: -2, height: 4 },
        shadowColor: '#171717',
        shadowOpacity: 0.1,
        shadowRadius: 3,
    },
    UserBox: {
        flex: 1,
        width: 65,
        height: 65,
        flexDirection: "column",
        alignItems: "flex-start",
        marginTop: 10,
        marginLeft: 20,
    },
    User: {
        color: "black",
        fontFamily: "Labrada-Bold",
        fontSize: 24
    },
    Email: {
        color: "black",
        fontFamily: "Labrada-Regular",
        fontSize: 18
    },

});
