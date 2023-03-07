import React, { useState, useRef } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../../redux/reducer/Reducers';
import { BottomSheetModal, BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { createStackNavigator } from '@react-navigation/stack';

import CheckOut from './CheckOut';
import Icon from "react-native-vector-icons/MaterialIcons"



const Stack = createStackNavigator();


export default function Cart({ navigation }) {
  const dispatch = useDispatch();

  const item = useSelector(state => state.cart.cart);
  // console.log(item);
  const removeItemFromCart = item => {
    dispatch(removeFromCart(item));
  };

  const [isOpen, setIsOpen] = useState(false);
  const bottomSheetModalRef = useRef(null);
  const snapPoints = ["40%"];
  function handlePresentModal() {
    bottomSheetModalRef.current?.present();
    setTimeout(() => {
      setIsOpen(true);
    }, 100);
  }

  const Totalitem = item => {
    let totalPrice = 0;
    item.forEach((item) => {
      let price = parseFloat(item.price).toFixed(1);
      totalPrice += parseFloat(price);
    });
    return [totalPrice];
  }
  // const getTotal = () => {
  //   let total = 0;
  //   item.map(item => {
  //     total = total + item.data.qty * item.data.discountPrice;
  //   });
  //   return total;
  // };

  return (
    <View style={{ flex: 1, height: 900 }}>
      <View style={styles.AddArrBox}>
        <View style={styles.Add}>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 17 }}>Add Address</Text>
        </View>
      </View>
      <FlatList
        data={item}
        renderItem={({ item, index }) => {
          let price = parseFloat(item.price).toFixed(2);
          return (
            <View style={styles.cartBox}>
              <View style={styles.IMGBox}>
                <Image
                  source={{ uri: item.base_image.small_image_url }}
                  // source={require("../../assets/main.jpeg")} 
                  style={styles.img} />
              </View>
              <View style={styles.Content}>
                <Text style={styles.CAtName}>{item.category_name}</Text>
                <Text style={styles.ProductName}>{item.name}</Text>
                <View style={{ width: 100, height: 50, flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                  <TouchableOpacity>
                    <View style={{ width: 30, height: 30, borderWidth: 1, borderRadius: 20, alignSelf: "center", alignItems: "center", justifyContent: "center" }}>
                      <Icon name="expand-more" size={20} color="#52b372" />

                    </View>
                  </TouchableOpacity>
                  <Text>ss</Text>
                  <View>
                    <Text style={{ color: "black", fontFamily: "Labrada-Bold", fontSize: 30 }}>1</Text>
                  </View>
                  <Text>ss</Text>
                  <TouchableOpacity>
                    <View style={{ width: 30, height: 30, borderWidth: 1, borderRadius: 20, alignSelf: "center", alignItems: "center", justifyContent: "center" }}>
                      <Icon name="expand-less" size={20} color="#52b372" />
                    </View>
                  </TouchableOpacity>
                </View>
                <Text style={{ color: "black", fontFamily: "Labrada-Bold", fontSize: 20 }}>${price}</Text>
              </View>
            </View>

          );
        }}
      />
      <View style={styles.CouponsBox}>
        <View style={{ width: "30%", flexDirection: "row", alignItems: "center", justifyContent: "center", }}>

          <Icon name="verified" size={28} color="#52b372" />
          <Text style={{ color: "black", marginLeft: 10 }}>Apply cpopons</Text>
        </View>
        <View style={{ width: "70%", alignItems: 'flex-end', justifyContent: "flex-end", alignContent: "flex-end", paddingRight: 20 }}>
          <Text style={{ color: "#52b372", fontFamily: "Labrada-Bold", fontSize: 18 }}>Select</Text>
        </View>
      </View>

      <View style={styles.PriceDetalisBox}>
        <Text style={{ color: "black", fontFamily: "Labrada-Bold", fontSize: 13 }}>PRICE DETAILS</Text>
        <View style={{ borderBottomColor: "gray", borderBottomWidth: 1, marginTop: 10 }}></View>
        <View style={{ width: "100%", flexDirection: "row", alignItems: "center", justifyContent: "space-between", alignContent: "space-between", marginTop: 10 }}>
          <Text style={{ color: "black" }}>Total MRP</Text>
          <Text style={{ color: "black" }}>$ {Totalitem(item)}</Text>
        </View>
        <View style={{ width: "100%", flexDirection: "row", alignItems: "center", justifyContent: "space-between", alignContent: "space-between", marginTop: 5 }}>
          <Text style={{ color: "black" }}>Coupons Discount</Text>
          <Text style={{ color: "black" }}> $0.0</Text>
        </View>
        <View style={{ width: "100%", flexDirection: "row", alignItems: "center", justifyContent: "space-between", alignContent: "space-between", marginTop: 5 }}>
          <Text style={{ color: "black" }}>Convenicence Fee</Text>
          <Text style={{ color: "black" }}> $ 0.0</Text>
        </View>
        <View style={{ borderBottomColor: "gray", borderBottomWidth: 1, marginTop: 10 }}></View>
        <View style={{ width: "100%", flexDirection: "row", alignItems: "center", justifyContent: "space-between", alignContent: "space-between", marginTop: 5 }}>
          <Text style={{ color: "black", fontFamily: "Labrada-Bold", fontSize: 15 }}>Total Amount</Text>
          <Text style={{ color: "black" }}>$ {Totalitem(item)}</Text>
        </View>

      </View>
      <BottomSheetModalProvider>
        <View style={styles.PlaceBox}>

          <TouchableOpacity style={styles.Add} onPress={handlePresentModal}>
            {/* <View> */}
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 17 }}>Place Order</Text>
            {/* </View> */}
          </TouchableOpacity>
          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={0}
            snapPoints={snapPoints}
            backgroundStyle={{ borderRadius: 50 }}
            onDismiss={() => setIsOpen(false)}>
            {/* <Stack.Navigator
              initialRouteName="SignIn"
              screenOptions={{ headerShown: false }}>
              <Stack.Screen name="CheckOut" component={CheckOut} />
            </Stack.Navigator> */}
            <View style={{ padding: 20 }}>
              <Text style={{ color: "black", fontFamily: "Labrada-Bold", fontSize: 30 }}>Checkout</Text>
              <View style={{ borderBottomColor: "gray", borderBottomWidth: 1, marginTop: 10 }}></View>
              <View style={{ width: "100%", height: 35, flexDirection: "row", alignItems: "center", justifyContent: "space-between", alignContent: "space-between", marginTop: 10 }}>
                <Text style={{ color: "black", fontSize: 17 }}>Payment</Text>
                {/* <Text style={{ color: "black" }}> $ 4.47</Text> */}
                <View style={{ flexDirection: "row" }}>
                  <Icon name="payment" size={25} color="black" />
                  <Text>slnin</Text>
                  <Icon name="arrow-forward-ios" size={25} color="black" />

                </View>
              </View>
              <View style={{ borderBottomColor: "gray", borderBottomWidth: 1, marginTop: 10 }}></View>

              <View style={{ width: "100%", height: 35, flexDirection: "row", alignItems: "center", justifyContent: "space-between", alignContent: "space-between", marginTop: 10 }}>
                <Text style={{ color: "black", fontSize: 17 }}>Total Cost</Text>
                <Text style={{ color: "black", fontSize: 17 }}> $ {Totalitem(item)}</Text>
              </View>
              <View style={{ borderBottomColor: "gray", borderBottomWidth: 1, marginTop: 10 }}></View>
              <Text style={{ color: "gray", fontFamily: "Labrada-Bold", fontSize: 15 }}>By placing an order you agree to out Terms And Condation</Text>
              <TouchableOpacity style={styles.popupPlace}
                onPress={() => navigation.navigate("CheckOut")}>
                <View>
                  <Text style={{ color: "white", fontWeight: "bold", fontSize: 17 }}>Place Order</Text>
                </View>
              </TouchableOpacity>
            </View>
          </BottomSheetModal>
        </View>

      </BottomSheetModalProvider>
    </View>
  )
}
const styles = StyleSheet.create({
  AddArrBox: {
    width: "100%",
    height: 65,
    alignSelf: "center",
    marginTop: 10,
    backgroundColor: "white",
    elevation: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "gray"
  },
  Add: {
    width: "95%",
    height: 34,
    backgroundColor: "#52b372",
    borderRadius: 5,
    color: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  cartBox: {
    width: "100%",
    height: 138,
    // borderWidth:1,
    alignSelf: "center",
    marginTop: 10,
    backgroundColor: "white",
    elevation: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "flex-start",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    flexDirection: "row",
  },
  IMGBox: {
    width: 180,
    height: 130,
    // borderWidth:1,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "black"

  },
  img: {
    width: 120,
    height: 80,
  },
  Content: {
    width: 180,
    height: 130,
    // borderWidth: 1,
    // alignItems:"center",
    // justifyContent:"center",
    borderColor: "black",
    flexDirection: "column",
    padding: 7
  },
  CAtName: {
    color: "black",
    fontFamily: "Labrada-Bold",
    fontSize: 19
  },
  ProductName: {
    color: "gray",
    fontFamily: "Labrada-Bold",
    fontSize: 17
  },
  CouponsBox: {
    marginTop: 10,
    backgroundColor: "white",
    elevation: 10,
    width: '100%',
    height: 65,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  PriceDetalisBox: {
    marginTop: 10,
    backgroundColor: "white",
    elevation: 10,
    width: '100%',
    height: 160,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    flexDirection: "column",
    padding: 20,
    marginBottom: 75
  },
  PlaceBox: {
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute',
    marginTop: 10,
    backgroundColor: "white",
    elevation: 10,
    width: '100%',
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',

  },
  popupPlace: {
    width: "100%",
    height: 45,
    marginTop: 20,
    backgroundColor: "#52b372",
    borderRadius: 20,
    color: "white",
    alignItems: "center",
    justifyContent: "center",
  },
})