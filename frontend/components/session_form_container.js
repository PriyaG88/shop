import { connect } from 'react-redux';
import { login, signup } from '../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  formType: ownProps.location.pathname.slice(1),
  errors: state.errors.session
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;
  return {
    processForm: user => dispatch(processForm(user)),
    formType
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
