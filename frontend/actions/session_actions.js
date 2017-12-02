export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SIGNUP_ERRORS = 'RECEIVE_SIGNUP_ERRORS';
export const RECEIVE_LOGIN_ERRORS = 'RECEIVE_LOGIN_ERRORS';
import * as SessionAPIUtil from '../util/session_api_util';

export const signup = user => dispatch => (
  SessionAPIUtil.signup(user).then(user => dispatch(receiveCurrentUser(user)),
  err => ( dispatch(receiveSignupErrors(err.responseJSON))))
);

export const login = user => dispatch => (
  SessionAPIUtil.login(user).then(user => dispatch(receiveCurrentUser(user)),
  err => ( dispatch(receiveLoginErrors(err.responseJSON))))
);

export const logout = () => dispatch => (
  SessionAPIUtil.logout().then(() => dispatch(receiveCurrentUser(null)))
);

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  payload: currentUser
});

const receiveSignupErrors = errors => ({
  type: RECEIVE_SIGNUP_ERRORS,
  payload: errors
});

const receiveLoginErrors = errors => ({
  type: RECEIVE_LOGIN_ERRORS,
  payload: errors
});
