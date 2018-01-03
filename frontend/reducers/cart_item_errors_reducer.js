import merge from 'lodash/merge';
import {
  RECEIVE_CART_ITEM_ERRORS,
  RECEIVE_CART_ITEMS_ERRORS,
  RECEIVE_CART_ITEM,
  RECEIVE_CART_ITEMS
 }
  from '../actions/cart_item_actions';

const CartItemErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_CART_ITEM_ERRORS:
      return merge({}, action.payload);
    case RECEIVE_CART_ITEMS_ERRORS:
      return merge({}, action.payload);
    case RECEIVE_CART_ITEM:
      return [];
    case RECEIVE_CART_ITEMS:
      return [];
    default:
      return state;
  }
};

export default CartItemErrorsReducer;
