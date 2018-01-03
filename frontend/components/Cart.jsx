import React, { Component } from 'react';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: []
    };
  }

  componentWillMount() {
    this.props.fetchCartItems().then(items => this.setState({cart: items}));
  }

  render() {
    if (this.state.cart.length > 0) {
      return (
        <div>
          {this.state.cart.map(item => item.product.title)}
        </div>
      );
    } else {
      return (
        <div>loading...</div>
      );
    }
  }
}

export default Cart;
