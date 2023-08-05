import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, Button } from 'react-native';
import NavView from './NavView';

const LandingView = () => {
  const { navigate } = useNavigation();
  const handlerViewPress = (e) => {

    navigate('Main')

  }

  return (
    <View style={styles.container} >
      <View style={{
        flex: 0.9, backgroundColor: 'white', borderTopLeftRadius: 40,
        borderTopRightRadius: 40
      }}>
        <ImageBackground
          source={require('../assets/background.png')}
          style={styles.imageBackground}
          imageStyle={styles.roundedImage}
          resizeMode="cover"
        >
          <View style={styles.content}>
            <Text style={styles.title}>¡Bienvenido a Misira!</Text>
            <Text style={styles.subtitle}>Descubre lo que tenemos para ti.</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={{ flex: 0.1, justifyContent: 'center', backgroundColor: 'white', padding: 20, borderBottomRightRadius: 20, borderBottomLeftRadius: 20 }}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={handlerViewPress}>EMPEZAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#f2f2f2f2'



  },
  button: {
    width: '60%',
    backgroundColor: '#3BA0D5',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  imageBackground: {
    width: '100%',
    height: '100%',
  },
  roundedImage: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 100,
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 20,
    paddingBottom: 60,
    backgroundColor: 'rgba(3, 138, 205, 0.5)',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 100,
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
  },
});
export default LandingView;
