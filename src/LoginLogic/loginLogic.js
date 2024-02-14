import * as React from 'react';
import { makeRedirectUri, useAuthRequest, exchangeCodeAsync, TokenResponse } from 'expo-auth-session';


// Endpoint
const discovery = {
    authorizationEndpoint: 'https://accounts.spotify.com/authorize',
    tokenEndpoint: 'https://accounts.spotify.com/api/token',
};
  const clientId = '749b24029aaa4c558238fc1e0b9dd38a'


export const useLoginLogic = ({signInAction}) => {
    const [tokenResponse, setTokenResponse] = React.useState(null);

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
            .then((res) => {
                setTokenResponse(res)
                signInAction(res)
                      }).catch((e) => console.log('error', e));

                console.log(tokenResponse)
          
        }
      }, [response]);

    return {request, promptAsync}

}