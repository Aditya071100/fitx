import AsyncStorage from '@react-native-async-storage/async-storage';

import { getDatabase, ref, child, get } from "firebase/database";

// Action creator to retrieve data from Firebase
export const retrievefireabse = (useruid) => async (dispatch) => {
  try {
    const dbRef = ref(getDatabase());
    const snapshot = await get(child(dbRef, `fitQUser/${useruid}`));
    if (snapshot.exists()) {
      const value = snapshot.val();
      dispatch({
        type: "RETRIEVE_FIREBASE_DATA_SUCCESS",
        payload: value,
      });
    }
  } catch (error) {
    console.log('Error retrieving data from Firebase:', error);
  }
};
export const retrievefireabsetrainer = (useruid) => async (dispatch) => {
  try {
    const dbRef = ref(getDatabase());
    const snapshot = await get(child(dbRef, `fitQTrainer/${useruid}`));
    if (snapshot.exists()) {
      const value = snapshot.val();
      dispatch({
        type: "RETRIEVE_FIREBASE_TRAINER_DATA_SUCCESS",
        payload: value,
      });
    }
  } catch (error) {
    console.log('Error retrieving data from Firebase:', error);
  }
};
export const retrievealltrainer = (useruid) => async (dispatch) => {
  try {
    const dbRef = ref(getDatabase());
    const snapshot = await get(child(dbRef, `fitQTrainer/`));
    if (snapshot.exists()) {
      const value = snapshot.val();
      dispatch({
        type: "RETRIEVE_FIREBASE_TRAINER_ALL_SUCCESS",
        payload: value,
      });
    }
  } catch (error) {
    console.log('Error retrieving data from Firebase:', error);
  }
};
// Action creator to retrieve data from AsyncStorage
export const retrieveData = () => async (dispatch) => {
  try {
    const jsonValue = await AsyncStorage.getItem('fitQUser');
    if (jsonValue) {
      const value = JSON.parse(jsonValue);
      dispatch({
        type: "RETRIEVE_DATA_SUCCESS",
        payload: value,
      });
    }
  } catch (error) {
    console.log('Error retrieving data:', error);
  }
};

// Add more actions as needed
