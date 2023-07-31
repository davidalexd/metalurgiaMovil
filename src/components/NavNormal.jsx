import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, TextInput } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
const NavNormal = ({ setIsActive }) => {
  const handlerViewPress = () => {
    setIsActive(true)
  }
  return (
    <>
      <View style={styles.leftContainer}>
        <Image style={styles.image} source={require('../assets/logo.png')} />
        <Text style={styles.title}>isira</Text>
      </View>
      <View style={styles.rigthContainer} >
        <Icon onPress={handlerViewPress} name="search" size={25} color="#D3D0CB" />
      </View>
    </>
  )
}

export default NavNormal

const styles = StyleSheet.create({
  leftContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',

  },
  image: {
    width: 30,
    height: 30,
  },
  title: {
    color: '#D3D0CB',
    fontWeight: 'bold',
    fontSize: 20
  },
  rigthContainer: {
    flex: 1,
    alignItems: 'flex-end'

  },

})
