import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

export default function Layout () {
    return (
        <>
        <StatusBar style="light" />
        <Stack screenOptions={{
            headerStyle: {
                backgroundColor: "#101010"
            }
        }} >

            <Stack.Screen name="login"
            options={{
                header: () => null
            }}
            />

            </Stack>

            </>

    )
}