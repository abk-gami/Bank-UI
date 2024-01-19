import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Card = () => {
  return (
    <View style={styles.container}>
      <Text
      style={styles.text}
      >Card</Text>

      <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{margin:5}}
      >

      </ScrollView>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    marginBottom: 4,
  },
  text: {
    fontFamily: 'PoppinsBold',
    fontSize: 34,
    marginBottom: 4,
  }
})