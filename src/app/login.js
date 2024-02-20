/**
 * Renders the login page
 * @returns {JSX.Element} The rendered login page.
 */
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { Link, Stack } from 'expo-router'
import LoginButton from '../Components/Login'
import { StatusBar } from 'expo-status-bar'

export default function Page () {
    return (
        <SafeAreaView className="flex-1 items-center justify-end bg-all-black">
            <Stack.Screen options={{header: () => null}} />
            <StatusBar style="light" />

            <View className="h-full flex-1 items-center justify-center w-5/6">
            <Text className="text-walter-white font-semibold text-[64px]">¡Welcome!</Text>
            <Text className=" text-groove-grey font-semibold text-center text-lg leading-6">This app requires usage of Spotify, please login with your account.</Text>

            </View>
            {/* The component that is actually responsible for the Login functionality is the LoginButton */}
             <LoginButton className=""></LoginButton>
        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
