import React from 'react'
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import CalculationList from './CalculationList';
import StyledText from './StyledText';



const CardInfoView = ({ route }) => {
    const { item: { topic, description, calculations, image_url, module, operation, calculation } } = route.params;
    return (
            <View style={styles.container}>
                <ImageBackground
                    source={image_url}
                    style={styles.image}
                    resizeMode="cover"
                >
                    <View style={styles.separator} />
                </ImageBackground>
                <View style={styles.content}>
                    <ScrollView>

                    <View style={styles.subContentHeader}>
                        <StyledText color='primary' fontSize='subheading' fontWeight='bold'>{topic}</StyledText>
                        <StyledText color='secondary'>{description}</StyledText>
                    </View>
                    <View style={styles.subContentMain}>
                        <View>
                            <StyledText align='center' fontWeight='bold' color='secondary'>Modules</StyledText>
                            <StyledText align='center' color='secondary'>{module}</StyledText>
                        </View>
                        <View>
                            <StyledText align='center' fontWeight='bold' color='secondary'>Calculations</StyledText>
                            <StyledText align='center' color='secondary'>{operation}</StyledText>
                        </View>
                        <View>
                            <StyledText align='center' fontWeight='bold' color='secondary'>Operations</StyledText>
                            <StyledText align='center' color='secondary'>{calculation}</StyledText>
                        </View>
                    </View>
                    <CalculationList calculations={calculations} />
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

    },
    image: {
        flex: 0.3,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        borderRadius: 20
    },

})