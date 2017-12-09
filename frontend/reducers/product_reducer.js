import { RECEIVE_PRODUCTS, RECEIVE_PRODUCT } from '../actions/product_actions';
import merge from 'lodash/merge';

const ProductReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_PRODUCTS:
      return merge({}, action.payload);
    case RECEIVE_PRODUCT:
      return merge({}, { [action.payload.id]: action.payload} );
    default:
      return state;
  }
};

export default ProductReducer;
