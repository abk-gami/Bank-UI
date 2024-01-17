import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View>
      <Text style={styles.try}>Header</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  try: {
    fontFamily: 'PoppinsBold'
  }
})