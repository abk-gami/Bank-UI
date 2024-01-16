import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from './src/screens/Header';
import Transactions from './src/screens/Transactions';
import Card from './src/screens/Card';
import { useFonts } from 'expo-font';

export default function App() {


  const [fontsLoaded, fontError] = useFonts({
    PoppinsSemiBold: require('./src/fonts/')
  })
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
 
    <View>
      <View style={styles.view}>

      <Header/>

      <Card/>

      <Transactions/>

      </View>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 6,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  view: {
    marginVertical: 6
  }
});
