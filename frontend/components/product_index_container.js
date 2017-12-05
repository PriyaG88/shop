import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchProducts } from '../actions/product_actions';
import { allProduct } from '../reducers/selector';
import ProductIndex from './product_index';

const mapStateToProps = (state, ownProps) => {
  const path = ownProps.location.pathname.slice(1);
  return {
    path,
    products: allProduct(state)
  };
};

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts())
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ProductIndex));
