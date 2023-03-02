import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Image } from 'react-native-animatable'
import Icon from "react-native-vector-icons/MaterialIcons"
import { TouchableOpacity } from 'react-native-gesture-handler'
import axios from 'axios'
import { FlatList } from 'react-native-gesture-handler'


export default function Explore({ navigation }) {
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
  // console.log(mainfeaturedapidata);



  return (
    <View>
      {/* <Text style={styles.coupons}> Deal of Day</Text> */}
      <View style={styles.conatiner}>
        <Text style={styles.coupons}> Deal of Day</Text>
        <View style={{ flex: 1, width: "100%", alignSelf: "center", flexDirection: "row" }}>

           <View style={[styles.ImageBox, styles.shadowProp]}>
                        <View style={styles.MainImgBox}>
                          <Image source={require("../../assets/mainlogo.jpeg")} style={styles.img} />
                        </View>
                        <View style={{ flex: 1, flexDirection: "row" }}>
                          <View style={{ width: 100 }}>
                            <Text></Text>
                            <Text></Text>
                            <Text style={styles.name}>Product</Text>
                          </View>
                          <TouchableOpacity>
                            <View style={styles.iconBox}>
                              <Icon name="arrow-right-alt" size={28} color="white" />
                            </View>
                          </TouchableOpacity>
                        </View>
                      </View> 
          {/* {
            isLoading ? <Text styles={{ color: "black" }}>Loading</Text> :

              <FlatList
                numColumns={2}
                data={mainfeaturedapidata}
                // keyExtractor={(item, index) => item.id} 
                renderItem={({ item }, index) => {

                  return (
                    <View style={[styles.ImageBox, styles.shadowProp]}>
                      <View style={styles.MainImgBox}>
                        <Image source={require("../../assets/mainlogo.jpeg")} style={styles.img} />
                      </View>
                      <View style={{ flex: 1, flexDirection: "row" }}>
                        <View style={{ width: 100 }}>
                          <Text></Text>
                          <Text></Text>
                          <Text style={styles.name}>{item.name}</Text>
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
              />
          } */}











          <View style={[styles.ImageBox, styles.shadowProp]}>
                        <View style={styles.MainImgBox}>
                          <Image source={require("../../assets/mainlogo.jpeg")} style={styles.img} />
                        </View>
                        <View style={{ flex: 1, flexDirection: "row" }}>
                          <View style={{ width: 100 }}>
                            <Text></Text>
                            <Text></Text>
                            <Text style={styles.name}>Product</Text>
                          </View>
                          <TouchableOpacity>
                            <View style={styles.iconBox}>
                              <Icon name="arrow-right-alt" size={28} color="white" />
                            </View>
                          </TouchableOpacity>
                        </View>
                      </View> 
        </View>
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
    marginLeft: 8
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