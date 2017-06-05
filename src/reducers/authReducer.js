import {
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL
} from '../actions/types';


const initialState = {
  // email: '',
  // password: '',
  user: null,
  error: '',
  loading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_START:
      return {...state, loading: true, error: ''}
    case LOGIN_USER_SUCCESS:
      return {...state, loading: false, user: action.payload, error: '' }
    case LOGIN_USER_FAIL:
      return {...state, loading: false, error: action.payload }
    default:
      return state;
  }
}
