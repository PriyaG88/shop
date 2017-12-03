import React, { Component } from 'react';

class ProductIndex extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchProducts();
  }

  render() {
    console.log(this.props.products);
    return (
      <div>...</div>
    );
  }
}

export default ProductIndex;
