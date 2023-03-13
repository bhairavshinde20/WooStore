import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { FloatingLabelInput } from "react-native-floating-label-input";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "./context/AuthContext";

import Icon from "react-native-vector-icons/MaterialIcons"
import axios from 'axios';
import "react-native-gesture-handler";
import Spinner from 'react-native-loading-spinner-overlay';

export default function SignIn({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passerror, setPassError] = useState('');
  const [emaierror, setEmaiError] = useState("")

  const { isLoading, login, userInfo, error } = useContext(AuthContext);
  // console.log(error)
  const validation = (email, password) => {
    if (email == "") {
      setEmaiError("Email is required")
      return false;
    }
    if (password == "") {
      setPassError("Password is  required")
      return false;
    }
    return true
  }
  return (

    <View style={styles.contentContainer}>
      <Text style={styles.title}>Login</Text>
      <Spinner visible={isLoading} />

      <View style={[styles.row, styles.shadowProp]}>
        {/* <View>
          <Text style={styles.Username}>Username</Text>
        </View> */}
        <View style={styles.inBox}>
          {/* <TextInput placeholder="Enter Your Username" placeholderTextColor="gray"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            textContentType="emailAddress"
            style={styles.input}
          />
          <Icon size={25} name="person-outline" color="#52b372" /> */}
          <FloatingLabelInput
            label={'Email'}
            value={email}
            keyboardType="email-address"
            textContentType="emailAddress"
            onChangeText={value => setEmail(value)}
            labelStyles={{ fontSize: 16, fontFamily: "Labrada-Bold" }}
            containerStyles={{
              paddingHorizontal: 20,
              backgroundColor: '#fff',
              height: 60,
              borderColor: 'white',
              padding: 20
            }}
            hintTextColor="gray"
            customLabelStyles={{
              colorFocused: 'black',
              fontSizeFocused: 14,
            }}
          />
          <Icon size={23} name="person-outline" color="#52b372" />
        </View>
        {
          emaierror && (emaierror.email || !email ? <Text style={styles.error}>{emaierror}</Text> : "")
        }


      </View>

      <View style={[styles.row, styles.shadowProp]}>
        {/* <View>
          <Text style={styles.Username}>Password</Text>
        </View> */}
        <View style={styles.inBox}>
          {/* <TextInput placeholder="Enter Your Password" placeholderTextColor="gray"
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
            secureTextEntry

          />
          <Icon size={25} name="remove-red-eye" color="#52b372" /> */}
          <FloatingLabelInput
            label={'Password'}
            isPassword
            value={password}
            onChangeText={value => setPassword(value)}
            // customShowPasswordComponent={<Icon size={23} name="remove-red-eye" color="#52b372" />}
            // customHidePasswordComponent={<Icon size={23} name="visibility-off" color="#52b372" />} 
            labelStyles={{ fontSize: 20, fontFamily: "Labrada-Bold", color: "gray" }}
            containerStyles={{
              paddingHorizontal: 20,
              backgroundColor: '#fff',
              height: 60,
              borderColor: 'white',
              padding: 20
            }}
            hintTextColor="gray"
            customLabelStyles={{
              colorFocused: 'black',
              fontSizeFocused: 14,
            }} />
          <Icon size={23} name="remove-red-eye" color="#52b372" />
        </View>
        {
          passerror && (passerror.password || !password ? <Text style={styles.error}>{passerror}</Text> : "")
        }

      </View>
      <TouchableOpacity onPress={() => navigation.navigate("ForgetPassword")}>
        <Text style={styles.fotgetMain}>Forget Password</Text>
      </TouchableOpacity>
      {
          (error ? <Text style={styles.error}>{error}</Text> : "")
       
      }
      <TouchableOpacity
        onPress={() => {
          if (validation(email, password)) {
            login(email, password);
          }
        }}
      >
        <View style={styles.login}>
          <Text style={styles.logtitle}>LogIn
          </Text>
          <Icon name="arrow-forward" size={28} style={styles.ICONStyle} />
        </View>
      </TouchableOpacity>
      {/* {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null} */}
      <Text style={styles.Dont}>Don't have Unify Account</Text>
      <TouchableOpacity>
        <Text style={styles.forget}
          onPress={() => navigation.navigate("SignUp")}
        >SignUp now</Text>
      </TouchableOpacity>
      {
        // console.log("sfvndifvknbf " + userInfo.message)

        // userInfo.message ? <TouchableOpacity>
        //   <Text style={styles.forget}

        //   >{userInfo.message}</Text>
        // </TouchableOpacity> : <Text></Text>
      }
      <Text></Text>

    </View>
  )
}

const styles = StyleSheet.create({

  contentContainer: {
    flex: 1,
    // alignItems: "center",
    paddingHorizontal: 15,
    backgroundColor: "white",

  },
  title: {
    color: "black",
    fontSize: 30,
    fontFamily: "Labrada-Bold",
    // marginBottom: 25
    alignSelf: "center"
  },
  Username: {
    fontFamily: "Labrada-Bold",
    color: "gray",
    fontSize: 18,
    marginLeft: 50,
    marginTop: 10,

    // marginBottom:25
  },
  row: {
    width: "100%",
    flexDirection: 'column',
    justifyContent: "flex-start",
    backgroundColor: "white",
    elevation: 10,
    borderRadius: 20,
    marginTop: 20,
    // marginLeft:10

  },
  shadowProp: {
    shadowOffset: { width: -2, height: 4 },
    shadowColor: '#171717',
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },

  ICONS: {

    color: "black"
  },
  input: {
    color: "black",
    fontFamily: "Labrada-Bold",
    fontSize: 13,
    width: "80%"

  },
  inBox: {
    // alignSelf: "flex-start",
    alignSelf: "center",
    // padding:20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%",
    // padding:20
    // paddingBottom:4
    marginRight: 60
  },
  fotgetMain: {
    color: "#52b372",
    marginTop: 20,
    fontSize: 14,
    fontFamily: "Labrada-Bold",
    alignSelf: 'flex-end',
  },
  Dont: {
    color: "gray",
    marginTop: 20,
    fontSize: 14,
    fontFamily: "Labrada-Bold",
    alignSelf: "center"

  },
  forget: {
    color: "#52b372",
    marginTop: 20,
    fontSize: 14,
    fontFamily: "Labrada-Bold",
    alignSelf: "center"
  },
  login: {
    width: "100%",
    height: 50,
    backgroundColor: "#52b372",
    alignSelf: "center",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 16,
    borderRadius: 10
  },
  logtitle: {
    color: "white",
    fontSize: 20,
    fontFamily: "Labrada-Bold",
  },
  ICONStyle: {
    // flex:1,
    color: "white",
    alignSelf: "center",
    alignItems: "center",
    // marginTop:20
  },
  error: {
    color: "red",
    fontSize: 12,
    marginLeft: 35,
    marginBottom: 10
    // paddingBottom:10
  },
});