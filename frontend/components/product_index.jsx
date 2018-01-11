import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductIndexItem from './product_index_item';

class ProductIndex extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchProducts();
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
      <div className="product-index-container">
        {productItems}
      </div>
    );
  }
}

export default ProductIndex;

ProductIndex.propTypes = {
  products: PropTypes.array.isRequired,
  fetchProducts: PropTypes.func.isRequired
};
