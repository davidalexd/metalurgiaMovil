import React from 'react'
import StyledText from './StyledText'
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import RowWithColumns from './RowWithColumns';




const CalculationInfo = ({ route }) => {
    const { item: { description, title, subtitle, efficiency, cal_image, elements,numberCols } } = route.params;


    const organizeElementsInRows = (elements, columnsPerRow) => {
        const rows = [];
        let currentRow = [];
        let currentIndex = 0;

        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            currentRow.push(element);

            currentIndex += element.span;

            if (currentIndex >= columnsPerRow || i === elements.length - 1) {
                rows.push(currentRow);
                currentRow = [];
                currentIndex = 0;
            }
        }

        return rows;
    };


    return (
        <View style={styles.container}>
            <ImageBackground
                source={cal_image}
                resizeMode="cover"
                style={styles.contentImage}
            >
                <View style={styles.contentTitle}>
                    <View style={{ flex: 0.5 }}>
                        <StyledText fontSize='subheading' fontWeight='bold'>{title}</StyledText></View>
                    <View style={{ flex: 0.5, flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <StyledText fontSize='subheading' fontWeight='bold'>Efficiency</StyledText>

                    </View>
                </View>
            </ImageBackground>
            <View style={styles.contentText}>
                <View style={styles.contentSubtitle}>
                    <StyledText color='secondary'>{subtitle}</StyledText>
                    <StyledText color='secondary'>{efficiency}
                    </StyledText>
                </View>
                <ScrollView>
                    <View style={styles.contentMain}>
                        <View>
                            <StyledText fontSize='subheading' fontWeight='bold'>Description</StyledText>
                            <StyledText color='secondary' spacingBottom='normal' >{description}</StyledText>

                            <RowWithColumns rows={organizeElementsInRows(elements, numberCols)} />
                            {/* <TouchableOpacity>
                                <View style={styles.button}>
                                    <StyledText align='center' fontSize='subheading' fontWeight='bold' color='secondary'>Calculate</StyledText>
                                </View>
                            </TouchableOpacity> */}
                        </View>

                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default CalculationInfo

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentImage: {
        flex: 0.4,
        justifyContent: 'flex-end'
    },
    contentTitle: {
        backgroundColor: '#f2f2f2f2',
        marginHorizontal: 20,
        paddingHorizontal: 10,
        paddingTop: 10,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        flexDirection: 'row',
    },
    contentSubtitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#f2f2f2f2',
        marginHorizontal: 20,
        paddingHorizontal: 10,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    contentMain: {
        flex: 1, marginHorizontal: 20,
        marginTop:20,
    },

    contentText: {
        flex: 0.6,
        backgroundColor: 'white',
    },


})