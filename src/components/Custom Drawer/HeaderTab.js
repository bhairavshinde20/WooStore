import { View, Text,
    TouchableOpacity,
    StyleSheet } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function HeaderTab(props) {
  return (
    <View>
        <Icon
              name="search"
              style={styles.iconstyle}
              size={30}
              color="#52b372" />

<Icon
              name="favorite-border"
              style={styles.iconstyle}
              size={30}
              color="#52b372" />
                      <Icon
              name="add-shopping-cart"
              style={styles.iconstyle}
              size={30}
              color="#52b372" />
    </View>
  )
}