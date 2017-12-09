import {
  RECEIVE_FETCH_PRODUCTS_ERRORS,
  RECEIVE_FETCH_PRODUCT_ERRORS,
  RECEIVE_PRODUCTS,
  RECEIVE_PRODUCT
 } from '../actions/product_actions';
 import merge from 'lodash/merge';

 const ProductErrorsReducer = (state = [], action) => {
   Object.freeze(state);
   switch(action.type) {
    case RECEIVE_FETCH_PRODUCTS_ERRORS:
      return merge({}, action.payload);
    case RECEIVE_FETCH_PRODUCT_ERRORS:
      return merge({}, action.payload);
    case RECEIVE_PRODUCTS:
      return [];
    case RECEIVE_PRODUCT:
      return [];
    default:
      return state;
   }
 };

 export default ProductErrorsReducer;
