import { useEffect, useState } from "react"
import { getObjectData, storeDataAsync } from '../Storage/asyncStorageFunctions'
import { TokenResponse } from 'expo-auth-session'
import { useSession } from "../Context/authContext"

const url = 'https://api.spotify.com/v1'

// Standard async Spotify API request function
const spotifyRequest = async ({ endpoint, method = "GET", auth_token, costum_headers = {}, data }) => {

  costum_headers['Authorization'] = `Bearer ${auth_token}`
  try {
    const response = await fetch(url + endpoint, {
      method: method,
      headers: costum_headers,
      body: data ? JSON.stringify(data) : null

    })

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching data from Spotify:', error)
    return null
  }


}

// Custom react hook for Spotify API requests
export const useSpotifyRequest = ({ endpoint, method, costum_headers, body, fetchDirectly }) => {
  const [data, setData] = useState(null)
  const { session, refreshSession } = useSession()


  const fetchFromSpotify = async (URL) => {
    if (session === null) {
      console.log('No session token found')
      return
    }
    if (session.shouldRefresh()) {
      const newSession = await refreshSession().accessToken
      const result = await spotifyRequest(
        {
          endpoint: URL ? URL : endpoint,
          method: method,
          auth_token: newSession.accessToken,
          costum_headers: costum_headers,
          data: body
        }
      )
      setData(result)
    } else {
      const result = await spotifyRequest(
        {
          endpoint: URL ? URL : endpoint,
          method: method,
          auth_token: session.accessToken,
          costum_headers: costum_headers,
          data: body
        }
      )
      setData(result)
    }


  }

  useEffect(() => {
    if (fetchDirectly) {
      fetchFromSpotify(endpoint)

    }
  }, [endpoint, fetchDirectly])

  return [data, fetchFromSpotify]
}