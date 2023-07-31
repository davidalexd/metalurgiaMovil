import React from 'react'
import { FlatList, Image, ImageBackground, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import StyledText from './StyledText'
import repositories from '../data/repositories.js'
import { useNavigation } from '@react-navigation/native'
const BestServiceList = () => {
    const { navigate } = useNavigation();
    const handlerViewPress = (item) => {
        navigate('InfoCard', { item })

    }
    return (
        <FlatList data={repositories}
            horizontal={true}
            renderItem={({ item: repo }) => (
                <TouchableWithoutFeedback onPress={() => handlerViewPress(repo)}>
                    <View style={styles.carouselItem}>
                        <ImageBackground source={repo.image_url} style={styles.image} imageStyle={styles.imageBackground}>
                            <View style={styles.imageTextContainer}>
                                <StyledText color='primary' fontSize='subheading' fontWeight='bold'>{repo.topic}</StyledText>
                                <StyledText color='secondary'>
                                    {repo.subtopic}
                                </StyledText>
                                <View style={styles.SubContainerText}>
                                    <View style={styles.textColumn}>
                                        <StyledText color='primary' fontSize='body' fontWeight='bold'>Module</StyledText>
                                        <StyledText color='secondary'>
                                            {repo.module}
                                        </StyledText>
                                    </View>
                                    <View style={styles.textColumn}>
                                        <StyledText color='primary' fontSize='body' fontWeight='bold'>Calculation</StyledText>
                                        <StyledText color='secondary'>
                                            {repo.calculation}
                                        </StyledText>
                                    </View>
                                    <View style={styles.textColumn}>
                                        <StyledText color='primary' fontSize='body' fontWeight='bold'>Operation</StyledText>
                                        <StyledText color='secondary'>
                                            {repo.operation}
                                        </StyledText>
                                    </View>
                                </View>

                            </View>
                        </ImageBackground>
                    </View>

                </TouchableWithoutFeedback>
            )}
        >
        </FlatList>

    )
}

export default BestServiceList

const styles = StyleSheet.create({
    carouselItem: {
        width: 250,
        height: 350,
        borderRadius: 10,
        marginHorizontal: 20,
    },
    image: {
        width: '100%',
        height: '100%',

        justifyContent: 'flex-end',
    },
    imageBackground: {
        borderRadius: 20,

    },
    imageTextContainer: {
        backgroundColor: '#f2f2f2f2',
        borderRadius: 20,
        margin: 10,
        padding: 10,
    },
    SubContainerText:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    textColumn:{
        flexDirection:'column',
        alignItems:'center'
    }


})