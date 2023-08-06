import React, { useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingView from '../components/LandingView';
import DrawerNavigator from './DrawerNavigator';
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
          <Stack.Screen name="DrawerGroup"component={DrawerNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};



export default Routes;