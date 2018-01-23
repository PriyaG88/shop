import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SizeChartContainer from './SizeChartContainer';

class ProductShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: ''
    };
  }

  componentWillMount() {
    this.props.fetchProduct(this.props.productId)
    .then(product => this.setState({product: product.payload}));
  }

  render() {
    if (this.state.product) {
      const product = this.state.product;
      return (
        <div className="product-show-container">
          <img src={product.big_image_url} />
          <div className="product-show-info">
            <h1 className="product-show-title">
              {product.title}
            </h1>
            <p className="product-show-desc">
              {product.description}
            </p>
            <div>
              ${product.price}
            </div>
            <SizeChartContainer />
          </div>
        </div>
      );
    } else {
      return (
        <div />
      );
    }
  }
}

export default ProductShow;

ProductShow.propTypes = {
  products: PropTypes.object,
  productId: PropTypes.number.isRequired,
  fetchProduct: PropTypes.func.isRequired
};
