import React from 'react';
import { Route } from 'react-router-dom';
import HeaderNav from './header_nav';
import HomePage from './home';
import ProductIndexContainer from './product_index_container';
import ProductShowContainer from './product_show_container';
import CartContainer from './CartContainer';


const App = () => {
  return (
    <div>
      <header>
        <HeaderNav />
      </header>
      <Route exact path="/" component={ HomePage } />
      <Route path="/category/:id" component={ ProductIndexContainer } />
      <Route path="/products/:id" component={ ProductShowContainer } />
      <Route path="/cart" component={ CartContainer } />
    </div>
  );
};

export default App;
