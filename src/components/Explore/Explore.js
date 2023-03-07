import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet,FlatList } from 'react-native'
import { Image } from 'react-native-animatable'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import { ViewSingleProduct } from '../../redux/reducer/Product'

import axios from 'axios'
import Skeleton from '@thevsstech/react-native-skeleton';
import Icon from "react-native-vector-icons/MaterialIcons"


export default function Explore({ navigation }) {
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



  useEffect(() => {
    axios.get('https://parind.online/parind/public/api/products?featured&limit=12')
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
  // console.log(mainfeaturedapidata);



  return (
    <ScrollView>
      <View>
        {/* <Text style={styles.coupons}> Deal of Day</Text> */}
        <View style={styles.conatiner}>
          <Text style={styles.coupons}>Product</Text>
          <View style={{ width: "100%", alignSelf: "center", flexDirection: 'row' }}>
            {
              isLoading ?
                // <Text styles={{ color: "black",fontSize:30 }}>Loading...</Text> 
                <Skeleton>
                  <Skeleton.Item flexDirection="row" >
                    <Skeleton.Item alignItems="center" width={230} height={260} marginLeft={20} borderRadius={20} marginTop={20} />
                    <Skeleton.Item alignItems="center" width={230} height={260} marginLeft={20} borderRadius={20} marginTop={20} />
                  </Skeleton.Item>
              </Skeleton>
                :

                <FlatList
                  data={mainfeaturedapidata}
                  renderItem={({ item }, index) => {

                    return (
                      <View style={[styles.ImageBox, styles.shadowProp]}>
                        {/* <Pressable onPress={() =>
                          navigation.navigate(
                            `Singleproduct`,
                            FetchSingleProducts(item)
                          )}
                        > */}
                          <View style={styles.MainImgBox}
                          onPress={() =>
                            navigation.navigate(
                              `Singleproduct`,
                              FetchSingleProducts(item)
                            )}
                          >
                            <Image
                              source={{ uri: item.base_image.small_image_url }}
                              // source={require("../../assets/mainlogo.jpeg")} 
                              style={styles.img} />
                          </View>
                        {/* </Pressable> */}
                        <View style={{ flex: 1, flexDirection: "row" }}>
                          <View style={{ width: 100 }}>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text></Text>
                            {/* <Text style={styles.name}></Text> */}
                          </View>
                          <TouchableOpacity>
                            <View style={styles.iconBox}>
                              <Icon name="arrow-right-alt" size={28} color="white" />
                            </View>
                          </TouchableOpacity>
                        </View>
                      </View>
                    )



                  }}
                  numColumns={2}
                  keyExtractor={(item, index) => item.id}
                />
            }
          </View>
        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  conatiner: {
    // flex: 1
  },
  coupons: {
    fontSize: 25,
    color: "black",
    fontFamily: "Labrada-Bold",
    marginLeft: 10,
    marginTop: 10,
    position: 'relative'
  },
  ImageBox: {
    width: 230,
    height: 260,
    backgroundColor: 'white',
    alignItems: 'flex-start',
    borderRadius: 20,
    marginTop: 10,
    padding: 10,
    // elevation: 10,
    borderWidth: 1,
    borderColor: "lightgray",
    marginLeft: 8,
    marginBottom: 8
  },
  shadowProp: {
    shadowOffset: { width: -2, height: 4 },
    shadowColor: '#171717',
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  MainImgBox: {
    height: 160,
    width: 145,
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
    height: 150,
    width: 140,
  },
  name: {
    fontSize: 20,
    color: "black",
    fontFamily: "Labrada-Bold",
    marginLeft: 15
  },
  iconBox: {
    height: 40,
    width: 42,
    // borderColor: "black",
    borderRadius: 50,
    // borderWidth: 1,
    backgroundColor: "#52b372",
    marginTop: 20,
    marginLeft: 55,
    alignItems: "center",
    justifyContent: "center",
  },
})