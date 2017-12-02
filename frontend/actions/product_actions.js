export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';
export const RECEIVE_FETCH_PRODUCTS_ERRORS = 'RECEIVE_FETCH_PRODUCTS_ERRORS';
export const RECEIVE_FETCH_PRODUCT_ERRORS = 'RECEIVE_FETCH_PRODUCT_ERRORS';
import * as ProductAPIUtil from '../util/product_api_util';

export const fetchProducts = () => dispatch => (
  ProductAPIUtil.fetchProducts().then(products => dispatch(receiveProducts(products)),
  err => ( dispatch(receiveFetchProductsErrors(err.responseJSON))))
);

export const fetchProduct = id => dispatch => (
  ProductAPIUtil.fetchProduct(id).then(product => dispatch(receiveProduct(product)),
  err => ( dispatch(receiveFetchProductErrors(err.responseJSON))))
);

const receiveProducts = products => ({
  type: RECEIVE_PRODUCTS,
  payload: products
});

const receiveProduct = product => ({
  type: RECEIVE_PRODUCT,
  payload: product
});

const receiveFetchProductsErrors = errors => ({
  type: RECEIVE_FETCH_PRODUCTS_ERRORS,
  payload: errors
});

const receiveFetchProductErrors = errors => ({
  type: RECEIVE_FETCH_PRODUCT_ERRORS,
  payload: errors
});
