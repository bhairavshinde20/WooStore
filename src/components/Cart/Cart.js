import { View, Text } from 'react-native'
import React from 'react'
import styles from './CartStyle'
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../../redux/reducer/Reducers';

export default function Cart() {
  const dispatch = useDispatch();

  const item = useSelector(state => state.cart.cart);
  // console.log(item);
  const removeItemFromCart = item => {
    dispatch(removeFromCart(item));
  };
  return (
    <View>
      <Text style={{ color: "black" }}>Cart</Text>
    </View>
  )
}