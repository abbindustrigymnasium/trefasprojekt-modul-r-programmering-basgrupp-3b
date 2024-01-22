import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'

import Card from '../Components/card'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Page () {
    return (
        <SafeAreaView className="flex-1 items-center justify-end bg-all-black pb-6">
          <View className="h-full w-full flex-col items-center justify-center">
          <Card>
            </Card>
          </View>
           
            <Pressable
            className=" bg-spott-green w-5/6 max-w-[340px] py-5 flex rounded-2xl items-center justify-center">
  <Text className=" font-semibold text-2xl ">Done</Text>
  </Pressable>
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
