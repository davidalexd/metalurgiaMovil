import React from "react"
import { StyleSheet, TextInput } from "react-native"
import theme from "../theme"

const styles = StyleSheet.create({
    textInput: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#999',
        padding:10,
        color: theme.colors.textPrimary,
    },
    colorPrimary: {
        color: theme.colors.textPrimary,
    },
    colorSecondary: {
        color: theme.colors.textSecondary,
    },
})

const StyledTextInput = ({ color,style, ...restOfProps }) => {

    const textStyles = [
        styles.textInput,
        color === 'primary' && styles.colorPrimary,
        color === 'secondary' && styles.colorSecondary,
    ]
    return <TextInput style={textStyles}{...restOfProps} />

}

export default StyledTextInput