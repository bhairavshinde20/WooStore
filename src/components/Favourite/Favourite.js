import { View, Text, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import { AppBar, HStack, IconButton } from "@react-native-material/core";
import { useDispatch, useSelector } from 'react-redux';
import { removeFromFav } from '../../redux/reducer/Favroit';
import { addToCart } from '../../redux/reducer/Reducers';
import React from 'react'
import styles from './FavouriteStyle'
import SingleProduct from '../Shop/SingleProduct'
import Icon from "react-native-vector-icons/MaterialIcons"


export default function Favourite() {
  const Fav = useSelector(state => state.fav.fav);
  // console.log(Fav)
  const dispatch = useDispatch()

  const RemoverFromFev = item => {
    dispatch(removeFromFav(item));
  }

  const addItemToCart = item => {
    dispatch(addToCart(item));
  };
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View style={styles.container}>
{
  Fav.length !== 0  ?
  <FlatList
          data={Fav}
          numColumns={2}
          keyExtractor={(item, index) => item.id}
          renderItem={({ item, index }) => {
            let price = parseFloat(item.price).toFixed(2);

            return (
              <>
                {/* <View style={{ width: "100%", alignSelf: "center", flexDirection: 'row' }}> */}
                <View style={[styles.ImageBox, styles.shadowProp]}>
                  <View style={{ width: "100%", justifyContent: "flex-end", alignContent: "flex-end", flexDirection: "row" }}>
                    <Icon name="close" size={25} color="black" onPress={() => RemoverFromFev(item)} />
                  </View>
                  <View style={styles.MainImgBox}>
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
                      onPress={() => addItemToCart(item)}
                    >
                      <View style={styles.iconBox}>
                        <Icon name="add-shopping-cart" size={28} color="white" />
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
                {/* </View> */}
              </>
            )
          }}
        /> :
        // <Text style={{color:"black"}}>hii</Text>
        <>
        <View style={{ flex: 1, alignItems: "center", height: 370, width: "100%", justifyContent: "center", alignSelf: "center", marginTop: 200 }}>
          <Image source={require("../../assets/wish.jpg")} style={styles.ImgStyle} />

        </View>
        <View style={{ alignContent: "center", alignSelf: "center" }}>
          <Text style={{
            color: "black", alignSelf: "center", marginTop: 10,
            fontSize: 16,
            fontFamily: "Labrada-Bold",
          }}>Your wishlist is empty!</Text>
          <Text style={{
            color: "gray", alignSelf: "center",
            fontSize: 16,
            fontFamily: "Labrada-Bold",
          }}>There is nothing in your wishlist let's ass some items</Text>
        </View>
        </>

}
        

        




      </View>
    </ScrollView>
  )
}