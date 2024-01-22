import * as React from "react";
import {
  FlatList,
  ScrollView,
  View,
  StyleSheet,
  Image as ReactImage,
  Text,
} from "react-native";
import { Image } from "expo-image";

import {useWindowDimensions} from 'react-native';




import Animated, { useAnimatedStyle, useSharedValue, withSpring, withDecay } from 'react-native-reanimated';
import { Gesture, GestureDetector, GestureHandlerRootView } from "react-native-gesture-handler";


export default function Card({}) {
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);
    const rotation = useSharedValue("0deg")
    const {height, width} = useWindowDimensions();



    
const [size, setSize] = React.useState({height: 200, width: 200})

const onLayout=(event)=> {
  const {x, y, height, width} = event.nativeEvent.layout;
  setSize({height: height, width: width})

  
}

    const containerStyle = useAnimatedStyle(() => {
        return {
          transform: [
            {
              translateX:  translateX.value
            },
            {
              translateY: translateY.value
            },
            {
                rotate: rotation.value
            }
          ],
        };
      });
      

    const drag = Gesture.Pan()
    .onChange((event) => {
      translateX.value = event.translationX
      rotation.value = (((translateX.value/(width/2))*6+ "deg"))
      translateY.value = Math.abs((translateX.value/(width/2))*(height/2))*0.2
      console.log(translateX.value)
      console.log(width)
    

    }).onFinalize((event) => {
        
        if(Math.abs(translateX.value)<width*0.7) {
            translateX.value = withSpring(0)
            translateY.value = withSpring(0)
            rotation.value = withSpring("0deg")
        }else {
            if(event.velocityX<0.1) {
                translateX.value = withDecay({
                    velocity: event.velocityX,
    
                   
                  })
                translateY.value = withDecay({
                    velocity: event.velocityY
    
                })
            }else {
                translateX.value = width
            }
            
            
        }

    });


  return (
    
    <GestureDetector gesture={drag}>
    <Animated.View className={`justify-center bg-less-black flex w-5/6 max-w-[340px] flex-col px-5  py-5`} style={[{gap: "20px"}, containerStyle]}>
      <Image
        loading="lazy"
        source={require("../../assets/lemonade.png")}
        className="aspect-square object-contain object-center w-full overflow-hidden"
      />
      <View className="justify-between flex items-start">
        <View className="flex flex-col items-stretch" style={{rowGap: "10px"}}>
            <Text className=" text-walter-white text-2xl font-semibold whitespace-nowrap">Hold Up</Text>
            <Text className=" text-groove-grey text-sm font-semibold whitespace-nowrap">Beyoncé</Text>
        </View>
      </View>
      <View className="flex flex-row items-center justify-between gap-5">
        <Image
          loading="lazy"
          source={require("../../assets/icons/open_in_new.svg")}
          className="aspect-square object-contain object-center w-8 overflow-hidden self-center shrink-0 max-w-full"
        />
          <Image
            loading="lazy"
            source={require("../../assets/icons/playbutton.svg")}
            className="aspect-square object-contain object-center w-14 overflow-hidden"
          />
        <Image
          loading="lazy"
          source={require("../../assets/icons/info.svg")}
          className="aspect-square object-contain object-center w-8 overflow-hidden self-center shrink-0 max-w-full"
        />
      </View>
    </Animated.View>
    </GestureDetector>
  );
}



