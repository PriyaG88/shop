import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
          <img src={product.image_url} />
          <div className="product-show-info">
            <div className="product-show-title">
              {product.title}
            </div>
            <div className="product-show-desc">
              <p>
                {product.description}
              </p>
            </div>
            <div>
              ${product.price}
            </div>
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
