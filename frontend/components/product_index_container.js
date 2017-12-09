import { connect } from 'react-redux';
import { withRouter } from 'react-router';
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

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ProductIndex));
