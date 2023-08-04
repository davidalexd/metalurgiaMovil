import React, { useState } from 'react'
import * as Yup from 'yup';
import { Button, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import StyledText from './StyledText'
import { Picker } from '@react-native-picker/picker'
import { Formik, useField } from 'formik'
import StyledTextInput from './StyledTextInput'
import { selectedFormula } from '../helpers/helperFolmula'
import TableResult from './TableResult'
import StyledPicker from './StyledPicker'



const RowWithColumns = ({ rowsElements, rowsElementsRes, initialValues, initialValuesRes, formulaIdentifier, description, numberCols, resElements }) => {
    const [resultValue, setResultValue] = useState({})
    const FormikInputValue = ({ name, ...props }) => {
        const [field, meta, helpers] = useField(name)
        return <>
            {meta.error && <StyledText style={styles.error}>{meta.error}</StyledText>}
            <StyledTextInput
                value={field.value}
                onChangeText={value => helpers.setValue(value)}
                {...props}
            />
        </>
    }


    const FormikSelectValue = ({ name, label, items, ...props }) => {
        const [field, meta, helpers] = useField(name)
        return <>
            {meta.error ? <StyledText style={styles.error}>{meta.error}</StyledText> : <StyledText fontSize='small' color='secondary'>{label}</StyledText>}
            <StyledPicker
                selectedValue={field.value}
                onValueChange={value => helpers.setValue(value)}
                {...props}
            >
                <Picker.Item label='Valor' enabled={false} value='' />
                {items.map((value, index) => <Picker.Item key={index} label={value} value={value} />)}
            </StyledPicker>
        </>
    }


    const handlerSelectedFormula = (values) => {
        const result = selectedFormula(formulaIdentifier, values, resElements)

        setResultValue({ ...resultValue, ...result })
    }


    const formulaValidationSchema = () => {
        const schemaValidation = selectedFormula(formulaIdentifier)
        return schemaValidation
    }

    const resetInputValues = (resetForm) => {
        resetForm(initialValues);
        setResultValue(initialValuesRes)
    }
    return (
        <Formik validationSchema={Yup.lazy(formulaValidationSchema)} initialValues={initialValues} onSubmit={values => handlerSelectedFormula(values)}>

            {({ handleSubmit, resetForm }) => {
                return <View style={styles.container}>
                    <ScrollView style={styles.contentScroll}>
                        <StyledText spacingTop='normal' fontSize='subheading' fontWeight='bold'>Description</StyledText>
                        <StyledText color='secondary' spacingBottom='normal'>{description}</StyledText>
                        <StyledText fontSize='subheading' fontWeight='bold'>Variables</StyledText>
                        <View style={styles.content}>
                            {rowsElements.map((row, rowIndex) => (
                                <View key={rowIndex} style={styles.row}>
                                    {row.map((element) => (
                                        <View
                                            key={element.id}
                                            style={{ ...styles.cell, flex: element.span }}
                                        >
                                            {element.type === 'label' && <StyledText color='secondary' fontWeight='bold'>{`${element.name}`}</StyledText>}
                                            {element.type === 'select' && <FormikSelectValue
                                                name={element.id}
                                                label={element.name}
                                                items={element.values}
                                            />}
                                            {element.type === 'input' && <FormikInputValue
                                                name={element.id}
                                                placeholder='Digitar'
                                                keyboardType="numeric"
                                            />}
                                        </View>
                                    ))}
                                </View>
                            ))}
                        </View>
                        <StyledText fontSize='subheading' fontWeight='bold' spacingBottom='normal'>Resultados</StyledText>
                        <View style={styles.content}>
                            <TableResult
                                rows={rowsElementsRes}
                                initialValues={initialValuesRes}
                                setValues={setResultValue}
                                values={resultValue}
                                numberCols={numberCols}
                            />
                        </View>
                    </ScrollView>
                    <View style={styles.buttonContent}>
                        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                            <StyledText align='center' fontSize='subheading' fontWeight='bold' color='secondary'>Calcular</StyledText>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => resetInputValues(resetForm)} style={styles.button}>
                            <StyledText align='center' fontSize='subheading' fontWeight='bold' color='secondary'>Limpiar</StyledText>
                        </TouchableOpacity>
                    </View>
                </View>
            }}
        </Formik>
    )
}

export default RowWithColumns




const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentScroll: {
        paddingHorizontal: 20
    },
    content: {
        marginBottom: 10,
    },
    row: {
        flexDirection: 'row',
    },
    cell: {
        justifyContent: 'center',
        padding: 5,
    },
    buttonContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        borderWidth: 1,
        borderTopColor: '#999'
    },
    button: {
        flex: 0.45, justifyContent: 'center', backgroundColor: '#D3D0CB', padding: 10, borderRadius: 10,
    },
    error: {
        color: 'red',
        fontSize: 10,
    }

})


