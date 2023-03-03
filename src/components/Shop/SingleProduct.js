import { View, Text, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { ImageSlider } from 'react-native-image-slider-banner'
import { useSelector } from 'react-redux';

export default function SingleProduct({ navigation }) {
    const item = useSelector(state => state.cart.cart);
    // console.log(item);
    return (
        <View style={styles.container}>
            <Text style={styles.loading}>Single product</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    loading: {
        color: "black"
    },
})