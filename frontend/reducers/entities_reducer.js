import { combineReducers } from 'redux';
import CategoryReducer from './category_reducer';
import ProductReducer from './product_reducer';
import CartItemReducer from './cart_item_reducer';

const EntitiesReducer = combineReducers({
  categories: CategoryReducer,
  products: ProductReducer,
  cart: CartItemReducer
});

export default EntitiesReducer;
