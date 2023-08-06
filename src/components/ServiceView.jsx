import { useNavigation } from '@react-navigation/native'
import React, { useLayoutEffect } from 'react'
import { Text,View } from 'react-native'
import Logo from './Logo'

const ServiceView = () => {
    const navigation = useNavigation()
    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: 'Servicios',
            headerLeft: () => (
              <Logo/>
            ),
        })
    
    }, [])
    return (
        <View>
            <Text>Servicios</Text>
        </View>
    )
}

export default ServiceView