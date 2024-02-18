import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';

function useAsyncState(
  initialValue = [true, null]
){
  return React.useReducer(
    (state, action) => [false, action],
    initialValue
  )
}


export const storeDataAsync = async (key, value) => {
    try {
        if(value === null){
            await AsyncStorage.removeItem(key);
        }else{
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem(key, jsonValue);
        }
     
    } catch (e) {
      // saving error
    }
  };


const getStringData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);

      if (value !== null) {
        return value
        // value previously stored
      }
    } catch (e) {
      // error reading value
    }
}

export const getObjectData = async (key) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
  };

export function useStorageState(key) {
    const [state, setState] = useAsyncState();
  
    React.useEffect(() => {
      getObjectData(key).then(( value ) => {
        setState(value);
      });
    }, [key]);
  
    const setValue = React.useCallback(
      value => {
        setState(value);
        storeDataAsync(key, value);
      },
      [key]
    );
  
    return [state, setValue];

}