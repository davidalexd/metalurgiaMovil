import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import StyledText from './StyledText'
import StyledTextInput from './StyledTextInput'
const TableResult = ({ rows, initialValues, setValues, values, numberCols }) => {
    useEffect(() => {
        setValues(initialValues)
    }, [])
    return (
        <View style={styles.container}>
            {rows.map((row, rowIndex) => (
                <View key={rowIndex} style={styles.row}>
                    {row.map((element) => (
                        <View
                            key={element.id}
                            style={{ ...styles.cell, flex: element.span }}
                        >
                            {element.type === 'label' && <StyledText align={element.span === numberCols ? 'center' : ''} color='secondary' fontWeight='bold'>{`${element.name}`}</StyledText>}
                            {element.type === 'input' && <StyledTextInput color='primary' placeholder='Sin datos' editable={false}>{values[element.id]}</StyledTextInput>}
                        </View>
                    ))}
                </View>
            ))}
        </View>
    )
}

export default TableResult
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    row: {
        flexDirection: 'row',
    },
    cell: {
        justifyContent: 'center',
        padding: 5,
    },

})