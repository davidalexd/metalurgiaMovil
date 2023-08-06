import React from 'react'
import { FlatList, Image, ImageBackground, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import StyledText from './StyledText'
import { useNavigation } from '@react-navigation/native'
const UpcomingServices = ({upcomingServices}) => {
    const { navigate } = useNavigation();
    const handlerViewPress = (module) => {
        // navigate('InfoCard', { module })

        
    }
    return (
        <FlatList data={upcomingServices}
            horizontal={true}
            renderItem={({ item: upcomingService }) => (
                <TouchableWithoutFeedback onPress={() => handlerViewPress(upcomingService)}>
                    <View style={styles.carouselItem}>
                        <ImageBackground source={upcomingService.image_url} style={styles.image} imageStyle={styles.imageBackground}>
                            <View style={styles.imageTextContainer}>
                                <StyledText color='primary' fontSize='subheading' fontWeight='bold'>{upcomingService.topic}</StyledText>
                                <StyledText color='secondary'>
                                    {upcomingService.subtopic}
                                </StyledText>
                            </View>
                        </ImageBackground>
                    </View>

                </TouchableWithoutFeedback>
            )}
        >
        </FlatList>

    )
}

export default UpcomingServices

const styles = StyleSheet.create({
    carouselItem: {
        width: 300,
        height: 200,
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
        backgroundColor: 'rgba(242, 242, 242, 0.8)',
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