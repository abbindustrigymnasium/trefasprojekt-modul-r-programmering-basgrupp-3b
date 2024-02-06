import { Stack } from 'expo-router'

export default function Layout () {
    return (
        <Stack screenOptions={{
            headerStyle: {
                backgroundColor: "#1fc654"
            }
        }}> 
        <Stack.Screen
        name="info"
        options={{
          // Set the presentation mode to modal for our modal route.
          presentation: 'modal',
        }}
      />
        </Stack>
    )
}