import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react';
import {BellIcon} from 'react-native-heroicons/outline'
      
const Header = () => {
  return (
    <View style={styles.container}>
      {/* <Text >My Todos</Text> */}
      <View>
        <Image
        source={require('../../assets/images/avatar.png')}
        style={styles.image}
        // resizeMode='contain'
        />
      </View>
      <View>
        <BellIcon size={30} strokeWidth={2} color={'black'}/>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
  },
  image: {
    width: 45,
    height: 45,
    borderWidth: 1.5,
    borderRadius: 50,
    borderColor: 'white'
  }
})
