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
      return (
        <div>
          <div className="product-show-img">
            <img src={this.state.product.image_url} />
          </div>
          <div className="product-show-title">
            {this.state.product.title}
          </div>
          <div>
            <p>
              {this.state.product.description}
            </p>
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
