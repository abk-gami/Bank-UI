import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { transactionData } from '../utils'

const Transactions = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Transactions</Text>


      <FlatList
      data={transactionData}
      keyExtractor={(item) => item.id}
      initialNumToRender={20}
      contentContainerStyle={{paddingBottom: 100}}
      removeClippedSubviews={false}
      height={400}
      renderItem={({item})=><TransactionCard {...item} />}
      />
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