import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'
import * as React from 'react'
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

import Card from '../Components/card'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Gesture, GestureDetector, GestureHandlerRootView } from "react-native-gesture-handler";


export default function Page () {

  


const [dimensions, setDimensions] = React.useState({height: 200, width: 200})

const onLayout=(event)=> {
  const {x, y, height, width} = event.nativeEvent.layout;
  setDimensions({height: height, width: width})

  
}

    return (
      
        <GestureHandlerRootView className="flex-1 items-center justify-end bg-all-black pb-6">
          <View className="h-full w-full flex-col items-center justify-center">
            <Card 
            dimensions={dimensions}
            
            >
            </Card>
          </View>
            <Pressable
            className=" bg-spott-green w-5/6 max-w-[340px] py-5 flex rounded-2xl items-center justify-center">
  <Text className=" font-semibold text-2xl ">Done</Text>
  </Pressable>
        </GestureHandlerRootView>
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
