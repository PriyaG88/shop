import { connect } from 'react-redux';
import { fetchProducts } from '../actions/product_actions';
import { allProduct, productsByCategory } from '../reducers/selector';
import ProductIndex from './product_index';

const mapStateToProps = (state, ownProps) => {
  return {
    products: allProduct(state)
  };
};

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts()),
});

export default
  connect(mapStateToProps, mapDispatchToProps)(ProductIndex);
