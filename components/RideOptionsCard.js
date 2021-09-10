import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, FlatList } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements/dist/icons/Icon'
import { useNavigation } from '@react-navigation/native'

const RideOptionsCard = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView style = {tw `bg-white flex-grow`}>
            <View>
                <TouchableOpacity
                onPress={()=> navigation.navigate("NavigateCard")}
                style={tw `absolute top-3 left-5 z-50 p-3 rounded-full`}>
                    <Icon name = 'chevron-left' type='fontawesome'/>
                </TouchableOpacity>
                <Text style={tw `text-center py-5 text-xl`}>Select a Ride</Text>
            </View>

        </SafeAreaView>
    )
}

export default RideOptionsCard

const styles = StyleSheet.create({})
