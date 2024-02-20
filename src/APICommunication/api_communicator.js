import { useEffect, useState } from "react"
import { getObjectData, storeDataAsync } from '../Storage/asyncStorageFunctions'
import { TokenResponse } from 'expo-auth-session'
import { useSession } from "../Context/authContext"

const url = 'https://api.spotify.com/v1'

// Standard async Spotify API request function
export const spotifyRequest = async ({ endpoint, method = "GET", auth_token, costum_headers = {}, data }) => {

  costum_headers['Authorization'] = `Bearer ${auth_token}`
  data && !costum_headers['Content-Type'] ? costum_headers['Content-Type'] = 'application/json' : null
  try {
    const response = await fetch(url + endpoint, {
      method: method,
      headers: costum_headers,
      body: data && costum_headers['Content-Type'] === 'application/json' ? JSON.stringify(data) : data

    })

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const responseData = response.headers.get('content-type') && response.headers.get('content-type')?.indexOf("application/json") !== -1 ? await response.json() : await response.text()
    return responseData
  } catch (error) {
    console.error('Error fetching data from Spotify:', error)
    return null
  }


}

// Custom react hook for Spotify API requests

/**
 * A custom hook for making requests to the Spotify API.
 *
 * @param {string} endpoint - The endpoint to make the request to.
 * @param {string} method - The HTTP method to use for the request.
 * @param {Object} costum_headers - Custom headers to include in the request.
 * @param {Object} body - The request body.
 * @param {boolean} fetchDirectly - Whether to fetch data directly or not.
 * @returns {[Object, Function]} - An array containing the response data and the fetch function.
 */
export const useSpotifyRequest = ({ endpoint, method, costum_headers, body, fetchDirectly }) => {
  const [data, setData] = useState(null)
  const { session, refreshSession } = useSession()


  const fetchFromSpotify = async ({
    URL,
    fetchData
  }) => {
    // If no session token is found, return. This should not happen.
    if (session === null) {
      console.log('No session token found')
      return
    }
    // If the session token is expired, refresh it and try again.
    if (session.shouldRefresh()) {
      const newSession = await refreshSession()
      const result = await spotifyRequest(
        {
          endpoint: URL ? URL : endpoint,
          method: method,
          auth_token: newSession.accessToken,
          costum_headers: costum_headers,
          data: fetchData ? fetchData : body
        }
      )
      setData(result)
      return result
    } else {
      // If the session token is valid, make the request.
      const result = await spotifyRequest(
        {
          endpoint: URL ? URL : endpoint,
          method: method,
          auth_token: session.accessToken,
          costum_headers: costum_headers,
          data: fetchData ? fetchData : body
        }
      )
      // Set the response data in the state.
      setData(result)
      // Return the response data, needed when using fetchFromSpotify and not fetching directly.
      return result
    }


  }

  // If fetchDirectly is true, fetch the data directly.
  useEffect(() => {
    if (fetchDirectly) {
      fetchFromSpotify(endpoint)

    }
  }, [endpoint, fetchDirectly])

  return [data, fetchFromSpotify]
}