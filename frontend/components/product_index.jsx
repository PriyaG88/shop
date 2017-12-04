import React, { Component } from 'react';

class ProductIndex extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchProducts();
  }

  renderProduct() {
    return this.props.products.map(product => (
      <img key={product.title} src={product.image_url}></img>
    ));

  }

  render() {
    const productImages = this.renderProduct();
    return (
      <div>
        {productImages}
      </div>
    );
  }
}

export default ProductIndex;
