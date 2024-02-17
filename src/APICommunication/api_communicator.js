import { useEffect, useState } from "react";
import {getObjectData, storeDataAsync} from '../Storage/asyncStorageFunctions'
import {TokenResponse} from 'expo-auth-session'
import { useSession } from "../Context/authContext";

const url = 'https://api.spotify.com/v1';

// replace with actual AsyncStorage token 


const spotifyRequest = async ({endpoint, method="GET", auth_token, costum_headers={}, data} ) => {

  costum_headers['Authorization'] = `Bearer ${auth_token}`
    try {
      const response = await fetch(url + endpoint, {
        method: method,
        headers: costum_headers,
        body: data ? JSON.stringify(data) : null

      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data from Spotify:', error);
      return null
    }
  
 
};

export const useSpotifyRequest = ({endpoint, method, costum_headers,  body, fetchDirectly}) => {
  const [data, setData] = useState(null);
  const {session, refreshSession} = useSession();
  

  const fetchFromSpotify = async (URL) => {
    if (session === null) {
      console.log('No session token found');
      return;
    }
      if(session.shouldRefresh()) {
        const newSession = await refreshSession().accessToken
        const result = await spotifyRequest(
          {
            endpoint: URL ? URL : endpoint,
            method: method,
            auth_token: newSession.accessToken,
            costum_headers: costum_headers,
            data: body
          }
          );
        setData(result);
      }else {
        const result = await spotifyRequest(
          {
            endpoint: URL ? URL : endpoint,
            method: method,
            auth_token: session.accessToken,
            costum_headers: costum_headers,
            data: body
          }
          );
        setData(result);
      }
    
    
  };

  useEffect(() => {
    if (fetchDirectly) {
      fetchFromSpotify(endpoint);

    }
  }, [endpoint, fetchDirectly]);

  return [data, fetchFromSpotify];
}

// Example usage:

// import React, { useState } from 'react';
// import { spotifyRequest } from './APICommunication/api_communicator';

// const YourComponent = () => {
//   const [responseData, setResponseData] = useState(null);

//   const fetchDataFromApi = async () => {
//     const data = await spotifyRequest(
//       '/recommendations?seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry&seed_tracks=0c6xIDDpzE81m2q797ordA'
//     );
//     setResponseData(data);
//   };
  
//   return (
//     <View style={styles.container}>
//       <TouchableOpacity onPress={fetchDataFromApi}>
//         <Text>Fetch Data</Text>
//       </TouchableOpacity>

//       <Text>API Response:</Text>
//       <Text>{JSON.stringify(responseData, null, 2)}</Text>
//     </View>
//   )
// }