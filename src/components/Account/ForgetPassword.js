import "react-native-gesture-handler";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons"
import { useState, useEffect } from "react";
import { FloatingLabelInput } from "react-native-floating-label-input";

export default function ForgetPassword({ navigation }) {
  const [email, setEmail] = useState('');

  return (

    <View style={styles.contentContainer}>
      <Text style={styles.title}>Forget Password</Text>

      <View style={[styles.row, styles.shadowProp]}>
        {/* <View>
                <Text style={styles.Username}>Email</Text>
              </View> */}
        <View style={styles.inBox}>
          {/* <TextInput placeholder="Enter Your Email" placeholderTextColor="gray"
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="email-address"
                  style={styles.input} /> */}
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
              // <Icon size={23} name="person-outline" color="#52b372" />
            }}
            hintTextColor="gray"
            customLabelStyles={{
              colorFocused: 'black',
              fontSizeFocused: 14,
            }}
          />
          <Icon size={25} name="email" color="#52b372" />

        </View>
      </View>
      <TouchableOpacity>
        <View style={styles.login}>
          <Text style={styles.logtitle}>Forget Password

          </Text>
          <Icon name="arrow-forward" size={28} style={styles.ICONStyle} />
        </View>

      </TouchableOpacity>
      <Text style={styles.Mainforget}>Already have a unify account </Text>

      <TouchableOpacity
        onPress={() => navigation.navigate("SignIn")}
      >
        <Text style={styles.forget}>Log In now</Text>
      </TouchableOpacity>
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
    // margin:8,
    marginLeft: 50,
    marginTop: 10,

    // marginBottom:25
  },
  row: {
    width: "100%",
    flexDirection: 'column',
    // alignSelf:"center",
    // alignItems: "center",
    justifyContent: "flex-start",
    // justifyContent: "space-between",
    // marginVertical: 10,
    backgroundColor: "white",
    elevation: 10,
    borderRadius: 20,
    marginTop: 20

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
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%",
    marginRight: 60,
    // padding:20
    // paddingBottom:4
  },
  fotgetMain: {
    color: "#52b372",
    marginTop: 20,
    fontSize: 14,
    fontFamily: "Labrada-Bold",
    alignSelf: 'flex-end',
  },
  Mainforget: {
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
  }
});