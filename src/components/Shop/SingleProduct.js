import { View, Text, StyleSheet, Button, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { useCallback, useState, useMemo, useRef } from 'react'
import { ImageSlider } from 'react-native-image-slider-banner'
import { useSelector } from 'react-redux';
import { BottomSheetModal, BottomSheetModalProvider, } from "@gorhom/bottom-sheet";

import Icon from "react-native-vector-icons/MaterialIcons"
import axios from 'axios';


export default function SingleProduct() {
    const item = useSelector(state => state.data.data);
    console.log(item);
    let myKeysArr = [];
    myKeysArr.push(item);
    console.log(myKeysArr)
    return (
        <View style={styles.container}>
            <FlatList
                data={myKeysArr}
                renderItem={({ item }) => {
                    let price = parseFloat(item.price).toFixed(2);
                    return (
                        <>
                            <View style={styles.ImgContainer}>
                                <Image
                                    style={styles.mainImg}
                                    source={{ uri: item.base_image.medium_image_url }}
                                // source={require("../../assets/main.jpeg")}
                                />
                            </View>
                            <View style={styles.Img4Container}>
                                <View style={styles.Img1Container}>
                                    <Image
                                        style={styles.ImagView}
                                        source={{ uri: item.base_image.small_image_url }}
                                        // source={require("../../assets/main.jpeg")}
                                    />
                                </View>
                                <View style={styles.Img1Container}>
                                    <Image
                                        style={styles.ImagView}
                                        source={{ uri: item.base_image.medium_image_url }}
                                        // source={require("../../assets/main.jpeg")}
                                    />
                                </View>
                                <View style={styles.Img1Container}>
                                    <Image
                                        style={styles.ImagView}
                                        source={{ uri: item.base_image.large_image_url }}
                                        // source={require("../../assets/main.jpeg")}
                                    />
                                </View>
                                <View style={styles.Img1Container}>
                                    <Image
                                        style={[styles.ImagView, styles.Img4view]}
                                        source={{ uri: item.base_image.original_image_url }}
                                        // source={require("../../assets/main.jpeg")}
                                    />
                                </View>
                            </View>
                            <View style={styles.CatConatiner}>
                                <Text style={styles.cat}>{item.category_name}</Text>
                                <Text style={styles.price}>${price}</Text>
                            </View>
                            <View style={styles.CatConatiner}>
                                <Text style={styles.Product}>{item.name}</Text>
                                <Text style={styles.price}></Text>
                            </View>
                            <View style={{ borderBottomWidth: 1, borderColor: "gray" }}></View>
                            <View style={[styles.ProductDBox, styles.shadowProp]}>
                                <Text style={styles.productDexBox}>Product Decription:</Text>
                                <Text style={{ color: "black", fontSize: 13, padding: 10 }}>
                                    Description is the pattern of narrative development that aims to make vivid a place, object, character, or group. Description is one of four rhetorical modes, along with exposition, argumentation, and narration.
                                </Text>
                            </View>
                            <View style={[styles.GrrenBox, styles.shadowProp]}>
                                <View style={{ width: "50%", flexDirection: "row", justifyContent: 'space-around' }}>
                                    <View style={styles.IconBox}>
                                        <Icon name="share" size={30} color="black" />
                                    </View>
                                    <View style={styles.IconBox}>
                                        <Icon name="favorite-border" size={30} color="black" />
                                    </View>
                                </View>
                                <TouchableOpacity style={styles.cartBox}>
                                    {/* <View style={styles.cartBox}> */}
                                    <Icon name="add-shopping-cart" size={30} color="white" />
                                    <Text style={styles.ViewC}>View Cart</Text>
                                    {/* </View> */}
                                </TouchableOpacity>
                            </View>
                        </>
                    );
                }
                }
            />

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: 'white',
    },
    ImgContainer: {
        width: '90%',
        height: 350,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    mainImg: {
        width: '100%',
        height: 260,
        // resizemode: 'content',
    },
    Img4Container: {
        width: '100%',
        height: 130,
        alignSelf: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    Img1Container: {
        borderWidth: 1,
        borderRadius: 20,
        borderColor: 'black',
        opacity: 0.8,
        width: 100,
        height: 100,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ImagView: {
        width: '70%',
        height: 45,
        // resizemode: 'content',
    },
    Img4view: {
        // width: '50%',
        height: 45,
    },
    CatConatiner: {
        width: "90%",
        height: 50,
        flexDirection: "row",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "space-between",
        // marginBottom: 10

    },
    cat: {
        fontSize: 12,
        color: "black",
        fontWeight: '500',
        fontFamily: "Labrada-Regular",
    },
    price: {
        fontSize: 30,
        color: "black",

        fontFamily: "Labrada-Bold",
        //  fontWeight:"bold", 
    },
    Product: {
        fontSize: 25,
        color: "black",
        fontWeight: '500',
        fontFamily: "Labrada-Bold",
    },
    ProductDBox: {
        width: "100%",
        height: 100,
        // borderWidth:1,
        borderColor: "black",
        alignSelf: "center",
        marginTop: 20,
        backgroundColor: "white",
        elevation: 10,
        padding: 20,
        //         borderBottomWidth: 1,
        // borderBottomColor: "gray"
    },
    shadowProp: {
        shadowOffset: { width: -2, height: 4 },
        shadowColor: '#171717',
        shadowOpacity: 0.1,
        shadowRadius: 3,
    },
    productDexBox: {
        color: "black",
        fontFamily: "Labrada-Bold",
        fontSize: 13
    },
    GrrenBox: {
        bottom: 0,
        left: 0,
        right: 0,
        position: 'relative',
        height: 100,
        width: "100%",
        marginTop: 30,
        backgroundColor: "white",
        elevation: 5,
        alignItems: "flex-start",
        justifyContent: "flex-start",
        flexDirection: "row",
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: "gray"
    },
    IconBox: {
        width: 50,
        height: 50,
        // borderWidth: 1,
        borderRadius: 15,
        backgroundColor: "lightgray",
        alignItems: "center",
        justifyContent: "center"

    },
    cartBox: {
        width: "50%",
        flexDirection: "row",
        height: 50,
        // borderWidth:1,
        backgroundColor: "#52b372",
        borderRadius: 5,
        justifyContent: "space-around",
        padding: 9
    },
    ViewC: {
        color: "white",
        fontFamily: "Labrada-Bold",
        fontSize: 20,
        marginTop: 2
    },
})