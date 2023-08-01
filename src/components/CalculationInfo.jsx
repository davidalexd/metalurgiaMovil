import React, { useState } from 'react'
import StyledText from './StyledText'
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import RowWithColumns from './RowWithColumns';
import { organizeElementsInRows } from '../helpers/helperElements';




const CalculationInfo = ({ route }) => {
    const { item: { description, title, efficiency, cal_image, elements, numberCols, id } } = route.params;

    const organizeInitialValues = () => {
        const initialValuesForm = elements.reduce((obj, item) => {
            if (item.type !== "label") {
                obj[item.id] = '';
            }
            return obj;
        }, {});
        return initialValuesForm

    }


    return (
        <View style={styles.container}>
            <ImageBackground
                source={cal_image}
                resizeMode="cover"
                style={styles.contentImage}
            >
                <View style={styles.contentHeaderTop}>
                    <StyledText color='subheading' fontWeight='bold'>Cantidad</StyledText>
                    <StyledText color='subheading' fontWeight='bold'>Eficiencia</StyledText>
                </View>
            </ImageBackground>
            <View style={styles.contentText}>
                <View style={styles.contentHeaderBottom}>
                    <StyledText color='secondary'>{title}</StyledText>
                    <StyledText color='secondary'>{efficiency}
                    </StyledText>
                </View>
                <RowWithColumns
                    description={description}
                    rows={organizeElementsInRows(elements,numberCols)}
                    formulaIdentifier={id}
                    initialValues={organizeInitialValues()}
                />

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
    contentHeaderTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#f2f2f2f2',
        marginHorizontal: 20,
        paddingHorizontal: 20,
        paddingTop: 10,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
    contentHeaderBottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#f2f2f2f2',
        marginHorizontal: 20,
        paddingHorizontal: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },

    contentText: {
        flex: 0.6,
        backgroundColor: 'white',
    },


})