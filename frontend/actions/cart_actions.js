import * as CartAPIUtil from '../util/cart_api_util';

export const addToCart = id => dispatch => (
  CartAPIUtil.addToCart(id).then(item => dispatch(receiveCartItem(item)),
  err => ( dispatch(receiveCartItemErrors(err.responseJSON))))
);
