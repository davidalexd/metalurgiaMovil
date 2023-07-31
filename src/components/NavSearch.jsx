import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, TextInput } from 'react-native';

import Icon from "react-native-vector-icons/FontAwesome";
const NavSearch = ({ setIsActive }) => {
  const handlerViewPress = () => {
    setIsActive(false)
  }
  return (
    <>
      <View style={styles.leftContainer}>
        <Icon onPress={handlerViewPress} name="arrow-left" size={25} color="#D3D0CB" />
      </View>
      <View style={styles.rigthContainer}>
        <TextInput
          style={styles.input}
          placeholder="Busca un calculo"
          placeholderTextColor='#D3D0CB'
        />
        <View style={styles.iconContainer} >
          <Icon  style={styles.icon} name="paper-plane" size={25} color="#D3D0CB" />
        </View>

      </View>
    </>
  )
}

export default NavSearch

const styles = StyleSheet.create({
  leftContainer: {
    flex: 0.1,
    flexDirection: 'row',
    alignItems: 'flex-start',

  },
  rigthContainer: {
    flex: 0.9,
    display: 'flex',
    flexDirection: 'row',
  },
  input: {
    flex: 0.9,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderColor: '#D3D0CB',
    borderWidth: 1,
    borderRadius: 10,

  },
  iconContainer: {
    flex: 0.1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10
  },

})
