import { Stack } from 'expo-router'

export default function Layout () {
    return (
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
    )
}