import merge from 'lodash/merge';
import { RECEIVE_CATEGORIES, RECEIVE_CATEGORY }
  from '../actions/category_actions';

const CategoryReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_CATEGORIES:
      return merge({}, action.payload);
    case RECEIVE_CATEGORY:
      return merge({}, { [action.payload.id]: action.payload });
    default:
      return state;
  }
};

export default CategoryReducer;
