import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Coupons({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.TEXT}>Available Coupons</Text>
            <View style={[styles.CouponesMainBox, styles.shadowProp]}>
                <View style={styles.DiscountBox}>
                    {/* <View style={styles.RoundBox}></View> */}
                    <Text style={styles.disTitle}>D I S C O U N T</Text>
                </View>
                <View style={styles.Discount}>
                    <View style={{ flexDirection: "row", alignItems: "center", paddingLeft: 20, paddingTop: 20 }}>
                        <Text style={styles.doller}>$ 120.00</Text>
                        <Text style={styles.off}> off</Text>
                    </View>

                    <View style={{ flexDirection: "row", alignItems: "center", marginLeft: 20, marginBottom: 30 }}>
                        <Text style={styles.used}>Used Code</Text>
                        <Text style={styles.umar}> umar</Text>
                    </View>

                </View>
            </View>


            <View style={[styles.CouponesMainBox, styles.shadowProp]}>
                <View style={[styles.DiscountBox, styles.nd2Box]}>
                    {/* <View style={styles.RoundBox}></View> */}
                    <Text style={styles.disTitle}>D I S C O U N T</Text>
                </View>
                <View style={styles.Discount}>
                    <View style={{ flexDirection: "row", alignItems: "center", paddingLeft: 20, paddingTop: 20 }}>
                        <Text style={styles.doller}>$ 10.00</Text>
                        <Text style={styles.off}> off</Text>
                    </View>

                    <View style={{ flexDirection: "row", alignItems: "center", marginLeft: 20, marginBottom: 30 }}>
                        <Text style={styles.used}>Used Code</Text>
                        <Text style={styles.umar}> adb</Text>
                    </View>

                </View>
            </View>

            <View style={[styles.CouponesMainBox, styles.shadowProp]}>
                <View style={[styles.DiscountBox, styles.nd3Box]}>
                    {/* <View style={styles.RoundBox}></View> */}
                    <Text style={styles.disTitle}>D I S C O U N T</Text>
                </View>
                <View style={styles.Discount}>
                    <View style={{ flexDirection: "row", alignItems: "center", paddingLeft: 20, paddingTop: 20 }}>
                        <Text style={styles.doller}>$ 10.00</Text>
                        <Text style={styles.off}> off</Text>
                    </View>

                    <View style={{ flexDirection: "row", alignItems: "center", marginLeft: 20, marginBottom: 30 }}>
                        <Text style={styles.used}>Used Code</Text>
                        <Text style={styles.umar}> toto</Text>
                    </View>

                </View>
            </View>

            <View style={[styles.CouponesMainBox, styles.shadowProp]}>
                <View style={[styles.DiscountBox, styles.nd4Box]}>
                    {/* <View style={styles.RoundBox}></View> */}
                    <Text style={styles.disTitle}>D I S C O U N T</Text>
                </View>
                <View style={styles.Discount}>
                    <View style={{ flexDirection: "row", alignItems: "center", paddingLeft: 20, paddingTop: 20 }}>
                        <Text style={styles.doller}>$ 100.00</Text>
                        <Text style={styles.off}> off</Text>
                    </View>

                    <View style={{ flexDirection: "row", alignItems: "center", marginLeft: 20, marginBottom: 30 }}>
                        <Text style={styles.used}>Used Code</Text>
                        <Text style={styles.umar}> kumar10</Text>
                    </View>

                </View>
            </View>

            <View style={[styles.CouponesMainBox, styles.shadowProp]}>
                <View style={[styles.DiscountBox, styles.nd5Box]}>
                    {/* <View style={styles.RoundBox}></View> */}
                    <Text style={styles.disTitle}>D I S C O U N T</Text>
                </View>
                <View style={styles.Discount}>
                    <View style={{ flexDirection: "row", alignItems: "center", paddingLeft: 20, paddingTop: 20 }}>
                        <Text style={styles.doller}>$ 50.00</Text>
                        <Text style={styles.off}> off</Text>
                    </View>

                    <View style={{ flexDirection: "row", alignItems: "center", marginLeft: 20, marginBottom: 30 }}>
                        <Text style={styles.used}>Used Code</Text>
                        <Text style={styles.umar}> ahmad</Text>
                    </View>

                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    TEXT: {
        color: "gray",
        fontSize: 15,
        marginLeft: 20,
        marginTop: 10,
    },
    CouponesMainBox: {
        marginTop: 10,
        flexDirection: "row",
        elevation: 10,
        height: 150,
        width: "97%",
        justifyContent: "flex-start",
        backgroundColor: "white",
        marginLeft: 10,
        borderRadius: 15,
    },
    shadowProp: {
        shadowOffset: { width: -2, height: 4 },
        shadowColor: '#171717',
        shadowOpacity: 0.1,
        shadowRadius: 3,
    },
    RoundBox: {
        width: 20,
        height: 20,
        backgroundColor: "white",
        borderRadius: 10,
        position: "absolute",
        marginTop: 55,
    },
    DiscountBox: {
        padding: 20,
        width: "17%",
        height: 149,
        borderRightWidth: 1,
        borderRightColor: "black",
        backgroundColor: "#b218e0",
        borderBottomLeftRadius: 15,
        borderTopLeftRadius: 15,

    },
    disTitle: {
        color: "white",
        width: 90,
        fontFamily: "Labrada-Regular",
        height: 100,
        fontSize: 15,
        lineHeight: 60,
        transform: [{ rotate: '270deg' }],
        marginTop: 5,
        alignItems: "center",
    },
    Discount: {
        width: "55%",
        height: 147,
        borderRightColor: "black",
        flexDirection: "column"
    },
    doller: {
        color: "black",
        fontWeight: "bold",
        fontSize: 30,
    },
    off: {
        color: "black",
        fontWeight: "bold",
        fontSize: 20,
        marginTop: 5
    },
    used: {
        color: "gray",
        fontSize: 20,
    },
    umar: {
        color: "black",
        fontWeight: "bold",
        fontSize: 20,
    },
    nd2Box: {
        backgroundColor: "#591d69"
    },
    nd3Box: {
        backgroundColor: "#023f5c"
    },
    nd4Box: {
        backgroundColor: "#5ec9fa"

    },
    nd5Box: {
        backgroundColor: "#a1e730"

    },
})