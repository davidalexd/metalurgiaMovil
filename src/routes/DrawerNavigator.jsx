import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import StackNavigator from './StackNavigator';
import Details from '../components/Details'
import { MaterialCommunityIcons } from '@expo/vector-icons';
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {

  return (
    <Drawer.Navigator initialRouteName="StackGroup"
      screenOptions={({ route }) => ({
        headerShown: false,
        drawerIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'StackGroup') {
            iconName = 'home'
          } else if (route.name === 'Details') {
            iconName = 'details'
          }
          return <MaterialCommunityIcons name={iconName} size={size} color={color} />
        }
      })}
    >
      <Drawer.Screen name="StackGroup" component={StackNavigator} />
      <Drawer.Screen name="Details" component={Details} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;