import { useDispatch } from 'react-redux';
import { setLoggedIn } from '../actions/auth';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const SET_LOGGED_IN = 'SET_LOGGED_IN'; 
export const SAVE_USER_DATA = 'SAVE_USER_DATA';




export const loginSuccess = (userData) => (dispatch) => {
  console.log('loginSuccess - userData:', userData); // Print userData
  dispatch({
    type: LOGIN_SUCCESS,
    payload: userData,
  });
  dispatch(setLoggedIn());
  console.log('loginSuccess - Login successful'); // Print a debug message
};
