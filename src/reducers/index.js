import { combineReducers } from 'redux';
import todolistReducer from './todolistReducer';
import filterReducer from './filterReducer';

export default combineReducers({
  todolist: todolistReducer,
  filter: filterReducer
});
