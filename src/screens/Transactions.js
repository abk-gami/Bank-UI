import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Transactions = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Transactions</Text>
    </View>
  )
}
 
export default Transactions

const styles = StyleSheet.create({
  header: {
    fontSize: 34,
    fontFamily: 'PoppinsBold',
    color: 'white'
  },
  container: {
    padding: 10
  }
})