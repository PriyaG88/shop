import { connect } from 'react-redux';
import { fetchCartItems } from '../actions/cart_item_actions';
import { cartItems } from '../reducers/selector';
import Cart from './Cart';

const mapStateToProps = state => ({
  cart: cartItems(state),
  isLoggedIn: Boolean(state.session.currentUser)
});

const mapDispatchToProps = dispatch => ({
  fetchCartItems: () => dispatch(fetchCartItems())
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
