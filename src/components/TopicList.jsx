import React from 'react'
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback, FlatList } from 'react-native'
import repositories from '../data/repositories.js'
import StyledText from './StyledText.jsx'
import { useNavigation } from '@react-navigation/native'
const TopicList = () => {
    const { navigate } = useNavigation();
    const handlerViewPress = (item) => {
        navigate('InfoCard', { item })

    }

    return (
        <View>
            {repositories.map((repo) => <TouchableWithoutFeedback key={repo.id} onPress={() => handlerViewPress(repo)}>
                <View style={styles.container}>
                    <Image style={styles.image} source={repo.image_url} />
                    <View style={styles.textContent}>
                        <View>
                            <StyledText color='primary' fontSize='subheading' fontWeight='bold'>{repo.topic}</StyledText>
                            <StyledText color='secondary'>
                                {repo.subtopic}
                            </StyledText>
                        </View>
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

                </View>
            </TouchableWithoutFeedback>)}
        </View>
    )
}




export default TopicList

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#f2f2f2f2',
        borderRadius: 20,
        marginVertical: 5,
        marginHorizontal: 20,
    },
    imageContainer: {
        flex: 1

    },
    image: {
        width: 130,
        height: 130,
        borderRadius: 20
    },

    textContent: {
        flex: 1,
        flexDirection: 'column',
        paddingVertical: 5,
        paddingHorizontal: 10,
        justifyContent:'space-around'
    },
    SubContainerText: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textColumn: {
        flexDirection: 'column',
        alignItems: 'center'
    }


})