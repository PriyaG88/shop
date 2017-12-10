import React, { Component } from 'react';

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
      return (
        <div>
          <img src={this.state.product.image_url} />
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
