/**
 * Renders a login button component, which initiates the login process with Spotify.
 *
 * @returns {JSX.Element} The rendered login button component.
 */


import * as React from 'react';
import { Pressable, Text } from 'react-native';
import {Image} from 'expo-image'
import { router } from 'expo-router';

// Session provider is a context provider that provides the session object with account information to the rest of the app
import {useSession} from '../Context/authContext'

// useSpotifyRequest is a hook that allows to make requests to the Spotify API
import { useSpotifyRequest } from '../APICommunication/api_communicator';
 


export default function LoginButton() {
  // The dimensions of the button
    const [dimensions, setDimensions] = React.useState({height: 200, width: 200})
    // The state that determines if the user should be redirected to the home page. Activated when the user clicks the button. 
    const [shouldRedirect, setShouldRedirect] = React.useState(false)
    const [user, fetchUser] = useSpotifyRequest({endpoint: '/me', method: 'GET', fetchDirectly: false})
   const {signIn, request, session, setUser} = useSession()


  
  
  const onLayout=(event)=> {
    const {x, y, height, width} = event.nativeEvent.layout;
    setDimensions({height: height, width: width})

  }

  // If the user is logged in, fetch the user information and redirect to the home page
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
