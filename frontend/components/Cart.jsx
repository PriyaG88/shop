import React, { Component } from 'react';
import ProductIndexItem from './product_index_item';

class Cart extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchCartItems();
  }

  renderCartItems() {
    return this.props.cart.map(item => (
      <ProductIndexItem
        key={item.product.title + item.id}
        product={item.product} />
    ));
  }

  render() {
    const cartItems = this.renderCartItems();
    return (
      <ul>
        {cartItems}
      </ul>
    );
  }
}

export default Cart;
