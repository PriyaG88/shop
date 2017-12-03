import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navbar, Nav, Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router';
import SessionModal from './session_modal';
import { logout } from '../actions/session_actions';

class HeaderNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: this.props.loggedIn
    };
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
    this.setState({ loggedIn: false });
  }

  handleLogin(e) {
    this.setState({ loggedIn: true });
  }

  render() {
    return (
      <Navbar className='header-nav'>
        <Navbar.Header>
          <Navbar.Brand className='logo'>
            <a href="/" className='logo'>theShop</a>
          </Navbar.Brand>
        </Navbar.Header>
        <div className='nav-links'>
          <a className='category-links' href='#'>Apparel</a>
          <a className='category-links' href='#'>Footwear</a>
          <a className='category-links' href='#'>Accessories</a>
          <a className='category-links' href='#'>All</a>
          <Nav pullRight>
            {this.state.loggedIn ? <Button onClick={this.handleLogout.bind(this)}>Log Out</Button>
          : <Button><SessionModal handleLogin={this.handleLogin.bind(this)}/></Button>
            }
          </Nav>
        </div>
      </Navbar>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser)
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderNav);
