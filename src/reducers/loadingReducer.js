import { DOWNLOAD_INITIALTODOLIST_START, DOWNLOAD_INITIALTODOLIST_SUCCESS } from '../actions/types';

const initialState = 'false';

export default function loadingReducer(state = initialState, action) {
  switch(action.type) {
    case DOWNLOAD_INITIALTODOLIST_START:
      return true;
    case DOWNLOAD_INITIALTODOLIST_SUCCESS:
      return false;
    default:
      return state
  }
}
