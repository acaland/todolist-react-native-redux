import { combineReducers } from 'redux';
import todolistReducer from './todolistReducer';
import filterReducer from './filterReducer';
import loadingReducer from './loadingReducer';
import authReducer from './authReducer';

const appReducer = combineReducers({
  todolist: todolistReducer,
  filter: filterReducer,
  loading: loadingReducer,
  auth: authReducer
});

export default appReducer;
