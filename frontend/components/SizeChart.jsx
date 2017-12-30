import React, {Component} from 'react';

class SizeChart extends Component {
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
    const product = this.state.product;
    if (product && product.category_name === 'Apparel') {
      return (
        <div className="add-to-cart-container">
          <span className="size-select-direction">Choose Size</span>
          <form className="add-to-cart-form">
            <select name="alpha-size-options">
              <option value="X-Small">X-Small</option>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
              <option value="X-Large">X-Large</option>
            </select>
            <button className="add-to-cart-btn">Add to Cart</button>
          </form>
        </div>
      );
    }
    return (
      <div className="add-to-cart-container">
        <span className="size-select-direction">Choose Size</span>
        <form className="add-to-cart-form">
          <select name="alpha-size-options">
            <option value="6">6</option>
            <option value="6.5">6.5</option>
            <option value="7">7</option>
            <option value="7.5">7.5</option>
            <option value="8">8</option>
            <option value="8.5">8.5</option>
            <option value="9">9</option>
            <option value="9.5">9.5</option>
            <option value="10">10</option>
          </select>
          <button className="add-to-cart-btn">Add to Cart</button>
        </form>
      </div>
    );
  }
}

export default SizeChart;
