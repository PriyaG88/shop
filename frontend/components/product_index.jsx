import React, { Component } from 'react';
import ProductIndexItem from './product_index_item';

class ProductIndex extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if (this.props.path === 'all') {
      this.props.fetchProducts();
    }
  }

  renderProduct() {
    return this.props.products.map(product => (
      <ProductIndexItem key={product.title} product={product} />
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
