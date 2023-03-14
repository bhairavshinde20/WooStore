import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { BASE_URL } from '../Congig';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  const [cookies, setCookies] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [splashLoading, setSplashLoading] = useState(false);
  const [error, setError] = useState('')



  const register = (first_name, email, password, password_confirmation) => {

    setIsLoading(true);

    axios.post(`${BASE_URL}/register`, {
      first_name,
      email,
      password,
      password_confirmation,
    })
      .then(res => {
        let userInfo = res.data;
        setUserInfo(userInfo);
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        setIsLoading(false);
        console.log(userInfo);
      })
      .catch(e => {
        console.log(`register error ${e}`);
        setIsLoading(false);
      });

  };

  const login = (email, password) => {
    setIsLoading(true);
    // let  error = "Invalid Email or Password"
    axios
      .post(`${BASE_URL}/login`, {
        email,
        password,
      })
      .then(res => {
        if (email == email || password == password) {
          console.log("login succefull", email, password)
        }

        let userInfo = res.data;
        console.log(userInfo);
        setUserInfo(userInfo);
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        setIsLoading(false);
        console.log('cookie', res.headers["set-cookie"][0].split(";")[0]);
        setCookies(res.headers["set-cookie"][0].split(";")[0]);

        setError("Login  Successful")
      })
      .catch(e => {
        setIsLoading(false);
        error == "error"
        console.log(`login error ${error}`);
        setError("Invalid Email or Password")
      }
      );
  };

  const logout = () => {
    setIsLoading(true);

    // axios.get(`${BASE_URL}/logout`, {
    //   'Cookie': cookies
    // })
    //   // {},
    //   // {
    //   //   headers: {Authorization: `Bearer ${userInfo.access_token}`},
    //   // },
    //   // )

    //   .then(res => {
    //     console.log(res.data);
    //     AsyncStorage.removeItem('userInfo');
    //     setUserInfo(userInfo);
    //     setIsLoading(false);


    //   })
    //   .catch(e => {
    //     console.log("header error =>.", cookies);
    //     console.log(`logout error, ${e}`);
    //     setIsLoading(false);
    //   });


    axios
      .get(
        `${BASE_URL}/logout`,
        {},
        
        {
          headers: { "Cookie": cookies.cookieString
          // Authorization: `Bearer ${userInfo.access_token}`
         },
          // Authorization: `Bearer ${userInfo.access_token}`,
        },
      )
      .then(res => {
        console.log(res.data);
        AsyncStorage.removeItem('userInfo');
        setUserInfo(userInfo);
        setIsLoading(false);
      })
      .catch(e => {
        console.log(`logout error ${e}`);
        console.log("header error =>.", cookies);
        setIsLoading(false);
      });





    // var config = {
    //   method: 'get',
    //   maxBodyLength: Infinity,
    //   url: `${BASE_URL}/logout`,
    //   headers: {
    //     'Cookie': cookies
    //   }
    // };
    // console.log(JSON.stringify(config))
    // axios(config)
    //   .then(function (response) {
    //     console.log("testing data =>", JSON.stringify(response.data));
    //   })
    //   .catch(function (error) {
    //     console.log("cookies =>",cookies);
    //     console.log("ksdbvjshb"+ error);
    //   });




  };

  const isLoggedIn = async () => {
    try {
      setSplashLoading(true);

      let userInfo = await AsyncStorage.getItem('userInfo');
      userInfo = JSON.parse(userInfo);

      if (userInfo) {
        setUserInfo(userInfo);
      }

      setSplashLoading(false);
    } catch (e) {
      setSplashLoading(false);
      console.log(`is logged in error ${e}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        userInfo,
        splashLoading,
        error,
        register,
        login,
        logout,
      }}>
      {children}
    </AuthContext.Provider>
  );
};