import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.container}>
      <Text >My Todos</Text>
      <View>
        <Image
        source={require('../../assets/images/avatar.png')}
        style={styles.image}
        // resizeMode='contain'
        />
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    flexDirection: 'row',
  },
  image: {
    width: 45,
    height: 45,
    borderWidth: 1.5,
    borderRadius: 50,
    borderColor: 'white'
  }
})