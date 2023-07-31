import { useNavigation } from '@react-navigation/native';
import React from 'react'
import StyledText from './StyledText.jsx'
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native'

export const CardView = ({ data }) => {
    const { topic, description} = data
    const { navigate } = useNavigation();
    const handlerViewPress = (item) => {
        navigate('InfoCard',{item})

    }


    return (
        <TouchableWithoutFeedback onPress={()=>handlerViewPress(data)}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={require('../assets/imgCard.jpg')} />
                </View>
                <View style={styles.textContent}>
                    <StyledText bold>
                        {topic}
                    </StyledText>
                    <StyledText small blue>
                        {description}
                    </StyledText>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#A4BBC7',
        borderRadius: 20,
        marginVertical: 5,
    },
    imageContainer: {
        flex: 1

    },
    image: {
        width: '100%',
        height: 150,
        borderRadius: 20
    },

    textContent: {
        flex: 1,
        paddingVertical: 5,
        paddingHorizontal:20,

    },

})