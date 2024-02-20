import React, { useEffect, useMemo } from 'react';
import { useStorageState } from '../Storage/asyncStorageFunctions';
import { useLogin, refreshToken } from '../LoginLogic/loginLogic';
import {TokenResponse} from 'expo-auth-session'

const AuthContext = React.createContext({
  signIn: () => null,
  signOut: () => null,
  session: null,
  refreshSession: async () => null,
  isLoading: false,
  user: null,
  setUser: () => null,
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
  const [[isLoadingUser, user], setUser] = useStorageState('user');


  const signInAction = async (session_response) => {
    setSession(session_response)
  }

  const {request, promptAsync} = useLogin({signInAction: signInAction}) 



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
        session: session!=null ? new TokenResponse(session) : session,
        refreshSession: async () => {refreshToken({token: session, signInAction: signInAction})},
        user: session!=null ? user : null,
        setUser: setUser,
        isLoading,
        request
      }}>
      {props.children}
    </AuthContext.Provider>
  );
}
