import * as React from "react";
import {
  FlatList,
  ScrollView,
  View,
  StyleSheet,
  Image as ReactImage,
  Text,
  Pressable,
} from "react-native";
import { Image } from "expo-image";

import * as Linking from 'expo-linking';

import {useWindowDimensions} from 'react-native';
import {Audio} from 'expo-av'




import Animated, { useAnimatedStyle, useSharedValue, withSpring, withDecay, runOnJS, withRepeat, withTiming, Easing, withSequence, withDelay} from 'react-native-reanimated';
import { Gesture, GestureDetector, GestureHandlerRootView } from "react-native-gesture-handler";


export default function Card({
    trackObject,
    getCardState
}) {
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);
    const [hasSwiped, setHasSwiped] = React.useState(false)
    const rotation = useSharedValue("0deg")
    const {height, width} = useWindowDimensions();
    const [playing, setPlaying] = React.useState(false)
    const [timeThings, setTimeThings] = React.useState({playedSeconds: "00", duration: "30"})
    const [borderColor, setBorderColor] = React.useState(["border-opacity-0", "border-transparent",])
    const artistShower = React.useRef(null)



    
const [size, setSize] = React.useState({height: 200, width: 200})
const [sound, setSound] = React.useState();
const [myVariable, setMyVariable] = React.useState();
const [waitingForAwait, setWaitingForAwait] = React.useState(false)


React.useEffect(() => {
    if(trackObject.preview_url===null) {
        getCardState(3)
    }else {
        handleSound()
    }

}, [trackObject])


async function handleSound() {

    if(!sound) {
        const { sound } = await Audio.Sound.createAsync({uri: trackObject.preview_url}, {shouldPlay:true})
        setSound(sound);
        sound.setOnPlaybackStatusUpdate(this._onPlaybackStatusUpdate);
        sound.setIsLoopingAsync(true)
        await sound.playAsync();
    }else {
        const status = await sound.getStatusAsync()
        if(status.isPlaying) {
            setWaitingForAwait(true)
            await sound.pauseAsync()
            setWaitingForAwait(false) 
        }else {
            setWaitingForAwait(true)
            await sound.playAsync()
            setWaitingForAwait(false)
        }
    }
    
}


async function unloadSound() {
    if(sound) {
        sound.unloadAsync()
    }

}


    React.useEffect( () => {
        if(sound && hasSwiped) {
          unloadSound()
        }
        
    }, [hasSwiped])

  React.useEffect(() => {
    setMyVariable("jippi")
   
    return sound
      ? () => {
          unloadSound()
        }
      : undefined;
  }, [sound]);




  _onPlaybackStatusUpdate = playbackStatus => {

    setTimeThings({duration: Math.ceil(playbackStatus.durationMillis/1000), playedSeconds: Math.ceil(playbackStatus.positionMillis/1000) <10?   "0" + Math.ceil(playbackStatus.positionMillis/1000).toString() : Math.ceil(playbackStatus.positionMillis/1000)  }) 
    if (!playbackStatus.isLoaded) {
      // Update your UI for the unloaded state
      if (playbackStatus.error) {
        console.log(`Encountered a fatal error during playback: ${playbackStatus.error}`);
        // Send Expo team the error on Slack or the forums so we can help you debug!
      }
    } else {
      // Update your UI for the loaded state
  
      if (playbackStatus.isPlaying) {
        setPlaying(true)
        // Update your UI for the playing state
      } else {

        setPlaying(false)


        // Update your UI for the paused state
      }
  
      if (playbackStatus.isBuffering) {
        // Update your UI for the buffering state
      }
  
      if (playbackStatus.didJustFinish && !playbackStatus.isLooping) {
        // The player has just finished playing and will stop. Maybe you want to play something else?
      }
  
       // etc
    }
  };







const onLayout=(event)=> {
  const {x, y, height, width} = event.nativeEvent.layout;
  setSize({height: height, width: width})

  
}

