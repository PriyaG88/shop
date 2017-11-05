import React from 'react';
import HeaderNav from './header_nav';

const HomePage = () => {
  return (
    <div className='homepage-container'>
      <HeaderNav />
      <div className='new-arrivals-container'>
        <div className='new-arrivals-banner' />
      </div>
        <div className='categories-container'>
          <div className='accessories-banner' />
          <div className='apparel-banner' />
        </div>
    </div>
  );
};

export default HomePage;
