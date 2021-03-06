import { connect } from 'react-redux';
import ProductShow from './product_show';
import { fetchProduct } from '../actions/product_actions';

const mapStateToProps = (state, ownProps) => ({
  products: state.products,
  productId: parseInt(ownProps.match.params.id)
});

const mapDispatchToProps = dispatch => ({
  fetchProduct: id => dispatch(fetchProduct(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductShow);
