import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View,Image} from 'react-native'
import StyledText from './StyledText';

const Sidebar = ({ closeSidebar }) => {
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity
          onPress={() => closeSidebar()}
          style={styles.containerButton}
        >
          <View style={styles.content}>
            <Image style={styles.image} source={require('../assets/logo.png')} />
            <StyledText fontSize='heading' fontWeight='bold' >isira</StyledText>
          </View>
        </TouchableOpacity>
      </View>
      {/* Agrega aquí los enlaces o elementos que desees mostrar en el sidebar */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  containerButton: {
    marginLeft: 20,
  },
  content: {
    flexDirection: 'row'

  },
  image: {
    width: 30,
    height: 30,
  },
});

export default Sidebar