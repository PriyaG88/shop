import React, { Component } from 'react';
import ProductIndexItem from './product_index_item';

class ProductIndex extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchProducts();
    console.log(this.props);
  }

  renderProduct() {
    const categoryId = parseInt(this.props.match.params.id);
    return this.props.products.filter(prod =>
      prod.category_id === categoryId).map(prod => (
      <ProductIndexItem
        key={prod.title}
        product={prod}  />
    ));
  }

  render() {
    const productItems = this.renderProduct();
    return (
      <div>
        {productItems}
      </div>
    );
  }
}

export default ProductIndex;
