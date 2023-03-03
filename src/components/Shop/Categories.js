import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import Skeleton from '@thevsstech/react-native-skeleton';

export default function Categories({ navigation }) {
    const [newproduct, setNewProduct] = useState([]);
    const [isLoading, setLoading] = useState(true);
    // ?new&limit=12
    useEffect(() => {
        axios.get('https://parind.online/parind/public/api/products?new&limit=12')
            .then(async (res) => {
                const newproductapi = await res.data.data;
                // console.log(newproduct)
                setNewProduct(newproductapi);
            }).catch((err) => console.log(err))
            .finally(() => setLoading(false))
    }, [])
    let newProductApi = [];
    newProductApi.push(newproduct);
    const MainNewProductApi = newProductApi[0];
    // console.log(MainNewProductApi)



    const renderItem = ({ item }) => (
        <TouchableOpacity
            onPress={() => navigation.navigate("Explore")}>
            <View style={styles.catBox}>
                <View style={styles.IMGbox}>
                    <Image
                        source={{ uri: item.base_image.small_image_url }}
                        // source={require("../../assets/mainlogo.jpeg")}
                        style={styles.img} />
                </View>
                <Text style={styles.title}>{item.category_name}</Text>
            </View>
        </TouchableOpacity>
    );



    return (
        <View style={styles.container}>
            <Text style={styles.Categories}>Categories</Text>
            <View style={{ width: "100%", alignContent: "center", justifyContent: "center", alignItems: "center" }}>
                {
                    isLoading ?
                        <Skeleton>
                            <Skeleton.Item flexDirection="row" padding={20} marginLeft={20} >
                                <Skeleton.Item width={100} height={100} marginLeft={5} borderRadius={50} marginTop={20} />
                                <Skeleton.Item width={100} height={100} marginLeft={20} borderRadius={50} marginTop={20} />
                                <Skeleton.Item width={100} height={100} marginLeft={20} borderRadius={50} marginTop={20} />
                                <Skeleton.Item width={100} height={100} marginLeft={20} borderRadius={50} marginTop={20} />

                            </Skeleton.Item>
                        </Skeleton>
                        :
                        <FlatList
                            numColumns={4}
                            data={MainNewProductApi}
                            renderItem={renderItem}
                        />
                }
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "95%",
        alignSelf: "center",
    },
    Categories: {
        fontSize: 20,
        color: "black",
        fontFamily: "Labrada-Bold",
    },
    catBox: {
        width: 110,
        height: 120,
        alignContent: "center",
        justifyContent: "center",
        textAlign: "center",
        flexDirection: "column"
    },
    IMGbox: {
        height: 100,
        width: 100,
        resizeMode: "content",
        borderBottomColor: "black",
        // borderWidth:1,
        borderRadius: 50,
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
    },
    img: {
        height: 100,
        width: 100,
        borderRadius: 50,
    },
    title: {
        fontSize: 15,
        color: "black",
        fontFamily: "Labrada-Bold",
        marginLeft: 20
    },

})