import React from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import StyledText from './StyledText'
import { useNavigation } from '@react-navigation/native'

const Logo = () => {
    const navigation = useNavigation()
  return (
            <TouchableOpacity
                onPress={() =>   navigation.openDrawer()}
                style={styles.container}
            >
                <View style={styles.content}>
                    <Image style={styles.image} source={require('../assets/logo.png')} />
                    <StyledText fontSize='heading' fontWeight='bold' >isira</StyledText>
                </View>
            </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    container: {
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

export default Logo