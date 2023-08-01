import { Picker } from '@react-native-picker/picker'
import React from 'react'
import { StyleSheet, View } from 'react-native'
const styles = StyleSheet.create({
    picker: {
        backgroundColor: '#f0f0f0',
    },

})

export default function StyledPicker({ children, style, ...restOfProps }) {
    const textStyles = [
        styles.picker,
        style

    ]

    return (
        <Picker
            style={textStyles}
            {...restOfProps}
        >{children}</Picker>)
}


