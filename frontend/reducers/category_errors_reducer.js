import {
  RECEIVE_FETCH_CATEGORIES_ERRORS,
  RECEIVE_FETCH_CATEGORY_ERRORS,
  RECEIVE_CATEGORIES,
  RECEIVE_CATEGORY
} from '../actions/category_actions';
 import merge from 'lodash/merge';

 const CategoryErrorsReducer = (state = [], action) => {
   Object.freeze(state);

   switch(action.type) {
    case RECEIVE_FETCH_CATEGORIES_ERRORS:
      return merge({}, action.payload);
    case RECEIVE_FETCH_CATEGORY_ERRORS:
      return merge({}, action.payload);
    case RECEIVE_CATEGORIES:
      return [];
    case RECEIVE_CATEGORY:
      return [];
    default:
      return state;
   }
 };

 export default CategoryErrorsReducer;
