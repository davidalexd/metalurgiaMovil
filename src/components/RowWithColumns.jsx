import React, { useState } from 'react'
import { Button, StyleSheet, TouchableOpacity, View } from 'react-native'
import StyledText from './StyledText'
import { Picker } from '@react-native-picker/picker'
import { Formik, useField } from 'formik'
import StyledTextInput from './StyledTextInput'

const initialValues = {
    "con1-metal1-ele-2": "",
    "con1-metal1-ele-4": "",
    "con1-metal1-ele-5": "",
    "con1-metal1-ele-7": "",
    "con1-metal1-ele-9": "",
    "con1-metal1-ele-11": "",
    "con2-metal2-ele-5": "",
    "con2-metal2-ele-6": "",
    "con2-metal2-ele-8": "",
    "con2-metal2-ele-9": "",
    "con2-metal2-ele-11": "",
    "con2-metal2-ele-12": "",
    "con2-metal2-ele-14": "",
    "con2-metal2-ele-15": "",
}
const RowWithColumns = ({ rows }) => {

    const FormikInputValue = ({ name, ...props }) => {
        const [field, meta, helpers] = useField(name)
        return <StyledTextInput
            value={field.value}
            onChangeText={value => helpers.setValue(value)}
            {...props}
        />
    }


    const FormikSelectValue = ({ name, items, ...props }) => {
        const [field, meta, helpers] = useField(name)
        return <Picker
            selectedValue={field.value}
            onValueChange={value => helpers.setValue(value)}
            {...props}
        >
            {items.map((value, index) => <Picker.Item key={index} label={value} value={value} />)}
        </Picker>
    }

    const validate = values => {
        const errors = {}
        Object.keys(values).forEach((fieldName) => {
            if (!values[fieldName]) {
                errors[fieldName] = 'Este campo es requerido';
            }
        });
        console.log(errors)
    }
    return (
        <Formik validate={validate} initialValues={initialValues} onSubmit={values => console.log(values)}>
            {({ handleSubmit }) => {
                return <View style={styles.container}>
                    {rows.map((row, rowIndex) => (
                        <View key={rowIndex} style={styles.row}>
                            {row.map((element) => (
                                <View
                                    key={element.id}
                                    style={{ ...styles.cell, flex: element.span }}
                                >
                                    {element.type === 'label' && <StyledText color='secondary' fontWeight='bold'>{element.name}</StyledText>}
                                    {element.type === 'select' && <FormikSelectValue
                                        name={element.id}
                                        items={element.values}
                                    />}
                                    {element.type === 'input' && <FormikInputValue
                                        name={element.id}
                                        placeholder='Digitar'
                                    />}
                                </View>
                            ))}
                        </View>
                    ))}
                    <TouchableOpacity onPress={handleSubmit}>
                        <View style={styles.button}>
                            <StyledText align='center' fontSize='subheading' fontWeight='bold' color='secondary'>Calculate</StyledText>
                        </View>
                    </TouchableOpacity>

                </View>
            }}
        </Formik>
    )
}

export default RowWithColumns



{/* <View style={styles.container}>
                {rows.map((row, rowIndex) => (
                    <View key={rowIndex} style={styles.row}>
                        {row.map((element) => (
                            <View
                                key={element.id}
                                style={{ ...styles.cell, flex: element.span }}
                            >
                                {element.type === 'label' && <StyledText color='secondary' fontWeight='bold'>{element.name}</StyledText>}
                                {element.type === 'select' && <Picker
                                    selectedValue={form[element.id]}
                                    onValueChange={(text) => handleChangeText(element.id, text)}
                                >
                                    {element.values.map((value, index) => <Picker.Item key={index} label={value} value={value} />)}
                                </Picker>}
                                {element.type === 'input' && <TextInput
                                    onChangeText={(text) => handleChangeText(element.id, text)}
                                    value={form[element.id]}
                                />}
                            </View>
                        ))}
                    </View>
                ))}
            </View>  */}



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
    button: {
        justifyContent: 'center', backgroundColor: '#D3D0CB', padding: 10, borderRadius: 10,
        marginVertical: 10,
    },

})


