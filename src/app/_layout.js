import { Stack, Slot } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { SessionProvider } from '../Context/authContext'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export default function Root () {
    return (
        <GestureHandlerRootView style={{flex: 1}}>
        <SessionProvider>
            <Slot />
    </SessionProvider>
    </GestureHandlerRootView>

    )
}