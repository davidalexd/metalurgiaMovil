import React from 'react'
import { Text, StyleSheet } from 'react-native'
import theme from '../theme.js'
const styles = StyleSheet.create({
    text: {
        fontSize: theme.fontSizes.body,
        color: theme.colors.textPrimary,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.normal,
    },
    spacingBottomNormal:{
        marginBottom:theme.spacings.normal,
    },
    spacingTopNormal:{
        marginTop:theme.spacings.normal,
    },

    bold: {
        fontWeight: theme.fontWeights.bold,
    },
    subheading: {
        fontSize: theme.fontSizes.Subheading
    },
    small:{
        fontSize: theme.fontSizes.small
    },
    colorPrimary: {
        color: theme.colors.textPrimary,
    },
    colorSecondary: {
        color: theme.colors.textSecondary,
    },
    textAlignCenter:{
        textAlign:'center'
    }
})

export default function StyledText({ align,children, color, fontSize,spacingBottom,spacingTop,fontWeight, style, ...restOfProps }) {
    const textStyles = [
        styles.text,
        color === 'primary' && styles.colorPrimary,
        color === 'secondary' && styles.colorSecondary,
        fontSize === 'subheading' && styles.subheading,
        fontSize === 'small' && styles.small,
        fontWeight === 'bold' && styles.bold,
        align === 'center' && styles.textAlignCenter,
        spacingBottom==='normal' && styles.spacingBottomNormal,
        spacingTop==='normal' && styles.spacingTopNormal,
        style

    ]

    return (<Text style={textStyles} {...restOfProps}>{children}</Text>)
}