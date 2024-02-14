import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import applyGlobalPolyfills from "./applyGlobalPolyfill" 


import Login from './src/Components/Login';


export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>Open up App.js to start working on your app!</Text>
      <Login/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
