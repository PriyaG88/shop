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
          </form>
        </div>
      );
    }
    return (
      <div className="add-to-cart-container">
        <span className="size-select-direction">Choose Size</span>
        <form className="add-to-cart-form">
          <label className="size-label">6
            <input name="sizeSelect" type="radio" value="6" className="size-input"></input>
          </label>
          <label className="size-label">6.5
            <input name="sizeSelect" type="radio" value="6.5" className="size-input"></input>
          </label>
          <label className="size-label">7
            <input name="sizeSelect" type="radio" value="7" className="size-input"></input>
          </label>
          <label className="size-label">7.5
            <input name="sizeSelect" type="radio" value="7.5" className="size-input"></input>
          </label>
          <label className="size-label">8
            <input name="sizeSelect" type="radio" value="8" className="size-input"></input>
          </label>
          <label className="size-label">8.5
            <input name="sizeSelect" type="radio" value="8.5" className="size-input"></input>
          </label>
          <label className="size-label">9
            <input name="sizeSelect" type="radio" value="9" className="size-input"></input>
          </label>
          <label className="size-label">9.5
            <input name="sizeSelect" type="radio" value="9.5" className="size-input"></input>
          </label>
          <label className="size-label">10
            <input name="sizeSelect" type="radio" value="10" className="size-input"></input>
          </label>
        </form>
      </div>
    );
  }
}

export default SizeChart;
