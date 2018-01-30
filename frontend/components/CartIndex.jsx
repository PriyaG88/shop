import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartIndexItem from './CartIndexItem';

class CartIndex extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCartItems();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.isLoggedIn !== nextProps.isLoggedIn) {
      this.props.fetchCartItems();
    }
  }
  render() {
    const { isLoggedIn, cart, removeFromCart } = this.props;
    if (isLoggedIn) {
      return (
        <ul className="cart-item-list">
          {cart.map(item => (
            <li key={item.id} className="cart-item">
              <CartIndexItem
                item={item}
                removeFromCart={removeFromCart}
              />
            </li>
          ))}
        </ul>
      );
    }

    return (
      <p>Please Log in</p>
    );
  }
}

export default CartIndex;

CartIndex.propTypes = {
  cart: PropTypes.array.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  fetchCartItems: PropTypes.func.isRequired
};
