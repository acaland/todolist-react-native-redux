import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from './types';

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
