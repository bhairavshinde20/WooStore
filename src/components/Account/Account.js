import React, { useState, useRef } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {Button,StyleSheet,ImageBackground} from "react-native";
import {BottomSheetModal,BottomSheetModalProvider} from "@gorhom/bottom-sheet";
import { Image } from 'react-native-animatable';

import Icon from "react-native-vector-icons/MaterialIcons"
import BottomSheet from 'react-native-simple-bottom-sheet';
import ForgetPassword from './ForgetPassword';
import SignIn from './SignIn';
import SignUp from './SignUp';
import "react-native-gesture-handler";

const Stack = createStackNavigator();

export default function Account() {
  const [isOpen, setIsOpen] = useState(false);
  const bottomSheetModalRef = useRef(null);
  const snapPoints = ["90%"];
  function handlePresentModal() {
    bottomSheetModalRef.current?.present();
    setTimeout(() => {
      setIsOpen(true);
    }, 100);
  }

  return (
    <View style={{ flex: 1, height: 900 }}>

      <View style={{ height: 340 }}>
        <ImageBackground
          source={require("../../assets/pn.jpg")}
          style={{ padding: 20, height: 170, backgroundColor: "white" }}>
          <View style={[styles.profileBox, styles.shadowProp]}>
            <Icon size={90} name="person" color="gray" />
          </View>
          <Text style={styles.user}>User</Text>
        </ImageBackground>
      </View>
      <View style={styles.Line}></View>
      <View style={styles.AdboutBox}>
        <Icon name="error-outline" size={28} color="black" />
        <Text style={styles.About}>About</Text>
        <View style={styles.ArrowIcon}>
          <Icon name="keyboard-arrow-right" size={35} color="black" />
        </View>
      </View>
      <BottomSheetModalProvider>
        <View>
          <TouchableOpacity style={styles.mainLogin} onPress={handlePresentModal}>
            <Text style={styles.MainLogin}>Log In</Text>
          </TouchableOpacity>
          {/* <Button title="Login"  /> */}
          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={0}
            snapPoints={snapPoints}
            backgroundStyle={{ borderRadius: 50 }}
            onDismiss={() => setIsOpen(false)}>
            <Stack.Navigator
              initialRouteName="SignIn"
              screenOptions={{ headerShown: false }}>
              <Stack.Screen name="SignIn" component={SignIn} />
              <Stack.Screen name="SignUp" component={SignUp} />
              <Stack.Screen name="ForgetPassword" component={ForgetPassword}/>
            </Stack.Navigator>
          </BottomSheetModal>
        </View>
        <Text style={styles.AppVersion}>App Version 1.0.1</Text>
      </BottomSheetModalProvider>
    </View>
  )
}
const styles = StyleSheet.create({
  profileBox: {
    height: 160,
    width: 160,
    borderRadius: 100,
    // borderWidth:2,
    borderColor: "gray",
    backgroundColor: "white",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 70,
    elevation: 10,
    position: 'relative'
  },
  shadowProp: {
    shadowOffset: { width: -2, height: 4 },
    shadowColor: '#171717',
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  user: {
    fontFamily: "Labrada-Bold",
    color: "black",
    fontSize: 22,
    alignSelf: "center",
    marginTop: 20,
  },
  About: {
    fontFamily: "Labrada-Bold",
    color: "black",
    fontSize: 20,
    marginLeft: 20
  },
  Line: {
    // borderBottomColor:"red",
    borderColor: "#D3D3D3",
    borderTopWidth: 1.5,
    width: "100%",
    alignSelf: "center",
    position: 'relative',
  },
  AdboutBox: {
    height: 80,
    width: "100%",
    // borderWidth: 1,
    borderColor: "black",
    alignSelf: "center",
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20
  },
  ArrowIcon: {
    // display:"flex",
    width: "78%",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    alignContent: "flex-end",
    position: "relative",
    height: 40,
  },
  mainLogin: {
    height: 43,
    width: "97%",
    borderWidth: 1,
    borderColor: "#52b372",
    alignSelf: "center",
    color: "black",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5
  },
  MainLogin: {
    color: "#52b372",
    fontSize: 18,
    fontFamily: "Labrada-Bold",
  },
  AppVersion: {
    color: "gray",
    fontSize: 14,
    fontFamily: "Labrada-Bold",
    alignSelf: "center"
  },
})