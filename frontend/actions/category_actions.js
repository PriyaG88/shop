export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';
export const RECEIVE_CATEGORY = 'RECEIVE_CATEGORY';
export const RECEIVE_FETCH_CATEGORIES_ERRORS = 'RECEIVE_FETCH_CATEGORIES_ERRORS';
export const RECEIVE_FETCH_CATEGORY_ERRORS = 'RECEIVE_FETCH_CATEGORY_ERRORS';
import * as CategoryAPIUtil from '../util/category_api_util';

export const fetchCategories = () => dispatch => (
  CategoryAPIUtil.fetchCategories().then(categories => dispatch(receiveCategories(categories)),
  err => ( dispatch(receiveFetchCategoriesErrors(err.responseJSON))))
);

export const fetchCategory = id => dispatch => (
  CategoryAPIUtil.fetchCategory(id).then(category => dispatch(receiveCategory(category)),
  err => ( dispatch(receiveFetchCategoryErrors(err.responseJSON))))
);

const receiveCategories = categories => ({
  type: RECEIVE_CATEGORIES,
  payload: categories
});

const receiveCategory = category => ({
  type: RECEIVE_CATEGORY,
  payload: category
});

const receiveFetchCategoriesErrors = errors => ({
  type: RECEIVE_FETCH_CATEGORIES_ERRORS,
  payload: errors
});

const receiveFetchCategoryErrors = errors => ({
  type: RECEIVE_FETCH_CATEGORY_ERRORS,
  payload: errors
});
