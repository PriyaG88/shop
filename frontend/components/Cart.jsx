import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductIndexItem from './product_index_item';

class Cart extends Component {
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
    const { isLoggedIn, cart } = this.props;

    if (isLoggedIn) {
      return (
        <ul className="cart-item-list">
          {cart.map(item => (
            <li key={item.id} className="cart-item">
              <ProductIndexItem product={item.product} />
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

export default Cart;

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  fetchCartItems: PropTypes.func.isRequired
};
