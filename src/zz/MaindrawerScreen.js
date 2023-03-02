import { View, Text } from 'react-native'
import React from 'react'
import MainTabScreen from './MainTabScreen';
// import Explore from './components/Explore/Explore'
import { createDrawerNavigator } from '@react-navigation/drawer';


const Drawer = createDrawerNavigator();


export default function MaindrawerScreen({navigation}) {
  return (
    <Drawer.Navigator 
    // drawerContent={props => <CustomDrawer {...props} />}

    screenOptions={{
        headerStyle: {
          backgroundColor: 'white', //Set Header color
        },
        headerTintColor: '#52b372', //Set Header text color

        drawerLabelStyle: {
          // marginLeft: 25,
          fontFamily: 'Labrada-Regular',
          fontSize: 25,
        },
      }}
    >
          <Drawer.Screen name="Shop" component={MainTabScreen}
        //   onPress={() => {navigation.navigate('Shop')}}
          />
          <Drawer.Screen name="Explore" component={MainTabScreen} 
          onPress={() => {navigation.navigate('Explore')}}
          />
           <Drawer.Screen name="Favourite" component={MainTabScreen} 
          onPress={() => {navigation.navigate('favourite')}}
          />
          <Drawer.Screen name="Cart" component={MainTabScreen} 
          onPress={() => {navigation.navigate('Explore')}}
          />
          <Drawer.Screen name="Account" component={MainTabScreen} 
          onPress={() => {navigation.navigate('Explore')}}
          /> 
        </Drawer.Navigator>
  )
}