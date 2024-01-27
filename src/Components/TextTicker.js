import React from 'react';
import { View, Text } from 'react-native';


import Animated, { useAnimatedStyle, useSharedValue, withSpring, withDecay, runOnJS, withRepeat, withTiming, Easing, withSequence, withDelay} from 'react-native-reanimated';
import * as Crypto from 'expo-crypto'



/**
 * A component that displays a text ticker.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Array|string} props.textList - The list of texts to be displayed in the ticker. If it's a string, it will be split into an array of words.
 * @param {string} props.containerClassName - The CSS class name for the container element.
 * @param {string} props.textClassName - The CSS class name for the text element.
 * @returns {JSX.Element} The rendered component.
 */
export default function  TextTicker (
   { textList, 
    containerClassName, 
    textClassName
}){


    const textWidth = useSharedValue(100)
    const textBoxWidth = useSharedValue(100)

    const onTextLayout = e => {
      textWidth.value = e.nativeEvent.layout.width

    }

    const getTextBoxWidth = e => {
      textBoxWidth.value = e.nativeEvent.layout.width


    }
  
  
    const offset = useSharedValue(0);

    const animatedStyles = useAnimatedStyle(() => ({
      transform: Math.floor(textWidth.value)>Math.ceil(textBoxWidth.value) ?  [{ translateX:  offset.value }] : [{ translateX:  0 }],
    }));
  
    const tickerText = () => { 
        if (typeof textList === 'string') {
            textList = textList.split(' ')
            return textList.map((item, index) => {
                return (<Animated.Text key={Crypto.randomUUID()} className={textClassName} >{item}{index===(textList.length-1) ? '' : ' '}</Animated.Text>) 
            })
        }else {

            return textList.map((item, index) => {
                return (<Animated.Text key={Crypto.randomUUID()} className={textClassName} >{item}{index===(textList.length-1) ? '' : ', '}</Animated.Text>)
              })
            
        }
        

    }




    React.useEffect(() => {
        setTimeout( () => { 
          offset.value = 
          withRepeat(
  
            withSequence(
              withDelay(3000, withTiming(-((textWidth.value-textBoxWidth.value)), { duration: 30*(textWidth.value-textBoxWidth.value) ,       easing: Easing.linear,
              })),
              withDelay(3000, withTiming(0, { duration: 30*(textWidth.value-textBoxWidth.value) ,       easing: Easing.linear,
              }))
              
            )
            
  ,
                   -1,
            true
          )
       
        }  ,1000)
       
      }, [,]);

    return (
        <View className={containerClassName + " flex-row flex flex-nowrap justify-start items-center overflow-hidden"} onLayout={getTextBoxWidth}>
          <Animated.View  className=" flex-row flex flex-nowrap justify-start items-center" onLayout={onTextLayout} style={animatedStyles }>
              {tickerText()}
          </Animated.View>
        </View>
    );
};

