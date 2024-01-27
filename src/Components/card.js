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

import TextTicker from "./TextTicker/";

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
    const borderColor= useSharedValue("transparent")
    const artistShower = React.useRef(null)
    const cardOpacity = useSharedValue(1.0)



    
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
        borderColor.value = (event.translationX>0 ? `rgba(30, 215, 96, ${(Math.abs(translateX.value)/(width*0.4)).toFixed(2)})` : `rgba(244, 67, 54,  ${(Math.abs(translateX.value)/(width*0.4)).toFixed(2)})`)
        cardOpacity.value = (1-(Math.abs(translateX.value)/(width*0.4)).toFixed(2))
        runOnJS(getCardState)(0)

      }
    }).onFinalize((event) => {
        
        if(Math.abs(event.translationX)<(width*0.4)) {
            translateX.value = withSpring(0)
            translateY.value = withSpring(0)
            rotation.value = withSpring("0deg")
            cardOpacity.value = (1.0)
            borderColor.value = 'transparent'
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
      

    


   


  
  



  return (
    
    <GestureDetector gesture={drag}>
    <Animated.View onLayout={onLayout} className={`border-2 w-5/6 max-w-[340px]`} style={[{ borderColor: borderColor, backgroundColor: borderColor} , containerStyle]}>
      
     
      <Animated.View className="flex flex-col justify-center w-full bg-less-black px-5 py-5" style={{gap: "20px", opacity: cardOpacity}}>
      <Image
        loading="lazy"
        source={trackObject.album.images[0].url}
        className="aspect-square object-contain object-center w-full overflow-hidden"
      />
      <View className="justify-between flex items-end flex-col w-full">
        <View className="flex flex-col items-stretch w-full" >
            <TextTicker className="w-full"  textList={trackObject.name} textClassName="text-walter-white text-2xl font-semibold" />          
        </View>
        <View className="flex flex-row justify-between w-full h-5 items-center"> 
        <TextTicker containerClassName={"max-w-[60%]"} textList={trackObject.artists.map((item) => item.name)} textClassName="text-groove-grey text-sm font-semibold" />
        <Text className=" text-groove-grey text-sm font-semibold whitespace-nowrap">00:{timeThings.playedSeconds} / 00:{timeThings.duration}</Text>      
        </View>
      </View>
      <View className="flex flex-row items-center justify-between gap-5">
        <Pressable onPress={() => Linking.openURL(trackObject.external_urls.spotify)}>
        <Image
          loading="lazy"
          source={require("../../assets/icons/spotify_logo.png")}
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
    </Animated.View>
    </GestureDetector>
  );
}



