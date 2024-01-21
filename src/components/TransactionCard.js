import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native'
import React from 'react'

    const {width, height} = Dimensions.get('window')
export default function TransactionCard({
    name,
    type,
    amount,
    date,
    imageSource,
}) {
  return (
    <TouchableOpacity>

    <View style={styles.container}>

        <View style={{backgroundColor: '#ffffff'}}>
        <Image
        source={imageSource}
        // style={{ width: "100%", aspectRatio: 1/1 }}
        style={{width: 65, height: 65, aspectRatio: 1/1}}
        resizeMode='contain'
        />
        </View>

    </View>
        </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: '100%',
        maxWidth: width,
        height: height*0.12,
        flexDirection: 'row',
        borderRadius: 20,
        alignItems: 'center',
        paddingHorizontal: 17
    }
})