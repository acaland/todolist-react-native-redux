import {
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL
} from './types';
import firebase from 'firebase';

export const loginUser = ({ email, password, navigateTo }) => {
  return (dispatch) => {
    console.log("Siamo nella loginUser action: ", email, password);
    dispatch({ type: LOGIN_USER_START });
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user, navigateTo))
      .catch(error => {
        console.log("Trying to create a new user");
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => loginUserSuccess(dispatch, user, navigateTo))
          .catch(error => loginUserFailed(dispatch, error))
      });
  }
};

const loginUserSuccess = (dispatch, user, navigateTo) => {
  console.log("utente loggato", user);
  dispatch({ type: LOGIN_USER_SUCCESS, payload: user })
  // vai a home screen
  navigateTo('home')
}

const loginUserFailed = (dispatch, error)  => {
  console.log("non sono riuscito neanche a creare un account");
  dispatch({ type: LOGIN_USER_FAIL, payload: error })
}
