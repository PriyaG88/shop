import React from 'react';
import { Route } from 'react-router-dom';
import HeaderNav from './header_nav';
import HomePage from './home';


const App = () => {
  return (
    <div>
      <HeaderNav />
      <HomePage />
    </div>
  );
};

export default App;
