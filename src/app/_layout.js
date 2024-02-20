import { Stack, Slot } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { SessionProvider } from '../Context/authContext'
import { GestureHandlerRootView } from 'react-native-gesture-handler'



/**
 * Root component of the application. This component is the entry point of the application.
 * @returns {JSX.Element} The rendered component.
 */
export default function Root () {
    return (
        <GestureHandlerRootView style={{flex: 1}}>
        <SessionProvider>
            <Slot />
    </SessionProvider>
    </GestureHandlerRootView>

    )
}