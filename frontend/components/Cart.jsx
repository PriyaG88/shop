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
      <ul>
        {cart.map(item => (
          <ProductIndexItem
            key={item.id}
            product={item.product} />
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
