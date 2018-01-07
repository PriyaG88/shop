import React, { Component } from 'react';

class Cart extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchCartItems();
  }

  render() {
    return (
      <div>
        {this.props.cart.map(item => item.product.title)}
      </div>
    );
  }
}

export default Cart;
