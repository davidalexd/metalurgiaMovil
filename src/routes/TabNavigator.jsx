
import LandingView from '../components/LandingView';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNavigator from './StackNavigator';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import StyledText from '../components/StyledText';
import { useRef } from 'react';
import { DrawerLayout } from 'react-native-gesture-handler';
import Sidebar from '../components/Sidebar';
import ServiceView from '../components/ServiceView';
import ContactView from '../components/ContactView';
const Tab = createBottomTabNavigator();
const TabNavigator = () => {
    const drawerRef = useRef(null);
    const openSidebar = () => {
        drawerRef.current.openDrawer();
    };
    const closeSidebar = () => {
        drawerRef.current.closeDrawer();
    };


    const renderHeaderRightButton = () => {
        return (

            <TouchableOpacity
                onPress={() => openSidebar()}
                style={styles.container}
            >
                <View style={styles.content}>
                    <Image style={styles.image} source={require('../assets/logo.png')} />
                    <StyledText fontSize='heading' fontWeight='bold' >isira</StyledText>
                </View>
            </TouchableOpacity>
        );
    };


    return (

        <DrawerLayout
            ref={drawerRef}
            drawerWidth={200}
            drawerPosition="left"
            renderNavigationView={() => <Sidebar closeSidebar={closeSidebar} />}
        >
            <Tab.Navigator initialRouteName="Home"
                screenOptions={{ tabBarActiveTintColor: 'red', headerLeft: () => renderHeaderRightButton() }}>
                <Tab.Screen name="Home" component={StackNavigator} options={{ headerShown: false, tabBarLabel: 'Inicio', tabBarIcon: ({ color, size }) => (<Entypo name="home" size={size} color={color} />) }} />
                <Tab.Screen name="Service" component={ServiceView} options={{ tabBarLabel: 'Servicios misira', tabBarIcon: ({ color, size }) => (<MaterialIcons name="home-repair-service" size={size} color={color} />) }} />
                <Tab.Screen name="Contact" component={ContactView} options={{ tabBarLabel: 'Contacta misira', tabBarIcon: ({ color, size }) => (<MaterialIcons name="connect-without-contact" size={size} color={color} />) }} />
            </Tab.Navigator>
        </DrawerLayout>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 20,
    },
    content: {
        flexDirection: 'row'

    },
    image: {
        width: 30,
        height: 30,
    },

});

export default TabNavigator;