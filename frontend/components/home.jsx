import React from 'react';
import HeaderNav from './navbar';

const HomePage = () => {
  return (
    <div className='homepage-container'>
      <div className='new-arrivals-banner' />
        <div className='categories-container'>
          <div className='accessories-banner' />
          <div className='apparel-banner' />
        </div>
    </div>
  );
};

export default HomePage;
