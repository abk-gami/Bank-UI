import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'

const { width, height } = Dimensions.get('window')

const CardItem = () => {
  return (
    
    <TouchableOpacity style={styles.buttons}>
        <View style={styles.view}>

      <Text>CardItems</Text>
        </View>
    </TouchableOpacity>
    
  )
}

export default CardItem

const styles = StyleSheet.create({
    buttons:{
        marginRight: 4
    },
    view: {
        paddingVertical: 8,
        paddingHorizontal: 4,
        justifyContent: 'space-between',
        width: width * 0.45,
        height: height * 0.3
    }
})