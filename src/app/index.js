import { Text, View } from 'react-native'
import { Link } from 'expo-router'
import { getStringData } from '../Storage/asyncStorageFunctions'

export default function Page () {
    console.log(getStringData('recs_endpoint'))
    return (
        <View className="flex-1 items-center justify-center bg-white">
            <View className="">
                <Text className="">INDEX</Text>
            </View>
            <Link replace href="/prefs"> <Text>Go to the 'Preferences' page</Text></Link>
        </View>
    )
}