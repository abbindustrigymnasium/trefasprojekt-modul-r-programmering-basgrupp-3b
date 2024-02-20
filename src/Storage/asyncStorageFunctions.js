import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';

/** 
 * Custom hook for managing state in AsyncStorage.
 * 
 * 
 * @param {Array} initialValue - The initial value of the state.
 * @returns {Array} - An array containing the current state value and a function to update the state. The state contains both the value stored in AsyncStorage and a boolean indicating if the value is still loading.
 */

function useAsyncState(
  initialValue = [true, null]
){
  return React.useReducer(
    (state, action) => [false, action],
    initialValue
  )
}




/**
 * Store the value in AsyncStorage.
 * @param {string} key - The key to store the state under in AsyncStorage.
 * @param {*} value - The value to store in AsyncStorage.
 */

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

/**
 * Get the value stored in AsyncStorage.
 * @param {string} key - The key to store the state under in AsyncStorage.
 * @returns {*} - The value stored in AsyncStorage.
 */
export const getObjectData = async (key) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
  };

/**
 * Custom hook for managing items in AsyncStorage.
 *
 * @param {string} key - The key to store the state under in AsyncStorage.
 * @returns {Array} - An array containing the current state value and a function to update the state. The state contains both the value stored in AsyncStorage and a boolean indicating if the value is still loading.
 */
export function useStorageState(key) {
  const [state, setState] = useAsyncState();

  React.useEffect(() => {
    getObjectData(key).then((value) => {
      setState(value);
    });
  }, [key]);

  const setValue = React.useCallback(
    /**
     * Updates the state value and stores it in AsyncStorage.
     *
     * @param {*} value - The new value to set the state to.
     */
    (value) => {
      setState(value);
      storeDataAsync(key, value);
    },
    [key]
  );

  return [state, setValue];
}