import { combineReducers } from 'redux';
import todolistReducer from './todolistReducer';
import filterReducer from './filterReducer';
import loadingReducer from './loadingReducer';

const appReducer = combineReducers({
  todolist: todolistReducer,
  filter: filterReducer,
  loading: loadingReducer
});

export default appReducer;
