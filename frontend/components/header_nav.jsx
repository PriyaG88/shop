import React, { Component } from 'react';

class HeaderNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className='header-nav'>
        <div className='nav-links'>
          <a className='category-links' href='#'>Apparel</a>
          <a className='category-links' href='#'>Footwear</a>
          <a className='category-links' href='#'>Accessories</a>
        </div>
        <div className='session-container'>

        </div>
      </nav>
    );
  }
}

export default HeaderNav;
