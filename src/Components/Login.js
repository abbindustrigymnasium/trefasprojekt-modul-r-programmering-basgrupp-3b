import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { View, Button, Pressable, Text , StyleSheet} from 'react-native';
import {Image as ReactImage} from 'react-native'
import {storeObjectData, storeStringData, getObjectData, getStringData} from '../Storage/asyncStorageFunctions'
import * as Crypto from 'expo-crypto';
import {Image} from 'expo-image'
import { router } from 'expo-router';
import spotifyLogo from '../../assets/spotify-logos/Spotify_Logo_RGB_Black.png'

import {useSession} from '../Context/authContext'
import { useSpotifyRequest } from '../APICommunication/api_communicator';
 


export default function LoginButton() {
    const [dimensions, setDimensions] = React.useState({height: 200, width: 200})
    const [shouldRedirect, setShouldRedirect] = React.useState(false)
    const [user, fetchUser] = useSpotifyRequest({endpoint: '/me', method: 'GET', fetchDirectly: false})
   const {signIn, request, session, setUser} = useSession()


  
  
  const onLayout=(event)=> {
    const {x, y, height, width} = event.nativeEvent.layout;
    setDimensions({height: height, width: width})

  }

  React.useEffect(() => {
    async function getUserAndRedirect() {
    if(shouldRedirect && session) {
      const user = await fetchUser({URL: '/me', fetchData: null}) 
      if(user) {
          setUser(user)
      }
      router.replace("/")
    }
  }
  getUserAndRedirect()
  }
  ,[shouldRedirect, session])



  

  return (
    <Pressable
      disabled={!request}
      className="bg-spott-green px-6 w-5/6 max-w-[400px] h-16 flex justify-center items-center rounded-2xl flex-row mb-6"
      style={{gap: 10}}
      onPress={ async () => {
        await signIn()
        setShouldRedirect(true)
    
    
      }}
      onLayout={onLayout}
    >
      <Text className="  text-2xl font-bold text-all-black">Login with</Text>
      <Image
      style={{ width: dimensions.width*0.35, height:dimensions.height}}        
      className=""
      
      source={require("../../assets/spotify-logos/Spotify_Logo_RGB_Black.png")}
        contentFit="contain"
      />
      </Pressable>
      
  );
}
