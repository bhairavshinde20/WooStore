import { View, Text } from 'react-native'
import React from 'react'
import Shop from '../components/Shop/Shop'
import Explore from '../components/Explore/Explore'
import Favourite from '../components/Favourite/Favourite'
import Cart from '../components/Cart/Cart'
import Account from '../components/Account/Account'
import Icon from "react-native-vector-icons/MaterialIcons"


const ShopStack = createStackNavigator();
const ExploreStack = createStackNavigator();
const FavouriteStack = createStackNavigator();
const CartStack = createStackNavigator();
const AccrountStack = createStackNavigator();
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack';
const Tab = createBottomTabNavigator();


const MainTabScreen = () => (
  <Tab.Navigator
    initialRouteName="Home"
    activeColor="#fff"
    screenOptions={{
      headerShown: false,
      tabBarStyle: {
        height: 65,
        // width:'90%',
        // alignSelf:'center',
        // borderRadius:20,marginBottom:10,
        padding: 10,
        paddingBottom: 10,
        fontFamily: 'Labrada-Regular',

      },
      tabBarActiveTintColor: '#52b372',
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: '#009387',
        tabBarIcon: ({ color }) => (
          <Icon name="storefront" size={30} color="black" />
        ),
      }}
    />
    <Tab.Screen
      name="Explore"
      component={ExploreStackScreen}
      options={{
        tabBarLabel: 'Explore',
        tabBarColor: '#1f65ff',
        tabBarIcon: ({ color }) => (
          <Icon name="storefront" size={30} color="black" />
        ),
      }}
    />
    <Tab.Screen
      name="Favourite"
      component={FavStackScreen}
      options={{
        tabBarLabel: 'Favourite',
        tabBarColor: '#1f65ff',
        tabBarIcon: ({ color }) => (
          <Icon name="storefront" size={30} color="black" />
        ),
      }}
    />
    <Tab.Screen
      name="Cart"
      component={CartStackScreen}
      options={{
        tabBarLabel: 'Cart',
        tabBarColor: '#1f65ff',
        tabBarIcon: ({ color }) => (
          <Icon name="storefront" size={30} color="black" />
        ),
      }}
    />
    <Tab.Screen
      name="Account"
      component={AccountStackScreen}
      options={{
        tabBarLabel: 'Account',
        tabBarColor: '#1f65ff',
        tabBarIcon: ({ color }) => (
          <Icon name="storefront" size={30} color="black" />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({ navigation }) => (
  <ShopStack.Navigator
    initialRouteName="HomeScreen"
    screenOptions={{
      headerShown: false,
      headerStyle: {
        backgroundColor: '#1f65ff',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}
  >
    <ShopStack.Screen name="Shop" component={Shop} options={{
      title: 'Shop',
      headerLeft: () => (
        <Icon name="menu" size={25} onPress={() => navigation.openDrawer()}></Icon>
      )
    }} />
  </ShopStack.Navigator>
);

const ExploreStackScreen = ({ navigation }) => (
  <ExploreStack.Navigator screenOptions={{
    headerShown: false,
    headerStyle: {
      backgroundColor: '#1f65ff',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <ExploreStack.Screen name="Explore" component={Explore} options={{
      headerLeft: () => (
        <Icon name="menu" size={25} onPress={() => navigation.openDrawer()}></Icon>
      )
    }} />
  </ExploreStack.Navigator>
);

const FavStackScreen = ({ navigation }) => (
  <FavouriteStack.Navigator screenOptions={{
    headerShown: false,
    headerStyle: {
      backgroundColor: '#1f65ff',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <FavouriteStack.Screen name="favourite" component={Favourite} options={{
      headerLeft: () => (
        <Icon name="menu" size={25} onPress={() => navigation.openDrawer()}></Icon>
      )
    }} />
  </FavouriteStack.Navigator>
);

const CartStackScreen = ({ navigation }) => (
  <CartStack.Navigator screenOptions={{
    headerShown: false,
    headerStyle: {
      backgroundColor: '#1f65ff',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <CartStack.Screen name="Cart" component={Cart} options={{
      headerLeft: () => (
        <Icon name="menu" size={25} onPress={() => navigation.openDrawer()}></Icon>
      )
    }} />
  </CartStack.Navigator>
);

const AccountStackScreen = ({ navigation }) => (
  <AccrountStack.Navigator screenOptions={{
    headerShown: false,
    headerStyle: {
      backgroundColor: '#1f65ff',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <AccrountStack.Screen name="Account" component={Account} options={{
      headerLeft: () => (
        <Icon name="menu" size={25} onPress={() => navigation.openDrawer()}></Icon>
      )
    }} />
  </AccrountStack.Navigator>
);
