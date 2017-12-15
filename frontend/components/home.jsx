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
          made <span className="card-text-small">for</span>
        </div>
        <div className="card-text three">
          <span className="card-text-small">the</span> streets.
        </div>
        <img
          className="shop-men-card" src="http://res.cloudinary.com/priyag88/image/upload/c_scale,w_500/v1513232294/mubariz-mehdizadeh-380433_elaeh1.jpg" alt="Fashionable man" />
      </div>

    </div>
  );
};

export default HomePage;
