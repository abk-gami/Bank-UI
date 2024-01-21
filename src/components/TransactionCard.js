import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'

    const {width, height} = Dimensions.get('window')
export default function TransactionCard(
    name,
    type,
    amount,
    date,
    imageSource,
) {
  return (
    <View style={styles.container}>
      <Text>TransactionCard</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: '100%',
        maxWidth: width,
        height: height*0.12,

    }
})