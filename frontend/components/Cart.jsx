import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductIndexItem from './product_index_item';

class Cart extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchCartItems();
  }

  render() {
    const { cart } = this.props;

    return (
      <ul className="cart-item-list">
        {cart.map(item => (
          <li key={item.id}>
            <ProductIndexItem
            product={item.product} />
          </li>
        ))}
      </ul>
    );
  }
}

export default Cart;

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  fetchCartItems: PropTypes.func.isRequired
};
