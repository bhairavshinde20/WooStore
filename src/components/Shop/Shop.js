import { View, Text } from 'react-native'
import React from 'react'
import styles from './ShopStyle'
// import Coupons from './Coupons'
import Slider from './Slider'
import { ScrollView } from 'react-native-gesture-handler'
import NewCoupons from './NewCoupons'
import Categories from './Categories'
import DealofDay from './DealofDay'
import Tranding from './Tranding'
export default function Shop() {
  return (
    <ScrollView style={styles.container}>
      <View>
      <Slider />
      <NewCoupons />
      <Categories />
      <DealofDay/>
      <Tranding/>
      </View>
    </ScrollView>
  )
}