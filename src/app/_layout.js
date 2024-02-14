import { Stack, Slot } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { SessionProvider } from '../Context/authContext'

export default function Root () {
    return (
        <SessionProvider>
            <Slot />
    </SessionProvider>
    )
}