import * as Yup from 'yup';
export const selectedFormula = (formulaIdentifier, values, resElements) => {
    let result = []

    switch (formulaIdentifier) {
        case 'con1Metal1':
            result = values ? con1meta1(values, resElements) : validationCon1meta1()
            break;
        case 'con2Metal2':
            result = values ? con2meta2(values, resElements) : validationCon2meta2()
            break;

        default://Hola soy carlos

            break;
    }
    return result
}
const con1meta1 = (values, resElements) => {
    const { con1Metal1f: f,
        con1Metal1metal: metal,
        con1Metal1conversion: conversion,
        con1Metal1m1: m1,
        con1Metal1m2: m2,
        con1Metal1m3: m3
    } = values

    const concentrated = (f * (m3 - m1)) / (m3 - m2);
    const tailings = f - concentrated;
    const recovery = (m2 * concentrated) / (m1 * f) * 100;
    const concentrationRatio = f / concentrated;

    const calculatedVariables = [
        `${metal} ${concentrated}`,
        tailings,
        `${metal} ${recovery}`,
        `${metal} ${concentrationRatio}`,
    ];
    const objectResult = parseResult(resElements, calculatedVariables)

    return objectResult
}
const validationCon1meta1 = () => {
    return Yup.object().shape({
        con1Metal1f: Yup.number().required('Valor obligatorio').typeError('Debe ser un número'),
        con1Metal1conversion: Yup.string().required('El valor es obligatorio'),
        con1Metal1metal: Yup.string().required('El valor es obligatorio'),
        con1Metal1m1: Yup.number().required('Valor obligatorio').typeError('Debe ser un número'),
        con1Metal1m2: Yup.number().required('Valor obligatorio').typeError('Debe ser un número'),
        con1Metal1m3: Yup.number().required('Valor obligatorio').typeError('Debe ser un número'),
    })

}
const con2meta2 = (values, resElements) => {
    const {
        con2Metal2f: f,
        con2Metal2conversionmetal1: conversionMetal1,
        con2Metal2conversionmetal2: conversionMetal2,
        con2Metal2metal1: metal1,
        con2Metal2metal2: metal2,
        con2Metal2m1: m1,
        con2Metal2n1: n1,
        con2Metal2m2: m2,
        con2Metal2n2: n2,
        con2Metal2m3: m3,
        con2Metal2n3: n3,
        con2Metal2m4: m4,
        con2Metal2n4: n4,
    } = values



    const concentratedMetal1 = f * ((m3 - m1) * (n4 - n3) - (m4 - m3) * (n3 - n1)) / ((m3 - m2) * (n4 - n3) - (m4 - m3) * (n3 - n2));
    const concentratedMetal2 = f * ((m2 - m1) * (n4 - n2) - (m4 - m2) * (n2 - n1)) / ((m2 - m3) * (n4 - n2) - (m4 - m2) * (n2 - n3));
    const tailings = f - concentratedMetal1 - concentratedMetal2;
    const recoveryMetal1 = (concentratedMetal1 * m2) / (m1 * f) * 100;
    const recoveryMetal2 = (concentratedMetal2 * n3) / (n1 * f) * 100;
    const ratioMetal1 = f / concentratedMetal1;
    const ratioMetal2 = f / concentratedMetal2;


    const calculatedVariables = [
        `${metal1} ${concentratedMetal1}`,
        `${metal2} ${concentratedMetal2}`,
        tailings,
        `${metal1} ${recoveryMetal1}`,
        `${metal2} ${recoveryMetal2}`,
        `${metal1} ${ratioMetal1}`,
        `${metal2} ${ratioMetal2}`,
    ];

    const objectResult = parseResult(resElements, calculatedVariables)


    return objectResult


}


const validationCon2meta2 = () => {
    return Yup.object().shape({
        con2Metal2f: Yup.number().required('Valor obligatorio').typeError('Debe ser un número'),
        con2Metal2conversionmetal1: Yup.string().required('El valor es obligatorio'),
        con2Metal2conversionmetal2: Yup.string().required('El valor es obligatorio'),
        con2Metal2metal1: Yup.string().required('El valor es obligatorio'),
        con2Metal2metal2: Yup.string().required('El valor es obligatorio'),
        con2Metal2m1: Yup.number().required('Valor obligatorio').typeError('Debe ser un número'),
        con2Metal2n1: Yup.number().required('Valor obligatorio').typeError('Debe ser un número'),
        con2Metal2m2: Yup.number().required('Valor obligatorio').typeError('Debe ser un número'),
        con2Metal2n2: Yup.number().required('Valor obligatorio').typeError('Debe ser un número'),
        con2Metal2m3: Yup.number().required('Valor obligatorio').typeError('Debe ser un número'),
        con2Metal2n3: Yup.number().required('Valor obligatorio').typeError('Debe ser un número'),
        con2Metal2m4: Yup.number().required('Valor obligatorio').typeError('Debe ser un número'),
        con2Metal2n4: Yup.number().required('Valor obligatorio').typeError('Debe ser un número'),
    })

}


const parseResult = (resElements, calculatedVariables = []) => {

    let values = resElements.filter(item => item.type !== "label")
    let propertyNames = values.map(el => (el.id))

    const result = propertyNames.reduce((obj, item, index) => {
        obj[item] = calculatedVariables[index];
        return obj;
    }, {});


    // let result = { ...initialValues };
    // const propertyNames = Object.keys(result);
    // for (let i = 0; i < calculatedVariables.length; i++) {
    //     const valorcambiar = propertyNames[i];
    //     result[valorcambiar] = calculatedVariables[i];
    // }

    return result
}