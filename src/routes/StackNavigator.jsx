import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingView from '../components/LandingView';
import MainView from '../components/MainView';
import CardInfoView from '../components/CardInfoView';

import CalculationInfo from '../components/CalculationInfo';
const Stack = createNativeStackNavigator();

const StackNavigator = () => {

  return (
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={MainView} />
        <Stack.Screen name="InfoCard" component={CardInfoView}  />
        <Stack.Screen name="InfoCalculate" component={CalculationInfo}  />
      </Stack.Navigator>
  );
};

export default StackNavigator;
// options={{ headerShown: false }}