import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { Link } from 'expo-router'
import LoginButton from '../Components/Login'

export default function Page () {
    return (
        <SafeAreaView className="flex-1 items-center justify-end bg-all-black">
            <View className="h-full flex-1 items-center justify-center w-5/6">
            <Text className="text-walter-white font-semibold text-[64px]">¡Welcome!</Text>
            <Text className=" text-groove-grey font-semibold text-center text-lg leading-6">This app requires usage of Spotify, please login with your account.</Text>

            </View>
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
