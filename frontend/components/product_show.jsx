import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SizeChart from './SizeChart';

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
    console.log(this.state.product);
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
            <SizeChart />
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          loading...
        </div>
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
