import merge from 'lodash/merge';
import { RECEIVE_CART_ITEM, RECEIVE_CART_ITEMS }
  from '../actions/cart_item_actions';

const CartItemReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_CART_ITEMS:
      return merge({}, action.payload);
    case RECEIVE_CART_ITEM:
      return merge({}, state, action.payload);
    default:
      return state;
  }
};

export default CartItemReducer;
