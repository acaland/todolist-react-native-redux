import {ADD_TODO, TOGGLE_TODO } from '../actions/types';

const initialState = [];

export default function todolistReducer(state = initialState, action) {
	switch(action.type) {
    case ADD_TODO:
      return state.concat({
      	title: action.title,
        id: action.id,
        done: false
      })
    case TOGGLE_TODO:
      return state.map(todo => {
      	if (todo.id == action.id) {
        	return Object.assign({}, todo, {
          	done: !todo.done
          })
        }
        return todo
      }
      );
    default:
      return state;
  }
};
