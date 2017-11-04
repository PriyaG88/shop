import RECEIVE_CURRENT_USER from '../actions/session_actions';
import merge from 'lodash/merge';

const nullUser = {
  currentUser: null
};

const SessionReducer = (state = nullUser, action) => {
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, action.currentUser);
    default:
      return state;
  }
};

export default SessionReducer;
