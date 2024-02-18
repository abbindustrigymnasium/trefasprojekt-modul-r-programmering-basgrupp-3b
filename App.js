import { StyleSheet, Text, View } from 'react-native'
import { Gesture } from 'react-native-gesture-handler'

export default function App () {
    return (
        <GestureHandlerRootView>
        </GestureHandlerRootView>
    )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    },
})
