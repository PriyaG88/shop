import React from 'react';
import { Link } from 'react-router';

const HomePage = () => {
  return (
    <div className='homepage-container'>
      <div className="cards-container">
        <div className="card-text one">
          Style
        </div>
        <div className="card-text two">
          Made <span className="card-text-small">for</span>
        </div>
        <div className="card-text three">
          <span className="card-text-small">the</span> Streets.
        </div>
      </div>
    </div>
  );
};

export default HomePage;
