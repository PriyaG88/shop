import { combineReducers } from 'redux';
import ProductReducer from './product_reducer';

const EntitiesReducer = combineReducers({
  products: ProductReducer
});

export default EntitiesReducer;
