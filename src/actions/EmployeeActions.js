import Firebase from 'firebase';
import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEES_FETCH_SUCCESS,
  EMPLOYEE_SAVE_SUCCESS,
  INIT_EMPLOYEE_CREATE
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
          dispatch({type: EMPLOYEE_CREATE});
          Actions.employeeList({type: 'reset'})
        })
  }
};

export const employeesFetch = () => {
  return dispatch => {
    const {currentUser} = Firebase.auth();
    Firebase.database().ref(`/users/${currentUser.uid}/employee`)
        .on('value', snapshot => {
          dispatch({type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val()})
        });
  }
};

export const employeeSave = ({name, phone, shift, uid}) => {
  const {currentUser} = Firebase.auth();
  return dispatch => {
    Firebase.database().ref(`/users/${currentUser.uid}/employee/${uid}`)
        .set({name, phone, shift})
        .then(() => {
          dispatch({type: EMPLOYEE_SAVE_SUCCESS});
          Actions.employeeList({type: 'reset'})
        });

  }
};

export const initEmployeeCreate = () => {
  return {
    type: INIT_EMPLOYEE_CREATE
  }
};

export const employeeDelete = ({uid}) => {
  const {currentUser} = Firebase.auth();
  console.log(uid);
  const path = `/users/${currentUser.uid}/employee/${uid}`


  Firebase.database().ref(path)
      .remove()
      .then((res) => {
        console.log(res);
        Actions.employeeList({type: 'reset'})
      })
      .catch(err => console.log(err));


};