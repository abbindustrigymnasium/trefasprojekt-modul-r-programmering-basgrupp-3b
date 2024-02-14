import React from 'react';
import { useStorageState } from '../Storage/asyncStorageFunctions';
import { useLoginLogic } from '../LoginLogic/loginLogic';
import {TokenResponse} from 'expo-auth-session'

const AuthContext = React.createContext({
  signIn: () => null,
  signOut: () => null,
  session: null,
  isLoading: false,
  request: null, 
});

// This hook can be used to access the user info.
export function useSession() {
  const value = React.useContext(AuthContext);
  if (process.env.NODE_ENV !== 'production') {
    if (!value) {
      throw new Error('useSession must be wrapped in a <SessionProvider />');
    }
  }

  return value;
}

export function SessionProvider(props) {
  const [[isLoading, session], setSession] = useStorageState('session');
  const {request, promptAsync} = useLoginLogic({signInAction: setSession})

  return (
    <AuthContext.Provider
      value={{
        signIn: async () => {
          // Perform sign-in logic here
          await promptAsync()
                },
        signOut: () => {
          setSession(null);
        },
        session: new TokenResponse(session),
        isLoading,
        request
      }}>
      {props.children}
    </AuthContext.Provider>
  );
}
