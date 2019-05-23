import Firebase from 'firebase';

import {
  EMAIL_CHANGED,
  LOGIN_USER_SUCCESS,
  PASSWORD_CHANGED,
  LOGIN_USER_FAIL,
  LOGIN_USER_START
} from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  }
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  }
};

export const loginUser = ({email, password}) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER_START})
    Firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => loginUserSuccess(dispatch,user))
        .catch(() => {
          Firebase.auth().createUserWithEmailAndPassword(email, password)
              .then( user => loginUserSuccess(dispatch,user))
              .catch(() => loginUserFail(dispatch));
        });
  };
};

const loginUserFail = (dispatch) => {
  dispatch({
    type: LOGIN_USER_FAIL
  })
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
};