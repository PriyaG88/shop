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
    return (
      <div>
        {this.props.cart}
      </div>
    );
  }
}

export default Cart;
