import React, { useLayoutEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import repositories from '../data/repositories.js'
import {
  withTiming,
  Easing,
  useSharedValue,
} from 'react-native-reanimated';
import ServicesList from './ServicesList';
import StyledText from './StyledText';
import UpcomingServices from './UpcomingServices';
import { useNavigation, useRoute } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import Logo from './Logo';
const MainView = () => {
  const { params } = useRoute();
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Modulos',
      headerLeft: () => (
        <Logo />
      ),
    })

  }, [])

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const translateY = useSharedValue(0);
  const handleScroll = (event) => {
    const currentScrollPos = event.nativeEvent.contentOffset.y;
    if (prevScrollPos > currentScrollPos) {

      translateY.value = withTiming(-50, {
        duration: 300,
        easing: Easing.out(Easing.exp),
      });


    } else if (prevScrollPos < currentScrollPos) {
      translateY.value = withTiming(0, {
        duration: 300,
        easing: Easing.out(Easing.exp),
      });

    }
    setPrevScrollPos(currentScrollPos);
  };
  //onScroll={handleScroll}
  return (
    <View style={styles.container}>
      {/* <NavView translateY={translateY} /> */}
      <View style={styles.content}>
        <ScrollView>
          <View style={styles.row}>
            <StyledText style={{flex:0.6}} fontWeight='bold' fontSize='heading' spacingTop='normal' spacingBottom='normal' color='primary'>Descubre lo mejor de misira para ti
            </StyledText>
            <View style={{flex:0.4,flexDirection:'row',alignItems:'center',justifyContent:'flex-end'}}>
            <AntDesign name="like2" size={40} color="black" />
            </View>
          </View>
          <StyledText style={styles.title} fontWeight='bold' fontSize='subheading' spacingTop='normal' spacingBottom='normal' color='primary'>Proximos productos
          </StyledText>
          <UpcomingServices upcomingServices={repositories.upcomingServices} />
          <StyledText style={styles.title} fontWeight='bold' fontSize='subheading' spacingTop='normal' spacingBottom='normal' color='primary'>Modulos disponibles
          </StyledText>
          <ServicesList services={repositories.services} />
        </ScrollView>
      </View>
    </View>
  )
}

export default MainView
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'white'

  },
  content: {
    //  marginTop: 50 
  },
  title: {
    marginLeft: 20,

  },
  row: {
    flex: 1,
    borderRadius: 20,
    flexDirection: 'row',
    padding: 15,
    margin:20,
    backgroundColor: '#f2f2f2f2'

  }





})