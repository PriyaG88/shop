export const RECEIVE_CART_ITEM = 'RECEIVE_CART_ITEM';
export const RECEIVE_CART_ITEMS = 'RECEIVE_CART_ITEMS';
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';
export const RECEIVE_CART_ITEM_ERRORS = 'RECEIVE_CART_ITEM_ERRORS';
export const RECEIVE_CART_ITEMS_ERRORS = 'RECEIVE_CART_ITEMS_ERRORS';
export const REMOVE_CART_ITEM_ERRORS = 'REMOVE_CART_ITEM_ERRORS';
import * as CartItemAPIUtil from '../util/cart_item_api_util';

export const fetchCartItems = () => dispatch => (
  CartItemAPIUtil.fetchCartItems().then(items => dispatch(receiveCartItems(items)),
  err => ( dispatch(receiveCartItemsErrors(err.responseJSON))))
);

export const addToCart = item => dispatch => (
  CartItemAPIUtil.addToCart(item).then(item => dispatch(receiveCartItem(item)),
  err => ( dispatch(receiveCartItemErrors(err.responseJSON))))
);

export const removeFromCart = id => dispatch => (
  CartItemAPIUtil.removeFromCart(id).then(() => dispatch(removeCartItem(id)),
  err => ( dispatch(removeCartItemErrors(err.responseJSON))))
);

const receiveCartItems = items => ({
  type: RECEIVE_CART_ITEMS,
  payload: items
});

const receiveCartItem = item => ({
  type: RECEIVE_CART_ITEM,
  payload: item
});

const receiveCartItemsErrors = errors => ({
  type: RECEIVE_CART_ITEMS_ERRORS,
  payload: errors
});

const removeCartItem = id => ({
  type: REMOVE_CART_ITEM,
  payload: id
});

const removeCartItemErrors = errors => ({
  type: REMOVE_CART_ITEM_ERRORS,
  payload: errors
});

const receiveCartItemErrors = errors => ({
  type: RECEIVE_CART_ITEM_ERRORS,
  payload: errors
});
