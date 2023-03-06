import { View, Text, StyleSheet,Image, Pressable ,TouchableOpacity,FlatList} from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/MaterialIcons"

export default function NewCoupons({ navigation }) {
    const data = [
        {
            id: 1,
            name: "umar",
            discount: "Get 20% off",
            title: "Use Code"
        },
        {
            id: 2,
            name: "adb",
            discount: "Get 30% off",
            title: "Use Code"
        },
        {
            id: 3,
            name: "toto",
            discount: "Get 50% off",
            title: "Use Code"
        },
        {
            id: 4,
            name: "kumar",
            discount: "Get 10% off",
            title: "Use Code"
        },
    ]
    return (
        <View >
            <View style={styles.container2}>
                <Text style={styles.coupons}>Coupons for you</Text>
                <TouchableOpacity>
                    <Text onPress={()=> navigation.navigate('Coupons')} style={styles.see}>See All</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, width: "95%", alignSelf: "center" }}>
                <FlatList
                    horizontal
                    data={data}
                    renderItem={({ item }, index) => {
                        return (

                            <View style={styles.GreenBoxContainer}>
                                <View style={styles.GCBox}>
                                    <View style={styles.GimgBox}>
                                        <Icon name="verified" size={32} color="#52b372" />
                                    </View>
                                    <View style={styles.Ccodebox}>
                                        <Text style={styles.get}>{item.discount}</Text>
                                        <Text style={styles.null}>{item.title} {item.name}</Text>
                                    </View>
                                </View>
                            </View>
                        )

                    }}
                />
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    contsiner: {
        flex: 1,
        margin: 14

    },
    container2: {
        width: "95%",
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "space-between"
    },
    coupons: {
        fontSize: 20,
        color: "black",
        fontFamily: "Labrada-Bold",
    },
    see: {
        fontSize: 15,
        color: "#52b372",
        fontFamily: "Labrada-Bold",
    },
    GreenBoxContainer: {
        width: "95%",
        marginTop: 13,
        flex: 1,
        flexDirection: 'column',
        alignContent: 'space-around',
        justifyContent: 'space-around',
        alignSelf: 'center',
        paddingBottom: 20,
        marginLeft: 12,
    },
    GCBox: {
        height: 80,
        width: 310,
        // borderWidth:1,
        // borderColor: "black",
        borderRadius: 10,
        backgroundColor: "#c4f3a5",
        flexDirection: "row",
        // alignSelf:"center"
    },
    GimgBox: {
        height: 50,
        width: 50,
        // width:"25%",
        alignSelf: 'flex-start',
        marginLeft: 30,
        marginTop: 20,
        resizemode: "content",
    },
    Ccodebox: {
        height: 70,
        width: 150,
        borderColor: "black",
        justifyContent: "center",
        alignItems: "center"
    },
    get: {
        fontSize: 18,
        color: "black",
        fontFamily: "Labrada-Bold",
    },
    null: {
        color: "black",
        // fontFamily:"Labrada-Bold",
        fontSize: 14,

    },
})