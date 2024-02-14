

import { Redirect, Stack, router  } from 'expo-router'
import { Text } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { useSession } from '../../Context/authContext'

export default function AppLayout () {
    const {session, isLoading} = useSession()
    
    if(isLoading) {
        return <Text>Loading...</Text>
    }

    if(!session) {
        return <Redirect href="/login"/>
    }

    return (
        <>
        <StatusBar style="light" />
        <Stack screenOptions={{
            headerStyle: {
                backgroundColor: "#101010"
            }
        }} >

            

            </Stack>

            </>

    )
}