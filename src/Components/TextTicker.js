import React from 'react';
import { View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withTiming, Easing, withSequence, withDelay } from 'react-native-reanimated';

// Used to generate a unique key for each text element
import * as Crypto from 'expo-crypto'



/**
 * A component that displays a text ticker.
 *
 * @component
 * @param {Array|string} textList - The list of texts to be displayed in the ticker. If it's a string, it will be split into an array of words.
 * @param {string} containerClassName - The tailwind CSS class name for the container element.
 * @param {string} textClassName - The tailwind CSS class name for the text element.
 * @returns {JSX.Element} The rendered component.
 */
export default function TextTicker(
  { textList,
    containerClassName,
    textClassName
  }) {

  // Shared values for the width of the text and the width of the text box. Set by the function onTextLayout and getTextBoxWidth respectively.
  const textWidth = useSharedValue(100)
  const textBoxWidth = useSharedValue(100)

  const onTextLayout = e => {
    textWidth.value = e.nativeEvent.layout.width

  }
  const getTextBoxWidth = e => {
    textBoxWidth.value = e.nativeEvent.layout.width


  }

  // Shared value for the offset of the text. This is used to animate the text.
  const offset = useSharedValue(0);


  // Animate the text if it's longer than the text box
  const animatedStyles = useAnimatedStyle(() => ({
    transform: Math.floor(textWidth.value) > Math.ceil(textBoxWidth.value) ? [{ translateX: offset.value }] : [{ translateX: 0 }],
  }));

  // Function to render the text
  const tickerText = () => {
    if (typeof textList === 'string') {
      textList = textList.split(' ')
      return textList.map((item, index) => {
        return (<Animated.Text key={Crypto.randomUUID()} className={textClassName} >{item}{index === (textList.length - 1) ? '' : ' '}</Animated.Text>)
      })
    } else {

      return textList.map((item, index) => {
        return (<Animated.Text key={Crypto.randomUUID()} className={textClassName} >{item}{index === (textList.length - 1) ? '' : ', '}</Animated.Text>)
      })

    }


  }



  // Animate the text after 1 second
  React.useEffect(() => {
    setTimeout(() => {
      offset.value =
        withRepeat(

          withSequence(
            withDelay(3000, withTiming(-((textWidth.value - textBoxWidth.value)), {
              duration: 30 * (textWidth.value - textBoxWidth.value), easing: Easing.linear,
            })),
            withDelay(3000, withTiming(0, {
              duration: 30 * (textWidth.value - textBoxWidth.value), easing: Easing.linear,
            }))

          )

          ,
          -1,
          true
        )

    }, 1000)

  }, [,]);

  // Render the component
  return (
    <View className={containerClassName + " flex-row flex flex-nowrap justify-start items-center overflow-hidden"} onLayout={getTextBoxWidth}>
      <Animated.View className=" flex-row flex flex-nowrap justify-start items-center" onLayout={onTextLayout} style={animatedStyles}>
        {tickerText()}
      </Animated.View>
    </View>
  );
};