let drag = Gesture.Pan()
    .onChange((event) => {
      translateX.value = event.translationX
      rotation.value = (((translateX.value/(width/2))*6+ "deg"))
      translateY.value = Math.abs((translateX.value/(width/2))*(height/2))*0.2
      if(Math.abs(event.translationX)>=(width*0.4)) {
        runOnJS(getCardState)(event.translationX<0 ? -1 : 1)
      }else {
        runOnJS(setBorderColor)([((Math.abs(event.translationX)/(width*0.4))*1), event.translationX>0 ? 'border-spott-green' : 'border-red-500' ])
        runOnJS(getCardState)(0)

      }
    }).onFinalize((event) => {
        
        if(Math.abs(event.translationX)<(width*0.4)) {
            translateX.value = withSpring(0)
            translateY.value = withSpring(0)
            rotation.value = withSpring("0deg")
            runOnJS(setBorderColor)([borderColor[0], 'border-transparent'])
        }else if(Math.abs(event.translationX)>=width) {
            translateX.value = event.translationX
            translateY.value = event.translationY
        
    }else  {
                translateX.value = withDecay({
                    clamp: [-width, width],
                    velocity: event.translationX<0? -1000 : 1000,
    
                   
                  },  (completed) => {
                    if(completed) {
                    runOnJS(setHasSwiped)(true)
                    runOnJS(getCardState)(translateX.value > 0 ? 2 : -2)

                
                }})
                translateY.value = withDecay({
                    velocity: event.velocityY,
    
                })
                rotation.value=withSpring("0deg")
            
        }

    });

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
          display: hasSwiped ? "none" : "flex"
        };
      });
      

    


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
  
    React.useEffect(() => {
      setTimeout( () => { 
        offset.value = 
        withRepeat(

          withSequence(
            withDelay(3000, withTiming(-((textWidth.value-textBoxWidth.value)), { duration: 40*(textWidth.value-textBoxWidth.value) ,       easing: Easing.linear,
            })),
            withDelay(3000, withTiming(0, { duration: 40*(textWidth.value-textBoxWidth.value) ,       easing: Easing.linear,
            }))
            
          )
          
,
                 -1,
          true
        )
     
      }  ,1000)
     
    }, [,]);

    const artistNames = trackObject.artists.map(({name}, index) => {
      return (<Animated.Text key={name} className=" text-groove-grey text-sm font-semibold" >{name}{index===(trackObject.artists.length-1) ? '' : ', '} </Animated.Text>)

    }
    
    )
  
  



  return (
    
    <GestureDetector gesture={drag}>
    <Animated.View onLayout={onLayout} className={`justify-center bg-less-black  ${borderColor[1]} border-2 flex w-5/6 max-w-[340px] flex-col px-5  py-5 `} style={[{gap: "20px"} , containerStyle]}>
      <Image
        loading="lazy"
        source={trackObject.album.images[0].url}
        className="aspect-square object-contain object-center w-full overflow-hidden"
      />
      <View className="justify-between flex items-end flex-col w-full">
        <View className="flex flex-col items-stretch w-full" >
            <Text className=" text-walter-white text-2xl font-semibold whitespace-nowrap" >{trackObject.name}</Text>
                

       


            
            
            
            
        </View>
        <View className="flex flex-row justify-between w-full h-5 items-center"> 
        <View className="max-w-[60%] flex-row flex flex-nowrap justify-start items-center overflow-hidden" onLayout={getTextBoxWidth}>
          <Animated.View  className=" flex-row flex flex-nowrap justify-start items-center" onLayout={onTextLayout} style={animatedStyles }>
              {artistNames}
          </Animated.View>
        </View>

            
        <Text className=" text-groove-grey text-sm font-semibold whitespace-nowrap">00:{timeThings.playedSeconds} / 00:{timeThings.duration}</Text>

       


            
            
            
            
        </View>
      </View>
      <View className="flex flex-row items-center justify-between gap-5">
        <Pressable onPress={() => Linking.openURL(trackObject.external_urls.spotify)}>
        <Image
          loading="lazy"
          source={require("../../assets/icons/open_in_new.svg")}
          className="aspect-square object-contain object-center w-8 overflow-hidden self-center shrink-0 max-w-full"
        />
        </Pressable>
        
        <Pressable 
        disabled={waitingForAwait}
        onPress={handleSound}>
        <Image
            loading="lazy"
            source={!playing ? require("../../assets/icons/playbutton.svg") : require("../../assets/icons/pausebutton.svg")}
            className="aspect-square object-contain object-center w-14 overflow-hidden"
          />
        </Pressable>
         
        <Pressable>
        <Image
          loading="lazy"
          source={require("../../assets/icons/info.svg")}
          className="aspect-square object-contain object-center w-8 overflow-hidden self-center shrink-0 max-w-full"
        />
        </Pressable>
      </View>
    </Animated.View>
    </GestureDetector>
  );
}



