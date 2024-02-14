import { useEffect, useState } from "react";
import {getObjectData, storeDataAsync} from '../Storage/asyncStorageFunctions'
import {TokenResponse} from 'expo-auth-session'
const url = 'https://api.spotify.com/v1';

// replace with actual AsyncStorage token 


export const spotifyRequest = async (endpoint) => {
  let session = await getObjectData('session')

  if(!session) {
    console.log("No session")
    return null
  }else {
    session = new TokenResponse(session)
    if(session.shouldRefresh()) {
      console.log("refreshing")
      await session.refreshAsync({},{tokenEndpoint: "https://accounts.spotify.com/api/token"}).then(async (res) => {
        await storeDataAsync(res)
      }
      )

    }
    try {
      const response = await fetch(url + endpoint, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${session.accessToken}`
        }
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
  }
 
};

export const spotifyRequestCustom = async (endpoint, method, custom_headers) => {
  custom_headers['Authorization'] = `Bearer ${token}`
  try {
    const response = await fetch(url + endpoint, {
      method: method,
      headers: custom_headers
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

export const useSpotifyRequest = (endpoint) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await spotifyRequest(endpoint);
      setData(result);
    };
    fetchData();
  }, [endpoint]);

  return data;
}

export const useSpotifyRequestCustom = (endpoint, method, custom_headers) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await spotifyRequestCustom(endpoint, method, custom_headers);
      setData(result);
    };
    fetchData();
  }, [endpoint, method, custom_headers]);

  return data;
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