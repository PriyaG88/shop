import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

const nullUser = {
  currentUser: null
};

const SessionReducer = (state = nullUser, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, action.payload);
    default:
      return state;
  }
};

export default SessionReducer;
