import { View, Text } from 'react-native'
import React from 'react'
import styles from './FavouriteStyle'
import SingleProduct from '../Shop/SingleProduct'

export default function Favourite() {
  return (
  <View>
    {/* <Text style={{color:"black"}}>Fav</Text> */}
    <SingleProduct/>
  </View>
  )
}