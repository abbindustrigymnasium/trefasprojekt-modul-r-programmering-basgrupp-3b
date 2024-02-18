

import { Redirect, Stack, router  } from 'expo-router'
import { Text } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { useSession } from '../../Context/authContext'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export default function AppLayout () {
    const {session, isLoading} = useSession()
    
    if(isLoading) {
        return <Text>Loading...</Text>
    }

    if(!session) {
        return <Redirect href="/login"/>
    }

    return (
        <GestureHandlerRootView style={{flex: 1}}>
        <StatusBar style="light" />
        <Stack screenOptions={{
            headerStyle: {
                backgroundColor: "#101010"
            }
        }} >

            

            </Stack>

            </GestureHandlerRootView>

    )
}