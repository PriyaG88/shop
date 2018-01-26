import { connect } from 'react-redux';
import { fetchCartItems, removeFromCart } from '../actions/cart_item_actions';
import { cartItems } from '../reducers/selector';
import CartIndex from './CartIndex';

const mapStateToProps = state => {
  let cart = [];
  if (state.session.currentUser) {
    cart = cartItems(state);
  }
  return {
    isLoggedIn: Boolean(state.session.currentUser),
    cart
  };
};

const mapDispatchToProps = dispatch => ({
  fetchCartItems: () => dispatch(fetchCartItems()),
  removeFromCart: id => dispatch(removeFromCart(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIndex);
