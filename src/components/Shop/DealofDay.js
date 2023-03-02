import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Image } from 'react-native-animatable'
import Icon from "react-native-vector-icons/MaterialIcons"
import { TouchableOpacity } from 'react-native-gesture-handler'
import axios from 'axios'
import { FlatList } from 'react-native-gesture-handler'

export default function DealofDay() {
    const [featureddata, setFeaturedData] = useState([]);
    const [isLoading, setLoading] = useState(true);


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
        return(

            <View style={[styles.ImageBox, styles.shadowProp]}>
            <View style={styles.MainImgBox}>
                 <Image source={{ uri: item.base_image.small_image_url }} style={styles.img} />
             </View>
             <View style={{ flex: 1, flexDirection: "row" }}>
                 <View style={{width:100}}>
                     <Text style={styles.name}>{item.name}</Text>
                     <Text></Text>
                     <Text style={styles.name}>${price}</Text>
                 </View>
                 <TouchableOpacity>
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
            <Text style={styles.coupons}> Deal of Day</Text>
            <View style={{ flex: 1, width: "95%", alignSelf: "center", flexDirection: "row" }}>

{
    isLoading ? <Text style={{color:"black",fontSize:20}}> Loading..</Text> :
                <FlatList
                data={mainfeaturedapidata}
                horizontal
                keyExtractor={(item, index) => item.id}
                renderItem={renderItem}
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
        marginTop:10
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
        marginLeft:15
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