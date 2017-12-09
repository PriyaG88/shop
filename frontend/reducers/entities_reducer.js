import { combineReducers } from 'redux';
import CategoryReducer from './category_reducer';
import ProductReducer from './product_reducer';

const EntitiesReducer = combineReducers({
  categories: CategoryReducer,
  products: ProductReducer
});

export default EntitiesReducer;
