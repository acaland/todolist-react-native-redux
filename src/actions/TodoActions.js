import {
  TODO_CREATE,
  TODOLIST_FETCH_SUCCESS,
  DOWNLOAD_INITIALTODOLIST_START,
  DOWNLOAD_INITIALTODOLIST_SUCCESS
 } from './types';
import firebase from 'firebase';

export const todoCreate = ({ title, location, duedate, navigateBack }) => {
  const { currentUser } = firebase.auth();
  console.log('currentUser', currentUser.uid);
  navigateBack();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/todolist`)
      .push({ title, location, duedate, done: false })
      .then(() => dispatch({ type: 'TODO_CREATE'} ))
  }
}

export const todolistFetch = () => {

  console.log("carichiamo le todo da firebase");
  const { currentUser } = firebase.auth();
  console.log('currentUser', currentUser.uid);
  return (dispatch) => {
    dispatch({ type: DOWNLOAD_INITIALTODOLIST_START });
    firebase.database().ref(`/users/${currentUser.uid}/todolist`)
      .on('value', snapshot => {
        dispatch({ type: TODOLIST_FETCH_SUCCESS, payload: snapshot.val()})
        dispatch({ type: DOWNLOAD_INITIALTODOLIST_SUCCESS })
      })
  }
};
