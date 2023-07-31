import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import NavNormal from './NavNormal';
import NavSearch from './NavSearch';
import Animated, {
    useAnimatedStyle,
} from 'react-native-reanimated';
const NavView = ({ translateY }) => {

    const [isActive, setIsActive] = useState(false)

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: translateY.value }],
        };
    });

    //   const animatedStyle = useAnimatedStyle(() => {
    //     return {
    //       height: height.value,
    //       opacity: height.value === 0 ? 0 : 1, // Ocultar el contenido cuando la altura es 0
    //     };
    //   });


    return (
        <Animated.View style={[styles.header, animatedStyle]}>
            <View style={styles.container}>
                {isActive ? <NavSearch setIsActive={setIsActive} /> : <NavNormal setIsActive={setIsActive} />}
            </View>
        </Animated.View>

    )
}

export default NavView

{/* <>
<View style={styles.leftContainer}>
    <Image style={styles.image} source={require('../assets/logo.png')} />
    <Text style={styles.title}>isira</Text>
    <Search />
</View>

<View style={styles.rigthContainer}>
    <Search/>
    <TextInput
        style={styles.input}
        placeholder="Escribe tu nombre aquí"
    />

</View>
</> */}

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center',

    },

    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor:'#2E5266',
        zIndex: 20,
    }
    // content: {
    //     flex: 1,
    //     justifyContent: 'flex-end',
    //     padding: 20,
    //     paddingBottom: 60,
    //     backgroundColor: 'rgba(3, 138, 205, 0.5)',
    //     borderTopLeftRadius: 40,
    //     borderTopRightRadius: 40,
    //     borderBottomRightRadius: 100,
    // },

});
