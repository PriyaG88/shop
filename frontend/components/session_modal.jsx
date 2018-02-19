import React, { Component } from 'react';
import { connect } from 'react-redux';

import { login } from '../actions/session_actions';

class SessionModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      showModal: false
    };
  }

  handleChange(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login({
      email: this.state.email,
      password: this.state.password
    }).then(res => {
      this.close();
      this.props.handleLogin();
    });

  }

  render () {
    return (
      <div>
        
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user))
});

export default connect(null, mapDispatchToProps)(SessionModal);
