import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { Image } from 'react-native-animatable'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { FlatList } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import { ViewSingleProduct } from '../../redux/reducer/Product'
import { addToCart } from '../../redux/reducer/Reducers'
import Skeleton from '@thevsstech/react-native-skeleton';
import axios from 'axios'
import Icon from "react-native-vector-icons/MaterialIcons"
import { useNavigation } from '@react-navigation/native'

export default function Tranding() {
    const navigate = useNavigation().navigate
    const changePage = () => {
        navigate('Singleproduct')
    }
    const [featureddata, setFeaturedData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const dispatch = useDispatch();

    const item = useSelector(state => state.data.data);
    const FetchSingleProducts = (item) => {
        return (
            dispatch(ViewSingleProduct(item))
            // console.log(id)
        )
    }

    const addItemToCart = item => {
        dispatch(addToCart(item));
    };


    useEffect(() => {
        axios.get('https://parind.online/parind/public/api/products?featured')
            .then(async (res) => {
                const featuredProduct = await res.data.data; ``
                // console.log(featuredProduct);
                setFeaturedData(featuredProduct);
            }).catch((err) => console.log(err))
            .finally(() => setLoading(false))
    }, [])
    // console.log(featureddata);
    let newfeaturedapidata = [];
    newfeaturedapidata.push(featureddata)
    const mainfeaturedapidata = newfeaturedapidata[0];

    const renderItem = ({ item }) => {
        if (item) {
            let price = parseFloat(item.price).toFixed(2);
            return (

                <View style={[styles.ImageBox, styles.shadowProp]}>
                    <Pressable onPress={() => (
                        FetchSingleProducts(item),
                        changePage()

                    )}>
                        <View style={styles.MainImgBox}>
                            <Image source={{ uri: item.base_image.small_image_url }} style={styles.img} />
                        </View>
                    </Pressable>
                    <View style={{ flex: 1, flexDirection: "row" }}>
                        <View style={{ width: 100 }}>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text></Text>
                            <Text style={styles.name}>${price}</Text>
                        </View>
                        <TouchableOpacity
                            onPress={() => addItemToCart(item)}
                        >
                            <View style={styles.iconBox}>
                                <Icon name="add-shopping-cart" size={30} color="white" />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

            )
        }
    }
    return (

        <View style={styles.conatiner}>
            <Text style={styles.coupons}> Tranding</Text>
            <View style={{ flex: 1, width: "95%", alignSelf: "center", flexDirection: "row" }}>

                {
                    isLoading ?
                        // <Text style={{ color: "black", fontSize: 20 }}> Loading..</Text>
                        <Skeleton>
                            <Skeleton.Item flexDirection="row" >
                                <Skeleton.Item alignItems="center" width={210} height={320} marginLeft={20} borderRadius={20} marginTop={20} />
                                <Skeleton.Item alignItems="center" width={210} height={320} marginLeft={20} borderRadius={20} marginTop={20} />
                            </Skeleton.Item>
                        </Skeleton>
                        :
                        <FlatList
                            data={mainfeaturedapidata}
                            horizontal
                            renderItem={renderItem}
                            keyExtractor={(item, index) => item.id}
                        />



                }
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    conatiner: {
        flex: 1
    },
    coupons: {
        fontSize: 25,
        color: "black",
        fontFamily: "Labrada-Bold",
        marginLeft: 10,
        marginTop: 10
    },
    ImageBox: {
        width: 210,
        height: 360,
        backgroundColor: 'white',
        alignItems: 'flex-start',
        borderRadius: 20,
        marginTop: 20,
        padding: 10,
        // elevation: 10,
        borderWidth: 1,
        borderColor: "lightgray",
        marginLeft: 15,
        marginBottom: 10
    },
    shadowProp: {
        shadowOffset: { width: -2, height: 4 },
        shadowColor: '#171717',
        shadowOpacity: 0.1,
        shadowRadius: 3,
    },
    MainImgBox: {
        height: 220,
        width: 170,
        // borderWidth:1,
        // borderColor:"red",
        backgroundColor: "white",
        alignSelf: "center",
        marginTop: 15,
        resizeMode: "content",
        justifyContent: "center",
        alignItems: "center"
    },
    img: {
        height: 200,
        width: 150,
    },
    name: {
        fontSize: 20,
        color: "black",
        fontFamily: "Labrada-Bold",
        marginLeft: 15
    },
    iconBox: {
        height: 60,
        width: 60,
        borderColor: "black",
        borderRadius: 20,
        // borderWidth: 1,
        backgroundColor: "#52b372",
        marginTop: 30,
        marginLeft: 30,
        alignItems: "center",
        justifyContent: "center",


    },
})