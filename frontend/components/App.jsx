import React from 'react';
import { Route } from 'react-router-dom';
import HeaderNav from './header_nav';
import HomePage from './home';
import ProductIndexContainer from './product_index_container';


const App = () => {
  return (
    <div>
      <header>
        <HeaderNav />
      </header>
      <Route exact path="/" component={ HomePage } />
      <Route path="/category/:id" component={ ProductIndexContainer } />
    </div>
  );
};

export default App;
