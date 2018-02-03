import merge from 'lodash/merge';
import {
  RECEIVE_CART_ITEM,
  RECEIVE_CART_ITEMS,
  UPDATE_CART_ITEM,
  REMOVE_CART_ITEM
} from '../actions/cart_item_actions';

const CartItemReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  
  switch(action.type) {
    case RECEIVE_CART_ITEMS:
      return merge({}, action.payload);
    case RECEIVE_CART_ITEM:
      return merge({}, state, action.payload);
    case UPDATE_CART_ITEM:
      newState = merge({}, state, { [action.payload.id]: action.payload });
      return newState;
    case REMOVE_CART_ITEM:
      newState = merge({}, state);
      delete newState[action.payload];
      return newState;
    default:
      return state;
  }
};

export default CartItemReducer;
