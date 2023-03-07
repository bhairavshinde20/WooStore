import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import { AppBar, HStack, IconButton } from "@react-native-material/core";

import React from 'react'
import styles from './FavouriteStyle'
import SingleProduct from '../Shop/SingleProduct'
import Icon from "react-native-vector-icons/MaterialIcons"


export default function Favourite() {
  return (
    <ScrollView>
    <View style={styles.container}>
      {/* <Text style={{color:"black"}}>Fav</Text> */}
      {/* <SingleProduct/> */}
      <View style={{ width: "100%", alignSelf: "center", flexDirection: 'row' }}>

        <View style={[styles.ImageBox, styles.shadowProp]}>
          <View style={{ width: "100%", justifyContent: "flex-end", alignContent: "flex-end", flexDirection: "row" }}>
            <Icon name="close" size={25} color="black" />
          </View>
          <View style={styles.MainImgBox}>
            <Image
              // source={{ uri: item.base_image.small_image_url }}
              source={require("../../assets/mainlogo.jpeg")}
              style={styles.img} />
          </View>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={{ width: 100 }}>
              <Text style={styles.name}>Product Name</Text>
              <Text></Text>
              {/* <Text style={styles.name}></Text> */}
            </View>
            <TouchableOpacity>
              <View style={styles.iconBox}>
                <Icon name="add-shopping-cart" size={28} color="white" />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={[styles.ImageBox, styles.shadowProp]}>
          <View style={{ width: "100%", justifyContent: "flex-end", alignContent: "flex-end", flexDirection: "row" }}>
            <Icon name="close" size={25} color="black" />
          </View>
          <View style={styles.MainImgBox}>
            <Image
              // source={{ uri: item.base_image.small_image_url }}
              source={require("../../assets/mainlogo.jpeg")}
              style={styles.img} />
          </View>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={{ width: 100 }}>
              <Text style={styles.name}>Product Name</Text>
              <Text></Text>
              {/* <Text style={styles.name}></Text> */}
            </View>
            <TouchableOpacity>
              <View style={styles.iconBox}>
                <Icon name="add-shopping-cart" size={28} color="white" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>

    </View>
    </ScrollView>
  )
}