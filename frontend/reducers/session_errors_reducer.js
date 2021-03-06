import {
  RECEIVE_LOGIN_ERRORS,
  RECEIVE_SIGNUP_ERRORS,
  RECEIVE_CURRENT_USER
} from '../actions/session_actions';

const SessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_LOGIN_ERRORS:
      return action.payload;
    case RECEIVE_SIGNUP_ERRORS:
      return action.payload;
    case RECEIVE_CURRENT_USER:
      return [];
    default:
      return state;
  }
};

export default SessionErrorsReducer;
