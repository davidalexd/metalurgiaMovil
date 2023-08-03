import React from 'react'
import { FlatList, Image, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import StyledText from './StyledText'
import { useNavigation } from '@react-navigation/native';

const CalculationList = ({ calculations }) => {
    const { navigate } = useNavigation();
    const handlerViewPress = (item) => {
        navigate('InfoCalculate', { item })
    }

    return (
        <View >
            {calculations.map((calculation) => (
                <View key={calculation.id}>
                    <StyledText fontWeight='bold' fontSize='subheading' spacingBottom='normal'>{calculation.title}</StyledText>
                    {calculation.metals.map((metal) => (
                        <View key={metal.id} style={styles.content}>
                            <View style={styles.subContentLeft}>
                                <Image style={styles.image} source={metal.cal_image} />
                                <StyledText align='center' fontSize='body' fontWeight='bold'>{metal.title}</StyledText>
                            </View>
                            <TouchableOpacity onPress={() => handlerViewPress(metal)}>
                                <View style={styles.buttonStyle}>
                                    <StyledText align='center' fontSize='body' fontWeight='bold' color='secondary'>More info</StyledText>
                                </View>
                            </TouchableOpacity>
                        </View>
                    ))}

                </View>
            ))}
        </View>
    )
}

export default CalculationList

const styles = StyleSheet.create({
    buttonStyle: {
        justifyContent: 'center', backgroundColor: '#D3D0CB', padding: 10, borderRadius: 10
    },

    image: {
        height: 48,
        width: 48,
        borderRadius: 50,
        marginRight: 10,
    },

    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1, // Grosor del borde
        borderColor: '#999', // Color del borde
        marginBottom: 5,
        padding: 10,
        borderRadius: 5,

    },
    subContentLeft: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})