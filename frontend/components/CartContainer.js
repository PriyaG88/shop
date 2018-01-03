import { connect } from 'react-redux';
import { fetchCartItems } from '../actions/cart_item_actions';
import Cart from '/Cart';

const mapStateToProps = state => ({
  cart: state.cart
});

const mapDispatchToProps = dispatch => ({
  fetchCartItems: () => dispatch(fetchCartItems())
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
