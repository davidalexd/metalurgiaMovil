import React, { useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './TabNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingView from '../components/LandingView';
const Stack = createNativeStackNavigator();
const Routes = () => {

  const StackNavigatorOptions = {
    screenOptions: {
      initialRouteName: "LandingPage",
      headerShown: false,
    },
  };
  return (
      <NavigationContainer>
        <Stack.Navigator  {...StackNavigatorOptions}>
          <Stack.Screen name="LandingPage" component={LandingView} />
          <Stack.Screen name="Main" parametroApasar={"soyparametro"} component={TabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};



export default Routes;