import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router';

class HeaderNav extends Component {
  constructor(props) {
    super(props);
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
          <a className='session-form-link category-links' href='#'>Login/Sign up</a>
        </div>
      </Navbar>
    );
  }
}

export default HeaderNav;
