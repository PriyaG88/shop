import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './home';
import SessionFormContainer from './session_form_container';

const App = () => {
  return (
    <div>
      <HomePage />
      <Route path="/login" component={SessionFormContainer} />
      <Route path="/signup" component={SessionFormContainer} />
    </div>
  );
};

export default App;
