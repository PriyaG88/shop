import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import {fetchProduct} from '../actions/product_actions';
import {allProduct} from '../reducers/selector';
import SizeChart from './SizeChart';

const mapStateToProps = (state, ownProps) => ({
  products: allProduct(state),
  productId: parseInt(ownProps.match.params.id)
});

const mapDispatchToProps = dispatch => ({
  fetchProduct: id => dispatch(fetchProduct(id))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SizeChart));
