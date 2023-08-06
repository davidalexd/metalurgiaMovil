import React from 'react'
import { StyleSheet, View,Image} from 'react-native'
import StyledText from './StyledText';

const Sidebar = () => {
  return (
    <View style={styles.container}>
      <View>
      <View style={styles.content}>
            <Image style={styles.image} source={require('../assets/logo.png')} />
            <StyledText fontSize='heading' fontWeight='bold' >isira</StyledText>
          </View>
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

  container: {
    marginLeft: 20,
    flex:1,
    flexDirection: 'row'

  },
  image: {
    width: 30,
    height: 30,
  },
});

export default Sidebar