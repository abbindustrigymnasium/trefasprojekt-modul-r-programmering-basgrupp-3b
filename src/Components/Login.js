import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest, exchangeCodeAsync, TokenResponse } from 'expo-auth-session';
import { View, Button, Pressable, Text , StyleSheet} from 'react-native';
import {Image as ReactImage} from 'react-native'
import {storeObjectData, storeStringData, getObjectData, getStringData} from '../Storage/asyncStorageFunctions'
import * as Crypto from 'expo-crypto';
import {Image} from 'expo-image'
import { router } from 'expo-router';
import spotifyLogo from '../../assets/spotify-logos/Spotify_Logo_RGB_Black.png'


 
WebBrowser.maybeCompleteAuthSession();

// Endpoint
const discovery = {
  authorizationEndpoint: 'https://accounts.spotify.com/authorize',
  tokenEndpoint: 'https://accounts.spotify.com/api/token',
};


const clientId = '749b24029aaa4c558238fc1e0b9dd38a'


export default function LoginButton() {
    const [dimensions, setDimensions] = React.useState({height: 200, width: 200})


  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: clientId,
      scopes: [
        'playlist-read-private',
        'user-read-email',
        'playlist-modify-public',
        'playlist-read-collaborative',
        'playlist-modify-private',
        'playlist-modify-public',
        'user-top-read',
        'user-read-email',
        'user-read-private',
        'ugc-image-upload',
      ],
      codeChallengeMethod: 'S256',
      usePKCE: true,
      redirectUri: makeRedirectUri({ native: 'groove-guru://callback' }),
    },
    discovery
  );

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { code } = response.params;
      const config = {
        code: code,
        clientId: clientId,
        extraParams: {
          code_verifier: request?.codeVerifier,
        },
        redirectUri: makeRedirectUri({ native: 'groove-guru://callback' }),
      };
      exchangeCodeAsync(config, discovery)
        .then((tokenResponse) => {
          storeStringData('access_token', tokenResponse.accessToken)
          storeObjectData('token_response', tokenResponse)
          router.replace("/prefs")
        })
        .catch((e) => console.log('error', e));
      
    }
  }, [response]);


  React.useEffect(() => {
    getObjectData('token_response')
    .then((res) => {
      if(res!=null) {
          router.replace("/prefs")
      }
      
    })
    .catch((e) => {
      console.log(e)
    }

    )


  }, [])


  
  const onLayout=(event)=> {
    const {x, y, height, width} = event.nativeEvent.layout;
    console.log(height, width)
    setDimensions({height: height, width: width})

    
  }



  

  return (
    <Pressable
      disabled={!request}
      className="bg-spott-green px-6 w-5/6 max-w-[400px] h-16 flex justify-center items-center rounded-2xl flex-row mb-6"
      style={{gap: 10}}
      onPress={() => {
        promptAsync();
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
