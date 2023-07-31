import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LandingView from '../components/LandingView';
import MainView from '../components/MainView';
import CardInfoView from '../components/CardInfoView';

import CalculationInfo from '../components/CalculationInfo';
const Stack = createNativeStackNavigator();

const Routes = () => {
  // const routeScreenDefaultOptions ={
  //   headerStyle:{
  //     backGroundColor:'rgba(7,26,93,255)'
  //   },
  //   headerTitleStyle:{
  //     color:'black'
  //   }
  // }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={LandingView} options={{ headerShown: false }} />
        <Stack.Screen name="Menu" component={MainView} options={{ headerShown: false }} />
        <Stack.Screen name="InfoCard" component={CardInfoView} options={{ headerShown: false }} />
        <Stack.Screen name="InfoCalculate" component={CalculationInfo} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
//    <Stack.Screen name="Home" component={LandingView} options={{ headerShown: false }} />
//options={routeScreenDefaultOptions}