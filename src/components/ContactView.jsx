import { useNavigation } from '@react-navigation/native'
import React, { useLayoutEffect } from 'react'
import { Text, View } from 'react-native'
import Logo from './Logo'

const ContactView = () => {

    const navigation = useNavigation()
    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: 'Contacto',
            headerLeft: () => (
                <Logo />
            ),
        })
    })
    return (
        <View>
            <Text>Contacto</Text>
        </View>
    )
}

export default ContactView