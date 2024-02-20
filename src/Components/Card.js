// The swipeable cards that are the centerpoint of the app and control song playback.

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

import { Link } from "expo-router";

import { useWindowDimensions } from 'react-native';
import { Audio } from 'expo-av'

import Animated, { SlideInUp, useAnimatedStyle, useSharedValue, withSpring, withDecay, runOnJS, withRepeat, withTiming, Easing, withSequence, withDelay, FlipInEasyY, PinwheelIn, BounceIn, FadeInUp, StretchInX, ZoomIn, RollInLeft, LightSpeedInLeft, FadeIn, FlipInEasyX, interpolate, SlideInLeft, SlideInDown } from 'react-native-reanimated';
import { Gesture, GestureDetector, GestureHandlerRootView } from "react-native-gesture-handler";

import TextTicker from "./TextTicker/";

/**
 * Represents a Card component.
 * @param {number} index - The index of the card.
 * @param {Object} trackObject - The track object.
 * @param {Function} getCardState - The function to get the card state.
 * @param {Animated.SharedValue<number>} animateIndex - The index which controls the stack animation.
 * @param {number} activeIndex - The active index.
 * @param {number} totalLength - The total length of the stack.
 * @returns {JSX.Element} The Card component.
 */
export default function Card({
  index,
  trackObject,
  getCardState,
  animateIndex,
  activeIndex,
  totalLength,

}) {

  // The values used to animate the card movement and make it interactive.
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0)
  const rotation = useSharedValue("0deg")


  // The state that determines if the card has been swiped. Used to unload the sound.
  const [hasSwiped, setHasSwiped] = React.useState(false)


  const { height, width } = useWindowDimensions();

  const [playing, setPlaying] = React.useState(false)

  // The state that keeps track of the duration of the preview and the time played.
  const [timeThings, setTimeThings] = React.useState({ playedSeconds: "00", duration: "30" })

  // The values used to animate the card border and opacity. (opacity isn't used in the final version)
  const borderColor = useSharedValue("transparent")
  const cardOpacity = useSharedValue(1.0)

  // The state that keeps track of the sound object.
  const [sound, setSound] = React.useState();

  // The state that keeps track of the loading state of the sound.
  const [waitingForAwait, setWaitingForAwait] = React.useState(false)

  // The number of visible cards.
  const visibleCards = 5



  // The function that handles the sound and interactions with the play/pause button.
  async function handleSound() {
    if (activeIndex === index) {
      if (!sound) {
        setWaitingForAwait(true)
        try {
          const { sound } = await Audio.Sound.createAsync({ uri: trackObject.preview_url }, { shouldPlay: true })
          setSound(sound);
          sound.setOnPlaybackStatusUpdate(this._onPlaybackStatusUpdate);
          await sound.setIsLoopingAsync(true)
        }
        catch (err) {
          console.log(err)
        }
        setWaitingForAwait(false)
      } else {
        try {
          const status = await sound.getStatusAsync()
          if (status.isPlaying) {
            setWaitingForAwait(true)
            await sound.pauseAsync()
            setWaitingForAwait(false)
          } else {
            setWaitingForAwait(true)
            await sound.playAsync()
            setWaitingForAwait(false)
          }
        } catch (err) {
          console.log(err)
        }
      }

    }



  }


  // The function that unloads the sound.
  async function unloadSound() {
    if (sound) {
      await sound.unloadAsync()
    }

  }


  // Unload the sound when the card has been swiped.
  React.useEffect(() => {
    if (sound && hasSwiped) {
      unloadSound()
    }

  }, [hasSwiped])


  // Unload the sound when the component is unmounted.    
  React.useEffect(() => {

    return sound
      ? () => {
        unloadSound()
      }
      : undefined;
  }, [sound]);


  // Start the sound when the active index is the same as the card index.
  React.useEffect(() => {

    if (activeIndex === index) {
      handleSound()
    }

  }
    , [activeIndex])


  // Controlls the playback status of the sound.
  _onPlaybackStatusUpdate = playbackStatus => {


    setTimeThings({ duration: Math.ceil(playbackStatus.durationMillis / 1000), playedSeconds: Math.ceil(playbackStatus.positionMillis / 1000) < 10 ? "0" + Math.ceil(playbackStatus.positionMillis / 1000).toString() : Math.ceil(playbackStatus.positionMillis / 1000) })
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



  // Get the x, y, height and width of the card. Not used in the final version.  
  const onLayout = (event) => {
    const { x, y, height, width } = event.nativeEvent.layout;


  }

  // The gesture handler that makes the card interactive.
  let drag = Gesture.Pan()
    .onChange((event) => {
      // If the card is the active card, update the translateX, translateY, rotation, borderColor and cardOpacity values.
      if (animateIndex.value === index) {
        translateX.value = event.translationX
        translateY.value = event.translationY
        rotation.value = (((translateX.value / (width / 2)) * 6 + "deg"))
        if (Math.abs(event.translationX) >= (width * 0.4)) {
          runOnJS(getCardState)(event.translationX < 0 ? -1 : 1)
        } else {
          borderColor.value = (event.translationX > 0 ? `rgba(30, 215, 96, ${(Math.abs(translateX.value) / (width * 0.4))})` : `rgba(244, 67, 54,  ${(Math.abs(translateX.value) / (width * 0.4))})`)
          cardOpacity.value = (1.0)
          runOnJS(getCardState)(0)

        }
      }

    }).onFinalize((event) => {
      if (animateIndex.value === index) {
        // If the card's x translation is less than 40% of the screen width, animate the card back to its original position.
        if (Math.abs(event.translationX) < (width * 0.4)) {
          translateX.value = withSpring(0)
          translateY.value = withSpring(0)
          rotation.value = withSpring("0deg")
          cardOpacity.value = (1.0)
          borderColor.value = 'transparent'
        } else {
          // If the card's x translation is more than 40% of the screen width, animate the card out of the screen and update the card state.
          translateX.value = withDecay({
            clamp: [-width, width],
            velocity: event.translationX < 0 ? -1000 : 1000,


          }, (completed) => {
            if (completed) {
              runOnJS(setHasSwiped)(true)
              runOnJS(getCardState)(translateX.value > 0 ? 2 : -2)


            }
          })
          translateY.value = withDecay({
            velocity: event.velocityY,

          })
          rotation.value = withSpring("0deg")

        }
      }



    });


  // The animated style of the card. Used for the stack animation. 
  const containerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value
        },
        {
          translateY: interpolate(
            animateIndex.value,
            [index - 1, index, index + 1],
            [-15, translateY.value, 0]
          )
        }, {
          scale: interpolate(
            animateIndex.value,
            [index - 1, index, index + 1],
            [0.96, 1, 1]
          ),
        },
        {
          rotate: rotation.value
        },

      ],
      opacity: interpolate(
        animateIndex.value,
        [index - 2, index - 1, index, index + 1],
        [1 - 1 / visibleCards, 1, 1, 1]
      ),
      position: "absolute",
      zIndex: totalLength - index,
      display: hasSwiped ? "none" : "flex"
    };
  });







  return (

    <GestureDetector gesture={drag}>
      <Animated.View entering={SlideInLeft.duration(200)} onLayout={onLayout} className={`border-4 w-5/6 max-w-[340px] border-transparent`} style={[{ borderColor: borderColor, backgroundColor: borderColor }, containerStyle]}>
        <Animated.View className="flex flex-col justify-center w-full bg-less-black px-5 py-5" style={{ opacity: cardOpacity }}>
          <View className="flex flex-col justify-center w-full" style={{ gap: 20 }}>
            <Image
              loading="lazy"
              source={trackObject.album.images[0].url}
              className="aspect-square object-contain object-center w-full overflow-hidden"
            />
            <View className="justify-between flex items-end flex-col w-full">
              <View className="flex flex-col items-stretch w-full" >
                <TextTicker className="w-full" textList={trackObject.name} textClassName="text-walter-white text-2xl font-semibold" />
              </View>
              <View className="flex flex-row justify-between w-full h-5 items-center">
                <TextTicker containerClassName={"max-w-[60%]"} textList={trackObject.artists.map((item) => item.name)} textClassName="text-groove-grey text-sm font-semibold" />
                <Text className=" text-groove-grey text-sm font-semibold whitespace-nowrap">00:{timeThings.playedSeconds} / 00:{timeThings.duration}</Text>
              </View>
            </View>
            <View className="flex flex-row items-center justify-between gap-5">
              {/* Open the song in spotify   */}
              <Pressable onPress={() => Linking.openURL(trackObject.external_urls.spotify)}>
                <Image
                  loading="lazy"
                  source={require("../../assets/icons/spotify_logo.png")}
                  className="aspect-square object-contain object-center w-8 overflow-hidden self-center shrink-0 max-w-full"
                />
              </Pressable>
              {/* Play/pause the song */}
              <Pressable
                disabled={waitingForAwait}
                onPress={handleSound}>
                <Image
                  loading="lazy"
                  source={!playing ? require("../../assets/icons/playbutton.svg") : require("../../assets/icons/pausebutton.svg")}
                  className="aspect-square object-contain object-center w-14 overflow-hidden"
                />
              </Pressable>

              {/* Open the song info  */}
              <Link href={`/info?id=${trackObject.id}&name=${trackObject.name}`} asChild>
                <Pressable>
                  <Image
                    loading="lazy"
                    source={require("../../assets/icons/info.svg")}
                    className="aspect-square object-contain object-center w-8 overflow-hidden self-center shrink-0 max-w-full"
                  />
                </Pressable>
              </Link>

            </View>
          </View>

        </Animated.View>

      </Animated.View>
    </GestureDetector>
  );
}