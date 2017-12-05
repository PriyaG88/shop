import { combineReducers } from 'redux';
import SessionErrorsReducer from './session_errors_reducer';
import ProductErrorsReducer from './product_errors_reducer';
import CategoryErrorsReducer from './category_errors_reducer';

const ErrorsReducer = combineReducers({
  session: SessionErrorsReducer,
  category: CategoryErrorsReducer,
  product: ProductErrorsReducer
});

export default ErrorsReducer;
