import {
  View, Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { AppBar, HStack, IconButton } from "@react-native-material/core";
import { DrawerHeaderProps } from '@react-navigation/drawer';


export default function HeaderTab(props) {
  return (
    <View>
      
      <AppBar
        contentContainerStyle={{ backgroundColor: "white" }}
        trailing={props => (
          <HStack>
            <IconButton
              icon={props => <Icon name="search" size={25} color="black" />} />
            <IconButton
              icon={props => <Icon name="favorite-border" size={25} color="black" />} />
            <IconButton
              icon={props => <Icon name="add-shopping-cart" size={25} color="black" />} />
          </HStack>
        )}
      />
    </View>
  )
}