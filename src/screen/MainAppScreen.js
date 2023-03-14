
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'
// import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View, TouchableOpacity, Animated, StyleSheet } from 'react-native';
import { AppBar, HStack, IconButton } from "@react-native-material/core";
import React, { useState, useRef } from 'react';

import Account from '../components/Account/Account'
import Cart from '../components/Cart/Cart'
import Explore from '../components/Explore/Explore'
import Favourite from '../components/Favourite/Favourite'
import Shop from '../components/Shop/Shop'
import CustomDrawer from '../components/Custom Drawer/CustomDrawer'

import Icon from "react-native-vector-icons/MaterialIcons"
import Coupons from '../components/Shop/Coupons'
import SingleProduct from '../components/Shop/SingleProduct'
import HeaderTab from '../components/Custom Drawer/HeaderTab'
import CheckOut from '../components/Cart/CheckOut'



const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// function clickTabBarItem(tabIndex, navigation) {
//   const event = navigation.emit({
//     type: 'tabPress',
//     target: navigation.getState().routeNames[tabIndex],
//   });
  
//   if (!event.defaultPrevented) {
//     navigation.navigate(navigation.getState().routeNames[tabIndex]);
//   }
// }

// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function clickTabBarItem(tabIndex) {
  const tabBar = createBottomTabNavigator.getInstance();
  tabBar._navigation.navigate(tabBar._state.routes[tabIndex].name);
}


function clickOnScreen(x, y) {
  const button = TouchableOpacity.findAllByProps({ testID: 'clickable-area' })[0];
  
  const event = {
    nativeEvent: {
      locationX: x,
      locationY: y,
      pageX: x,
      pageY: y,
      target: button.props.testID,
    },
  };
  
  button.props.onPress(event);
}



const BottomTabStack = () => {
  //   const [isZoomed, setIsZoomed] = useState(false);
  // const zoomValue = useRef(new Animated.Value(1)).current;

  // const handleZoom = () => {
  //   setIsZoomed(!isZoomed);
  //   const toValue = isZoomed ? 1 : 1.5; // zoom in or out based on current state
  //   Animated.timing(zoomValue, {
  //     toValue,
  //     duration: 500, // animation duration
  //     useNativeDriver: true, // enable native driver for better performance
  //   }).start();
  // };
  return (
    <Tab.Navigator
      initialRouteName="Shop"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 70,
          // width:'90%',
          // alignSelf:'center',
          // borderRadius:20,marginBottom:10,
          padding: 10,
          paddingBottom: 10,
          fontFamily: 'Labrada-Regular',

        },
        tabBarActiveTintColor: '#52b372',
      }}>
      {/* <TouchableOpacity onPress={handleZoom}>
        <Animated.Text style={{ fontSize: 20, transform: [{ scale: zoomValue }] }}> */}
      <Tab.Screen
      id={0}
        name="Shop"
        component={Shop}
        options={{
          tabBarLabel: 'Shop ',
          tabBarLabelStyle: { fontSize: 17 },
          tabBarIcon: ({ focused }) => (
            <Icon name="storefront" color={focused ? '#52b372' : 'black'} size={28} />
          ),
        }}
      />
      {/* </Animated.Text>
      </TouchableOpacity> */}
      <Tab.Screen
      // id={1}
      // tabIndex={1}
        name="Explore"
        component={Explore}
        options={{
          tabBarLabel: 'Explore',
          tabBarLabelStyle: { fontSize: 17 },
          tabBarIcon: ({ focused }) => (
            <Icon
              name="search"
              color={focused ? '#52b372' : 'black'}
              size={28}
            />
          ),
        }}
      />
      <Tab.Screen
      id={2}
        name="Favourite"
        component={Favourite}
        options={{
          tabBarLabel: 'Favourite',
          tabBarLabelStyle: { fontSize: 17 },
          tabBarIcon: ({ focused }) => (
            <Icon
              name="favorite-border"
              color={focused ? '#52b372' : 'black'}
              size={28}
            />
          ),
        }}
      />
      <Tab.Screen
      id={3}
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: 'Cart',
          tabBarLabelStyle: { fontSize: 17 },
          tabBarIcon: ({ focused }) => (
            <Icon
              name="add-shopping-cart"
              color={focused ? '#52b372' : 'black'}
              size={28}
            />
          ),
        }}
      />
      <Tab.Screen
      id={4}
        name="Account"
        component={Account}
        options={{
          tabBarLabel: 'Account',
          tabBarLabelStyle: { fontSize: 17 },
          tabBarIcon: ({ focused }) => (
            <Icon
              name="person-outline"
              color={focused ? '#52b372' : 'black'}
              size={28}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const HomeScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="Shop"
      
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BottomTabStack" component={BottomTabStack} />
      <Stack.Screen name="Coupons" component={Coupons} />
      <Stack.Screen name="Singleproduct"  component={SingleProduct}  />
    </Stack.Navigator>
  );
};
const SearchScreenStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Explore"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Explore" component={Explore} />
    </Stack.Navigator>
  );
};
const FavScreenStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Favroit"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Favroit" component={Favourite} />
    </Stack.Navigator>
  );
};
const CartScreenStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="cart"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Cart" component={Cart} />
      {/* <Stack.Screen name="CheckOut" component={CheckOut} /> */}
    </Stack.Navigator>
  );
};
const AccountScreenStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Account"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Account" component={Account} />
    </Stack.Navigator>
  );
};

