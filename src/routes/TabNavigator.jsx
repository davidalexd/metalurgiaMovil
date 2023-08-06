import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import { useRef } from 'react';
import { Ionicons } from '@expo/vector-icons';
import ServiceView from '../components/ServiceView';
import ContactView from '../components/ContactView';
import MainView from '../components/MainView';
const Tab = createBottomTabNavigator();
const TabNavigator = () => {

    return (

        <Tab.Navigator initialRouteName="HomeScreen"
            screenOptions={({ route }) => ({
                tabBarShowLabel: false,
                tabBarIcon: ({ color, focused, size }) => {
                    let iconName;
                    if (route.name === 'HomeScreen') {
                        iconName = focused ? 'home' : 'home-outline'
                    } else if (route.name === 'Service') {
                        iconName = focused ? 'briefcase-sharp' : 'briefcase-outline'
                    } else if (route.name === 'Contact') {
                        iconName = focused ? 'send' : 'send-outline'
                    }
                    return <Ionicons name={iconName} size={size} color={color} />
                }
            })}>
            <Tab.Screen name="HomeScreen" component={MainView} />
            <Tab.Screen name="Service" component={ServiceView} />
            <Tab.Screen name="Contact" component={ContactView} />
        </Tab.Navigator>
    );
};


export default TabNavigator;