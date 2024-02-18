import { Text, View } from 'react-native'
import { Link } from 'expo-router'

export default function Page () {
    return (
        <View className="flex-1 items-center justify-center bg-white">
            <View className="">
                <Text className="">INDEX</Text>
            </View>
            <Link href="/prefs"> <Text>Go to the 'Preferences' page</Text></Link>
        </View>
    )
}