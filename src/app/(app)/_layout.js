

import { Redirect, Stack, router  } from 'expo-router'
import { Text, View } from 'react-native'
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
            <Stack.Screen
            name="info"
            options={{	       
              header: (props) => {
                return (
                  <View className="h-4 bg-all-black flex flex-row justify-center items-end">
                    <View className="w-14 h-1 bg-groove-grey rounded-full"></View>
    
                  </View>
                )
              },
              // Set the presentation mode to modal for our modal route.	          // Set the presentation mode to modal for our modal route.
              presentation: 'modal',	        
            }}	        
            />

            

            </Stack>

            </GestureHandlerRootView>

    )
}