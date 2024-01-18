import { Text, View } from 'react-native'
import { Link } from 'expo-router'
import LoginButton from '../Components/Login'

export default function Page () {
    return (
        <View className="flex-1 items-center justify-center bg-all-black">
            <View className="">
                <Text className="">INDEX</Text>
            </View>
            <Link href="/login"> <Text>Go to the 'Login' page</Text></Link>
        </View>
    )
}

