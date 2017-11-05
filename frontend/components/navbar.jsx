import React, { Component } from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';

class HeaderNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const brand = 'theShop';
    return (
      <Navbar brand={brand} fixedTop inverse toggleNavKey={0}>
        <Nav right eventKey={0}>
        </Nav>
      </Navbar>
    );
  }
}

export default HeaderNav;
