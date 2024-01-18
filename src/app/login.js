import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { Link } from 'expo-router'
import LoginButton from '../Components/Login'

export default function Page () {
    return (
        <SafeAreaView className="flex-1 items-center justify-end bg-all-black pb-6">
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
