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
    fontSize: 24,
    fontFamily: 'PoppinsBold',
  },
  container: {
    padding: 10
  }
})