import { SET_VISIBILITY_FILTER, VisibilityFilters } from '../actions/types';

const initialState = VisibilityFilters.SHOW_ALL;

export default function filterReducer(state = initialState, action) {
  switch(action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state
  }
}
