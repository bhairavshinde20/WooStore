import * as React from "react";
import { useEffect, useState } from 'react'
import { View, Text, StyleSheet, FlatList, TextInput, Pressable } from 'react-native'
import { Image } from 'react-native-animatable'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import { ViewSingleProduct } from '../../redux/reducer/Product'

import axios from 'axios'
import Skeleton from '@thevsstech/react-native-skeleton';
import Icon from "react-native-vector-icons/MaterialIcons"
import { useNavigation } from '@react-navigation/native'


export default function Explore() {
  const [featureddata, setFeaturedData] = React.useState([]);
  const [searchdata, setSearchData] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  const item = useSelector(state => state.data.data);
  const FetchSingleProducts = (item) => {
    return (
      dispatch(ViewSingleProduct(item))
      // console.log(id)
    )
  }



  useEffect(() => {
    axios.get('https://parind.online/parind/public/api/products?featured&limit=50')
      .then(async (res) => {
        const featuredProduct = await res.data.data; ``
        // console.log(featuredProduct);
        setFeaturedData(featuredProduct);
        setSearchData(featuredProduct);

      }).catch((err) => console.log(err))
      .finally(() => setLoading(false))
  }, [])
  // console.log(featureddata);
  let newfeaturedapidata = [];
  newfeaturedapidata.push(featureddata)
  const mainfeaturedapidata = newfeaturedapidata[0];
  // console.log(mainfeaturedapidata);

  const navigation = useNavigation()

  // React.useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerLargeTitle: true,
  //     headerSearchBarOptions: {
  //       placeHolder: "Search"
  //     }

  //   });

  // }, [navigation])
  const searchFilter = (text) => {
    if (text) {
      const newData = featureddata.filter((item) => {
        const itemData = item.name ?
          item.name.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;

      });
      setFeaturedData(newData);
      setSearch(text);
    } else {
      setFeaturedData(searchdata);
      setSearch(text);
    }

  }


  return (
    <ScrollView>
      <View>
        {/* <Text style={styles.coupons}> Deal of Day</Text> */}

        <View style={styles.conatiner}>
          <Text style={styles.coupons}>Product</Text>
          <TextInput style={styles.SerachBar} value={search} placeholder="Search here" placeholderTextColor="black" underlineColorAndroid="transparent" onChangeText={(text) => searchFilter(text)} />
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
                      <Pressable
                        onPress={() =>
                          navigation.navigate(
                            `Singleproduct`,
                            FetchSingleProducts(item)
                          )}
                      >
                        <View style={[styles.ImageBox, styles.shadowProp]}>
                          <View style={styles.MainImgBox}
                          >
                            <Image
                              source={{ uri: item.base_image.small_image_url }}
                              // source={require("../../assets/mainlogo.jpeg")} 
                              style={styles.img} />
                          </View>
                          <View style={{ flex: 1, flexDirection: "row" }}>
                            <View style={{ width: 100 }}>
                              <Text style={styles.name}>{item.name}</Text>
                              <Text></Text>
                              {/* <Text style={styles.name}></Text> */}
                            </View>
                            <TouchableOpacity
                              onPress={() =>
                                navigation.navigate(
                                  `Singleproduct`,
                                  FetchSingleProducts(item)
                                )}
                            >
                              <View style={styles.iconBox}>
                                <Icon name="arrow-right-alt" size={28} color="white" />
                              </View>
                            </TouchableOpacity>
                          </View>
                        </View>
                      </Pressable>
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
  SerachBar: {
    height: 60,
    width: 400,
    borderWidth: 1,
    borderColor: "black",
    alignSelf: "center",
    padding: 20,
    color: "black",
    fontFamily: "Labrada-Bold",
  },
})