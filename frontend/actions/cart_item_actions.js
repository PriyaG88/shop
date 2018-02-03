export const RECEIVE_CART_ITEM = 'RECEIVE_CART_ITEM';
export const RECEIVE_CART_ITEMS = 'RECEIVE_CART_ITEMS';
export const UPDATE_CART_ITEM = 'UPDATE_CART_ITEM';
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';
export const RECEIVE_CART_ITEM_ERRORS = 'RECEIVE_CART_ITEM_ERRORS';
export const RECEIVE_CART_ITEMS_ERRORS = 'RECEIVE_CART_ITEMS_ERRORS';
export const REMOVE_CART_ITEM_ERRORS = 'REMOVE_CART_ITEM_ERRORS';
export const RECEIVE_UPDATED_CART_ITEM_ERRORS = 'RECEIVE_UPDATED_CART_ITEM_ERRORS';
import * as CartItemAPIUtil from '../util/cart_item_api_util';

export const fetchCartItems = () => dispatch => (
  CartItemAPIUtil.fetchCartItems().then(items => dispatch(receiveCartItems(items)),
  err => ( dispatch(receiveCartItemsErrors(err.responseJSON))))
);

export const addToCart = item => dispatch => (
  CartItemAPIUtil.addToCart(item).then(item => dispatch(receiveCartItem(item)),
  err => ( dispatch(receiveCartItemErrors(err.responseJSON))))
);

export const updateCartItem = item => dispatch => (
  CartItemAPIUtil.updateCartItem(item).then(item => dispatch(receiveUpdatedCartItem(item)),
  err => ( dispatch(receiveUpdatedCartItemErrors(err.responseJSON))))
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

const receiveUpdatedCartItem = item => ({
  type: UPDATE_CART_ITEM,
  payload: item
});

const removeCartItem = id => ({
  type: REMOVE_CART_ITEM,
  payload: id
});

const receiveCartItemsErrors = errors => ({
  type: RECEIVE_CART_ITEMS_ERRORS,
  payload: errors
});


const removeCartItemErrors = errors => ({
  type: REMOVE_CART_ITEM_ERRORS,
  payload: errors
});

const receiveCartItemErrors = errors => ({
  type: RECEIVE_CART_ITEM_ERRORS,
  payload: errors
});

const receiveUpdatedCartItemErrors = errors => ({
  type: RECEIVE_UPDATED_CART_ITEM_ERRORS,
  payload: errors
});
