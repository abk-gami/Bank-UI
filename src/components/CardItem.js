import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const CardItem = () => {
  return (
    
    <TouchableOpacity style={styles.buttons}>
      <Text>CardItem</Text>
    </TouchableOpacity>
    
  )
}

export default CardItem

const styles = StyleSheet.create({
    buttons:{
        marginRight: 4
    }
})