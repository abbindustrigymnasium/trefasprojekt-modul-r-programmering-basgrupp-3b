

import { Redirect, Stack, router  } from 'expo-router'
import { Text, View, Pressable } from 'react-native'
import {Image} from 'expo-image'
import { StatusBar } from 'expo-status-bar'
import { useSession } from '../../Context/authContext'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function AppLayout () {
    const {session, isLoading} = useSession()
    const insets = useSafeAreaInsets()

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
            header: (props) => <View style={{paddingTop: insets.top}} className="bg-all-black">

            </View>
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
           <Stack.Screen
      name="recs"
      options={
        {
          header:(props) => {
            return (
              <View className="bg-all-black flex flex-row py-3 px-3 justify-between w-full" style={{paddingTop: insets.top}}>
                <Pressable
                className="flex flex-row justify-center items-center"
                onPress={() => props.navigation.goBack()}
                >
                <Image loading="lazy"
                className="aspect-square object-contain object-center w-6 overflow-hidden self-center shrink-0 max-w-full"
                source={require('../../../assets/icons/arrow_back.svg')}/>
                </Pressable>
                 

                <Image loading="lazy" 
                contentFit='contain'
                className="aspect-square object-center w-12 overflow-hidden self-center shrink-0 max-w-full"
                source={require('../../../assets/icons/logo.png')}/>
              </View>
            )
          },
          title: '',
  
      }}
      ></Stack.Screen>
            

            </Stack>

            </GestureHandlerRootView>

    )
}