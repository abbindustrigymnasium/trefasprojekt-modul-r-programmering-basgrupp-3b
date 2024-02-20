import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Image } from 'expo-image'
import { Link, router } from 'expo-router'
import * as React from 'react'
import Animated, { BounceIn, Easing, FadeIn, SlideInDown, SlideInLeft, SlideInRight, SlideInUp, SlideOutDown, SlideOutLeft, useAnimatedStyle, useSharedValue, withDecay, withSpring, withTiming } from 'react-native-reanimated'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { StatusBar } from 'expo-status-bar'
import { useLocalSearchParams } from 'expo-router'

import * as Haptics from 'expo-haptics'

import Card from '../../Components/Card'
import { useSpotifyRequest} from '../../APICommunication/api_communicator'
import PlaylistCard from '../../Components/playlistCard'
import { Button } from 'react-native-paper'


export default function Page () {

    const insets = useSafeAreaInsets()
    const sizes = useSharedValue({ red: 100, green: 100 })
    const [cardState, setCardState] = React.useState(0)
    const animateIndex = useSharedValue(0)
    const [activeIndex, setActiveIndex] = React.useState(0)
    const [likedSongs, setLikedSongs] = React.useState([])
    const [hatedSongs, setHatedSongs] = React.useState([])
    const searchParams = useLocalSearchParams()
    const [showPlaylistPopover, setShowPlaylistPopover] = React.useState(false)


    const [trackResponse, fetchFromSpotify] = useSpotifyRequest({ endpoint: searchParams['q'], method: 'GET', fetchDirectly: true })

    function getCardState (state) {
        setCardState(state)
        if (Math.abs(state) >= 2) {
            if (state === 2) {
                setLikedSongs([...likedSongs, filteredTrackResponse[animateIndex.value]])
            } else if (state === -2) {
                setHatedSongs([...hatedSongs, filteredTrackResponse[animateIndex.value]])
            }
            animateIndex.value = withTiming(animateIndex.value + 1, { duration: 100 })
            setActiveIndex(activeIndex + 1)
        }

    };
   
    React.useEffect(() => {
        async function fetchNewRecs() {
        if(activeIndex === filteredTrackResponse.length && activeIndex!=0){
            const temp = await fetchFromSpotify({URL: searchParams['q'] })
            setActiveIndex(0)
            animateIndex.value = withTiming(0, { duration: 100 })
        }
        }
        fetchNewRecs()
    }
    , [activeIndex])

    React.useEffect(() => {
        Math.abs(cardState) === 1 ? Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium) : null

    }, [cardState])

    const animatedRight = useAnimatedStyle(() => ({
        width: withSpring(cardState === 1 ? 110 : 80, { duration: 300 })
    }))

    const animatedLeft = useAnimatedStyle(() => ({
        width: withSpring(cardState === -1 ? 110 : 80, { duration: 300 })
    }))



    const filteredTrackResponse = React.useMemo(() => {
        if (trackResponse === null) {
            return []
        }
        return (trackResponse["tracks"].filter((element, index) => {
            return element.preview_url != null
        }))
    }, [trackResponse])


    const presentableTrackResponses = filteredTrackResponse.map((element, index) => {
        return <Card
            key={index}
            index={index}
            animateIndex={animateIndex}
            activeIndex={activeIndex}
            totalLength={filteredTrackResponse.length}
            trackObject={element}
            getCardState={getCardState}
        >
        </Card>
    })



    return (

        <View className="flex-1 items-center justify-end bg-all-black" style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
            <StatusBar style='light' />
            <View className=" h-full w-full flex flex-row justify-between items-end">

                <Animated.View className="bg-red-500 h-12 rounded-r-full flex items-center justify-center "

                    style={
                        animatedLeft
                    }>

                    {cardState === -1 ?

                        <Animated.Text className=" font-bold text-xl uppercase ">
                            FORGET
                        </Animated.Text>
                        : <Animated.Text className="font-semibold text-2xl uppercase">
                            {hatedSongs.length}
                        </Animated.Text>}
                </Animated.View>
                <Animated.View className="bg-spott-green  h-12 rounded-l-full items-center justify-center"
                    style={animatedRight
                    }>
                    {cardState === 1 ?

                        <Animated.Text className="font-bold text-xl  uppercase">
                            ADD
                        </Animated.Text>
                        : <Animated.Text className="font-semibold text-2xl">
                            {likedSongs.length}
                        </Animated.Text>}

                </Animated.View>
            </View>
            <View className=" h-[85%] w-full flex-col items-center justify-center">
                 {
                    activeIndex === filteredTrackResponse.length  && activeIndex!=0?
                    (
                    
                    <Animated.View entering={FadeIn.duration(200)} className="flex justify-center items-center flex-col">
                    <Text className="text-xl font-bold text-walter-white text-center">Fetching new recommendations...</Text>
                    </Animated.View>): null
                 }
                 
                 
                 { presentableTrackResponses.slice(activeIndex, activeIndex + 5) 
                 
                 }

            </View>

            <Pressable
                onPress={() => { setShowPlaylistPopover(true)}}
                className=" bg-spott-green w-5/6 max-w-[340px] py-5 flex rounded-2xl items-center justify-center">
                <Text className=" font-semibold text-2xl ">Done</Text>
            </Pressable>

            <PlaylistCard showPopover={showPlaylistPopover} setShowPopover={setShowPlaylistPopover} likedSongs={{...trackResponse, ["tracks"]: likedSongs}}/>



        </View>
    )
}