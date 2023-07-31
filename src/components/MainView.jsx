import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import NavView from './NavView';
import {
  withTiming,
  Easing,
  useSharedValue,
} from 'react-native-reanimated';
import TopicList from './TopicList';
import StyledText from './StyledText';
import BestServiceList from './BestServiceList';
const MainView = () => {
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
  return (
    <View style={styles.container}>
      {/* <NavView translateY={translateY} /> */}
      <View style={styles.content}>
        <ScrollView onScroll={handleScroll}>
          <StyledText style={styles.title} fontWeight='bold' fontSize='subheading' color='primary'>More services</StyledText>
          <BestServiceList />
          <StyledText style={styles.title} fontWeight='bold' fontSize='subheading' color='primary'>Service list
          </StyledText>
          <TopicList />
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
    marginVertical: 10,

  }





})