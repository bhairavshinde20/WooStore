import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import { FloatingLabelInput } from "react-native-floating-label-input";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Icon from "react-native-vector-icons/MaterialIcons"
import "react-native-gesture-handler";
import Spinner from 'react-native-loading-spinner-overlay';



export default function SignUp({ navigation }) {

  const [firstname, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordconfirmation, setPasswordConfirmation] = useState('');

  const [fnameerror, setFNameError] = useState("")
  const [passerror, setPassError] = useState('');
  const [emaierror, setEmaiError] = useState("")
  const [cpasserror, setCPassErorr] = useState('')

  const { isLoading, register, error } = useContext(AuthContext);

  const validation = (firstname, email, password, passwordconfirmation) => {
    if (firstname == "") {
      setFNameError("User Name is required")
      return false;
    }
    if (email == "") {
      setEmaiError("Email is required")
      return false;
    }
    if (password == "") {
      setPassError("Password is  required")
      return false;
    }
    if (passwordconfirmation == "") {
      setCPassErorr("Password is  required")
      return false;
    }
    // if (toString(passwordconfirmation) === toString(password)) {
    //   setCPassErorr("Password dosen't match")
    //   return false;
    // }
    return true
  }
  return (

    <View style={styles.contentContainer}>
      <Text style={styles.title}>Register</Text>
      <Spinner visible={isLoading} />


      <View style={[styles.row, styles.shadowProp]}>
        {/* <View>
                <Text style={styles.Username}>User Name</Text>
              </View> */}
        <View style={styles.inBox}>
          {/* <TextInput placeholder="Enter Your Username" placeholderTextColor="gray"
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="email-address"
                  style={styles.input}
                  // onChange={email => setEmail(email.target.value)}
                  // value={email}


                /> */}
          <FloatingLabelInput
            label={'User Name'}
            value={firstname}
            onChangeText={value => setFirstName(value)}
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
          <Icon size={23} name="person-outline" color="#52b372" />

        </View>
        {fnameerror.firstname || !firstname ? <Text style={styles.error}>{fnameerror}</Text> : null}


      </View>

      <View style={[styles.row, styles.shadowProp]}>
        {/* <View>
                <Text style={styles.Username}>Email</Text>
              </View> */}
        <View style={styles.inBox}>
          {/* <TextInput placeholder="Enter Your Username" placeholderTextColor="gray"
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="email-address"
                  style={styles.input}
                  // onChange={email => setEmail(email.target.value)}
                  // value={email}


                /> */}
          <FloatingLabelInput
            label={'Email'}
            value={email}
            onChangeText={value => setEmail(value)}
            keyboardType="email-address"
            textContentType="emailAddress"
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
        {emaierror.email || !email ? <Text style={styles.error}>{emaierror}</Text> : null}


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
                  // onChangeText={password => setPassword(password.target.value)}
                  // value={password}
                /> */}
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
          <Icon size={25} name="remove-red-eye" color="#52b372" />

        </View>
        {passerror.password || !password ? <Text style={styles.error}>{passerror}</Text> : null}

      </View>

      <View style={[styles.row, styles.shadowProp]}>
        {/* <View>
                <Text style={styles.Username}>Conform Password</Text>
              </View> */}
        <View style={styles.inBox}>
          {/* <TextInput placeholder="Enter Your Password" placeholderTextColor="gray"
                  autoCapitalize="none"
                  autoCorrect={false}
                  style={styles.input}
                  secureTextEntry
                  // onChangeText={password => setPassword(password.target.value)}
                  // value={password}
                /> */}
          <FloatingLabelInput
            label={'Conform Password'}
            isPassword
            value={passwordconfirmation}
            onChangeText={value => setPasswordConfirmation(value)}
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
          <Icon size={25} name="remove-red-eye" color="#52b372" />

        </View>
        {cpasserror.passwordconfirmation || !passwordconfirmation ? <Text style={styles.error}>{cpasserror}</Text> : null}

      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("ForgetPassword")}
      >
        <Text style={styles.fotgetMain}> Forget Password</Text>
      </TouchableOpacity>

      {/* <Button title="Log In" /> */}
      <TouchableOpacity
        onPress={() => {
          if (validation(firstname, email, password, passwordconfirmation)) {
            register(firstname, email, password, passwordconfirmation);
            navigation.navigate("SignIn")
          }

        }}>
        <View style={styles.login}>
          <Text style={styles.logtitle}>Register

          </Text>
          <Icon name="arrow-forward" size={28} style={styles.ICONStyle} />
        </View>

      </TouchableOpacity>
      <Text style={styles.Dont}>Don't have Unify Account</Text>

      <TouchableOpacity
        onPress={() => navigation.navigate("SignIn")}

      >
        <Text style={styles.forget}>SignIn now</Text>
      </TouchableOpacity>
    </View >


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
    fontSize: 12,
    color: 'red',
    marginLeft: 40,
    marginBottom: 10
  }
});