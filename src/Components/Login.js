import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import { Button } from 'react-native';
import * as Crypto from 'expo-crypto';



WebBrowser.maybeCompleteAuthSession();

// Endpoint
const discovery = {
  authorizationEndpoint: 'https://accounts.spotify.com/authorize',
  tokenEndpoint: 'https://accounts.spotify.com/api/token',
};

const generateRandomString = (length) => {
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const values = Crypto.getRandomValues(new Uint8Array(length));
  return values.reduce((acc, x) => acc + possible[x % possible.length], "");
}

const sha256 = async (plain) => {
  const encoder = new TextEncoder()
  const data = encoder.encode(plain)
  return Crypto.digestStringAsync(Crypto.CryptoDigestAlgorithm.SHA256, data)
}

const base64encode = (input) => {
  return btoa(String.fromCharCode(...new Uint8Array(input)))
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
}

const getCodeChallenge = async (length) => {
  const codeVerifier  = generateRandomString(64);
  const hashed = await sha256(codeVerifier);
  const codeChallenge = base64encode(hashed);
  return codeChallenge
}


const codeChallenge = getCodeChallenge()

export default function LoginButton() {
 
  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: '749b24029aaa4c558238fc1e0b9dd38a',
      scopes: [ 'playlist-read-private', 'user-read-email', 'playlist-modify-public', 'playlist-read-collaborative', 'playlist-modify-private', 'playlist-modify-public','user-top-read','user-read-email', 'user-read-private', 'ugc-image-upload' ],
      // To follow the "Authorization Code Flow" to fetch token after authorizationEndpoint
      // this must be set to false
      codeChallengeMethod: "S256", 
      codeChallenge: codeChallenge,
      usePKCE: true,
      redirectUri: makeRedirectUri({ native: 'groove-guru://callback' }),
    },
    discovery
  );

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { code } = response.params;
    }
  }, [response]);

  return (
    <Button
      disabled={!request}
      title="Login with Spotify"
      onPress={() => {
        promptAsync();
      }}
    />

    
  );
}