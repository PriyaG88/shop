import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      email: '',
      password: '',
      first_name: '',
      last_name: ''
    };
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to='/signup'>Sign up instead</Link>;
    }
    return <Link to='/login'>Log in instead</Link>;
  }

  handleChange(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user;
    if (this.props.formType === 'login') {
      user = {
        email: this.state.email,
        password: this.state.password
      };
    } else {
      user = this.state;
    }
    this.props.processForm(user);
  }

  render() {
    if (this.props.formType === 'login') {

      return (
        <div className='login-session-container'>
          <form onSubmit={this.handleSubmit}>
            Please {this.props.formType} or {this.navLink()}
            <label>Email
              <input
                type='email'
                value={this.state.email}
                onChange={this.handleChange('email')}
                placeholder='Email'></input>
            </label>
            <label>Password
              <input
                type='password'
                value={this.state.password}
                onChange={this.handleChange('password')}
                placeholder='Password'></input>
            </label>
            <input type='submit' value='Submit'/>
          </form>
        </div>
      );
    }
    return (
      <div className='signup-session-container'>
        <form onSubmit={this.handleSubmit}>
          <label>Email
            <input
              type='email'
              value={this.state.email}
              onChange={this.handleChange('email')}
              placeholder='Email'></input>
          </label>
          <label>Password
            <input
              type='password'
              value={this.state.password}
              onChange={this.handleChange('password')}
              placeholder='Password'></input>
          </label>
          <label>First Name
            <input
              type='text'
              value={this.state.first_name}
              onChange={this.handleChange('first_name')}
              placeholder='First Name'></input>
          </label>
          <label>Last Name
            <input
              type='text'
              value={this.state.last_name}
              onChange={this.handleChange('last_name')}
              placeholder='Last Name'></input>
          </label>
          <input type='submit' value='Submit'/>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
