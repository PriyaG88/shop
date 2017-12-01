import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import RootReducer from '../reducers/root_reducer';

const configureStore = (preloadedState = {}) => {
  return createStore(RootReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(thunk, logger)));
};

export default configureStore;
