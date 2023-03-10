import { View, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import React from 'react'
import styles from './ShopStyle'
import Slider from './Slider'
import NewCoupons from './NewCoupons'
import Categories from './Categories'
import DealofDay from './DealofDay'
import Tranding from './Tranding'
import SingleProduct from './SingleProduct'
export default function Shop({navigation}) {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Slider />
        <NewCoupons />
        <Categories />
        <DealofDay />
        <Tranding />
        {/* <SingleProduct/> */}
      </View>
    </ScrollView>
  )
}