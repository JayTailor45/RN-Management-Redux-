import Firebase from 'firebase';
import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEES_FETCH_SUCCESS
} from './types';
import {Actions} from "react-native-router-flux";

export const employeeUpdate = ({prop, value}) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: {prop, value}
  }
};

export const employeeCreate = ({name, phone, shift}) => {
  const {currentUser} = Firebase.auth();
  return (dispatch) => {
    Firebase.database().ref(`/users/${currentUser.uid}/employee`)
        .push({name, phone, shift})
        .then(() => {
          dispatch({ type: EMPLOYEE_CREATE});
          Actions.employeeList({type: 'reset'})
        })
  }
};

export const employeesFetch = () => {
  return dispatch => {
    const { currentUser } = Firebase.auth();
    Firebase.database().ref(`/users/${currentUser.uid}/employee`)
        .on('value', snapshot => {
          dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val()})
        });
  }
};