import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import PlaylistCard from './src/Components/playlistCard';

export default function App() {
  return (
    <View style={styles.container}>
      <PlaylistCard />
      <Text>Open up App.js to start working on your app!k</Text>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    },
});
