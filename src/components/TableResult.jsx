import React from 'react'
import { StyleSheet, View } from 'react-native'
import StyledText from './StyledText'
const TableResult = ({ resultValue }) => {
    return (
        <View style={styles.container}>
            {resultValue.map((item, index) => <View key={index} style={styles.row}>
                <StyledText style={styles.cell} color='secondary' fontWeight='bold'>{item.title}</StyledText>
                <StyledText style={styles.cell}>{item.value}</StyledText>
            </View>)}
        </View>
    )
}

export default TableResult
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    row: {
        flexDirection: 'row'
    },
    cell: {
        padding: 5,
        flex: 1
    }

})