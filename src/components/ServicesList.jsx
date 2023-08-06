import React from 'react'
import { View,StyleSheet, Image, TouchableWithoutFeedback} from 'react-native'
import StyledText from './StyledText.jsx'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
const ServicesList = ({services}) => {
    const { navigate } = useNavigation();
    const handlerViewPress = (module) => {
        navigate('InfoCard', { module })

    }

    return (
        <View style={{ flex: 1, paddingHorizontal: 20 }}>
            {services.map((service) => <TouchableWithoutFeedback key={service.id} onPress={() => handlerViewPress(service)}>
                <View style={styles.container}>
                    <View style={styles.imageContent}>
                        <Image style={styles.image} source={service.image_url} />
                    </View>
                    <View style={styles.textContent}>
                        <View style={styles.column}>
                            <View style={styles.row}>
                                <MaterialIcons style={styles.spacingRight} name="science" size={20} color="black" />
                                <AntDesign style={styles.spacingRight} name="calculator" size={20} color="black" />
                                <MaterialIcons style={styles.spacingRight} name="calculate" size={20} color="black" />
                            </View>
                            <StyledText color='primary' fontSize='heading' fontWeight='bold'>{service.topic}</StyledText>
                        </View>
                        <View style={styles.row}>
                            <AntDesign name="pushpino" size={20} color="black" />
                            <StyledText style={styles.spacingLeft} color='secondary'>
                                {service.subtopic}
                            </StyledText>
                        </View>
                    </View>

                </View>
            </TouchableWithoutFeedback>)}
        </View>
    )
}






export default ServicesList

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', marginBottom: 10, borderRadius: 20, backgroundColor: '#f2f2f2f2', paddingRight: 10 
    },

    imageContent:{
        paddingRight:10,},
    image: {
        width: 130,
        height: 130,
        borderRadius: 20
    },

    textContent: {
        flex: 1,
        paddingVertical:10,

    },
    column: {
        flexDirection: 'column'
    },
    row: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',

    },
    spacingLeft:{
        marginLeft:5,
    },
    spacingRight: {
        marginRight: 5,
    }


})