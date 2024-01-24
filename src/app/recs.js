import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Image } from 'expo-image';
import { Link } from 'expo-router'
import * as React from 'react'
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

import Card from '../Components/card'
import { SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context'
import { GestureHandlerRootView } from "react-native-gesture-handler";



const sampleTrackObject  = 
  {
    "album": {
      "album_type": "ALBUM",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/30e8DmahrEamvLbFRPdWmk"
          },
          "href": "https://api.spotify.com/v1/artists/30e8DmahrEamvLbFRPdWmk",
          "id": "30e8DmahrEamvLbFRPdWmk",
          "name": "Justin Moore",
          "type": "artist",
          "uri": "spotify:artist:30e8DmahrEamvLbFRPdWmk"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/7yI8ppmq1tmqF09Qbi1tcj"
      },
      "href": "https://api.spotify.com/v1/albums/7yI8ppmq1tmqF09Qbi1tcj",
      "id": "7yI8ppmq1tmqF09Qbi1tcj",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b273da2052e05dd848225e84ac5b",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e02da2052e05dd848225e84ac5b",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d00004851da2052e05dd848225e84ac5b",
          "width": 64
        }
      ],
      "is_playable": true,
      "name": "Justin Moore",
      "release_date": "2009-01-01",
      "release_date_precision": "day",
      "total_tracks": 10,
      "type": "album",
      "uri": "spotify:album:7yI8ppmq1tmqF09Qbi1tcj"
    },
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/30e8DmahrEamvLbFRPdWmk"
        },
        "href": "https://api.spotify.com/v1/artists/30e8DmahrEamvLbFRPdWmk",
        "id": "30e8DmahrEamvLbFRPdWmk",
        "name": "Justin Moore",
        "type": "artist",
        "uri": "spotify:artist:30e8DmahrEamvLbFRPdWmk"
      }
    ],
    "disc_number": 1,
    "duration_ms": 220320,
    "explicit": false,
    "external_ids": {
      "isrc": "GBDCC1301303"
    },
    "external_urls": {
      "spotify": "https://open.spotify.com/track/3RtA16IFjyhtg5oW8oUBeT"
    },
    "href": "https://api.spotify.com/v1/tracks/3RtA16IFjyhtg5oW8oUBeT",
    "id": "3RtA16IFjyhtg5oW8oUBeT",
    "is_local": false,
    "is_playable": true,
    "linked_from": {
      "external_urls": {
        "spotify": "https://open.spotify.com/track/5pyB5WEAEwqwl18UaBLeBl"
      },
      "href": "https://api.spotify.com/v1/tracks/5pyB5WEAEwqwl18UaBLeBl",
      "id": "5pyB5WEAEwqwl18UaBLeBl",
      "type": "track",
      "uri": "spotify:track:5pyB5WEAEwqwl18UaBLeBl"
    },
    "name": "Small Town USA",
    "popularity": 35,
    "preview_url": "https://p.scdn.co/mp3-preview/baf9d1eaffddedd8fdf5a07bf53e0d50a8cb09ba?cid=f5907b8dc8a04b5d9ef2536acbbcf6e3",
    "track_number": 2,
    "type": "track",
    "uri": "spotify:track:3RtA16IFjyhtg5oW8oUBeT"
  }


export default function Page () {

  const insets = useSafeAreaInsets();
  const sizes = useSharedValue({red: 100, green: 100})


const [cardState, setCardState] = React.useState(0)
const [indicator, setIndicator] = React.useState(
 (<View className={'w-10 h-6  mt-12'} >
  
  </View>)
)

function getCardState(state) {
  setCardState(state)

};

const animatedSmall = useAnimatedStyle(() => ({
  width: withSpring(50)
}));

const animatedLarge = useAnimatedStyle(() => ({
  width: withSpring(100)
}));






    return (
      
        <GestureHandlerRootView className="flex-1 items-center justify-end bg-all-black" style={{paddingTop: insets.top, paddingBottom: insets.bottom}}>
          <View className=" h-full w-full flex flex-row justify-between items-end">
            
                <Animated.View className="bg-red-500 h-12 rounded-r-full flex items-center justify-center "
                
                style={
                  cardState === -1 ? {width: 50} : animatedLarge
                }>
                  
                  <Text className="font-semibold text-xl">
                    {cardState === -1 ? '-' : 23}
                  </Text>

                </Animated.View>
                <Animated.View className="bg-spott-green h-12  rounded-l-full items-center justify-center "
                style={                  cardState === 1 ? {width: 50} : animatedLarge
                }>
                  <Text className="text-xl font-semibold">
                                            {cardState === 1 ? '+' : 23}

                  </Text>

                </Animated.View>
            </View>
          <View className=" h-[85%] w-full flex-col items-center justify-center">
            
          
           
            <Card 
            trackObject={sampleTrackObject}
            getCardState={getCardState}
            
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