export default function MainAppScreen() {
  return (

    // <View>
    //   <Icon name="storefront" size={30} color="black" />
    //   <Icon name="person-outline" size={30} color="black" />
    //   <Icon name="add-shopping-cart" size={30} color="black" />
    //   <Icon name="search" size={30} color="black" />
    //   <Icon name="favorite-border" size={30} color="black" />
    //  <Text style={{ color: "black", fontFamily: "Labrada-Regular", fontSize: 20 }}>Main Screen</Text>
    //  <BottomTabStack/>
    // </View>              
    <Drawer.Navigator

      // drawerContent={props=> <HeaderTab {...props}/>}
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerStyle: {
          backgroundColor: 'white', //Set Header color  
        },
        headerTintColor: '#52b372', //Set Header text color
        drawerLabelStyle: {
          // marginLeft: 25,
          fontFamily: "Labrada-Bold",
          fontSize: 25,
        },
      }}>
      <Drawer.Screen
      // onPress={()=>clickTabBarItem(0,navigation)}
        name="HomeScreenStack"
        options={{
          drawerLabel: 'Shop',
         
          title: 'Shop',
          drawerIcon: ({ color }) => (
            <Icon name="storefront" size={30} color="#52b372" />)
        }}
        component={HomeScreenStack}
      />
      <Drawer.Screen
      // onPress={()=>clickTabBarItem(1,navigation)}
      // onPress={()=>clickTabBarItem(1)}
        name="SearchScreenStack"
        options={{
          drawerLabel: 'Explore',
          title: 'Explore',
          drawerIcon: ({ color }) => (
            <Icon
              name="search"
              size={30}
              color="#52b372"
            />
          ),
        }}
        component={SearchScreenStack}
      />
      <Drawer.Screen
        name="FavScreenStack"
        options={{
          drawerLabel: 'Favorite',
          title: 'Favorite',
          drawerIcon: ({ color }) => (
            <Icon
              name="favorite-border"
              size={30}
              color="#52b372"
            />
          ),
        }}
        component={FavScreenStack}
      />
      <Drawer.Screen
        name="CartScreenStack"
        options={{
          drawerLabel: 'Cart',
          title: 'Cart',
          drawerIcon: ({ color }) => (
            <Icon
              name="add-shopping-cart"
              size={30}
              color="#52b372"
            />
          ),
        }}
        component={CartScreenStack}
      />
      <Drawer.Screen
        name="AccountScreenStack"
        options={{
          drawerLabel: 'Account',
          title: 'Account',
          drawerIcon: ({ color }) => (
            <Icon
              name="person-outline"
              size={30}
              color="#52b372"
            />
          ),
        }}
        component={AccountScreenStack}
      />
    
      {/* <AppBar    
 contentContainerStyle={{backgroundColor:"white"}}
    trailing={props => (
      <HStack>
        <IconButton
          icon={props => <Icon name="search"  size={25} color="black" />}/>
        <IconButton
          icon={props => <Icon name="favorite-border" size={25} color="black" />}/>
        <IconButton
          icon={props => <Icon name="add-shopping-cart"size={25} color="black" />}/>
      </HStack>
    )}
  /> */}
    </Drawer.Navigator>
  )
}

// const styles = StyleSheet.create({
//   Bottom: {
//     size: 50,
//     color: 'red',
//     height: 100,
//   },
// })