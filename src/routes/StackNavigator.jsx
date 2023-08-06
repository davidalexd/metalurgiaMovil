import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingView from '../components/LandingView';
import MainView from '../components/MainView';
import CardInfoView from '../components/CardInfoView';

import CalculationInfo from '../components/CalculationInfo';
import TabNavigator from './TabNavigator';
const Stack = createNativeStackNavigator();

const StackNavigator = () => {

  return (
    <Stack.Navigator initialRouteName="TabGroup">
      <Stack.Screen name="TabGroup" options={{ headerShown: false }} component={TabNavigator} />
      <Stack.Screen name="InfoCard" options={{ presentation: 'modal' }} component={CardInfoView} />
      <Stack.Screen name="InfoCalculate" options={{ presentation: 'modal' }} component={CalculationInfo} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
// options={{ headerShown: false }}