import React, { useLayoutEffect } from 'react'
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import CalculationList from './CalculationList';
import StyledText from './StyledText';
import { useNavigation, useRoute } from '@react-navigation/native';

import { AntDesign } from '@expo/vector-icons';

const CardInfoView = () => {
    const navigation = useNavigation()
    const { params: { module } } = useRoute();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: module.topic
        })

    }, [])
    return (
        <View style={styles.container}>
            <ImageBackground
                source={module.image_url}
                style={styles.image}
                resizeMode="cover"
            >
                <View style={styles.separator} />
            </ImageBackground>
            <View style={styles.content}>
                <ScrollView>

                    <View style={styles.subContentHeader}>
                        <StyledText color='primary' fontSize='subheading' fontWeight='bold'>{module.topic}</StyledText>
                        <StyledText color='secondary'>{module.description}</StyledText>
                    </View>
                    <View style={styles.subContentMain}>
                        <View style={styles.column}>
                        <AntDesign name="folder1" size={24} color="black" />
                            <StyledText align='center' fontWeight='bold' color='secondary'>Submodulos</StyledText>
                            <StyledText align='center' color='secondary'>{module.number}</StyledText>
                        </View>
                        <View style={styles.column}>
                        <AntDesign name="switcher" size={24} color="black" />
                            <StyledText align='center' fontWeight='bold' color='secondary'>Operaciones</StyledText>
                            <StyledText align='center' color='secondary'>{module.operation}</StyledText>
                        </View>
                        <View style={styles.column}>
                        <AntDesign name="calculator" size={24} color="black" />
                            <StyledText align='center' fontWeight='bold' color='secondary'>Calculos</StyledText>
                            <StyledText align='center' color='secondary'>{module.calculation}</StyledText>
                        </View>
                    </View>
                    <CalculationList calculations={module.calculations} />
                </ScrollView>
            </View>

        </View>

    )
}

export default CardInfoView

const styles = StyleSheet.create({
    separator: {
        height: 35,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        backgroundColor: '#fff'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    content: {
        flex: 0.7,
        paddingHorizontal: 20,
    },
    subContentHeader: {
        marginBottom: 15,
    },
    subContentMain: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
        marginBottom: 15,
        backgroundColor: '#f2f2f2f2',
        borderRadius: 10,

    },
    image: {
        flex: 0.3,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        borderRadius: 20
    },
    column:{
        flexDirection:'column',justifyContent:'center',alignItems:'center'
    }

})