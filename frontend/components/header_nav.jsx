import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
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
            <a href="/">theShop</a>
          </Navbar.Brand>
        </Navbar.Header>
        <div className='nav-links'>
          <a className='category-links' href='#'>Apparel</a>
          <a className='category-links' href='#'>Footwear</a>
          <a className='category-links' href='#'>Accessories</a>
        </div>
      </Navbar>
    );
  }
}

export default HeaderNav;
