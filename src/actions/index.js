import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, DOWNLOAD_TODOLIST } from './types';

let nextTodoId = 0

export const addTodo = text => {
  const action = {
  	type: ADD_TODO,
  	title: text,
    id: nextTodoId++
	};
	return action;
};

export const toggleTodo = id => {
  const action = {
    type: TOGGLE_TODO,
    id: id
  }
  return action;
};

export const setVisibilityFilter = filter => {
	return {
    type: SET_VISIBILITY_FILTER,
    filter: filter
  }
};

export const downloadTodolist = () => {
  return (dispatch) => {
    fetch('https://www.dmi.unict.it/~calanducci/LAP2/initialTodolist.json',
      {
        headers: {
          'Cache-Control': 'no-cache'
        }
      })
      .then(response => response.json())
      .then(responseData => dispatch({
        type: DOWNLOAD_TODOLIST,
        payload: responseData.todolist
      }))
      .catch((error) => dispatch({ type: 'NETWORK_ERROR' }))
  }
}
