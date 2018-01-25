import React from 'react';
import { Link } from 'react-router-dom';

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
      </div>
      <div className="shop-by-container">
        <Link to="/">
          <img src="http://res.cloudinary.com/priyag88/image/upload/c_scale,w_771/v1516836971/pexels-photo-428340_dsmy3a.jpg" />
        </Link>
        <Link to="/">
          <img src="http://res.cloudinary.com/priyag88/image/upload/c_scale,w_771/v1516837223/pexels-photo-301328_kdtgli.jpg" />
        </Link>

      </div>

    </div>
  );
};

export default HomePage;
