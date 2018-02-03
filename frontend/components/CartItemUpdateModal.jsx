import React, { Component } from 'react';

class CartItemUpdateModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.item.id,
      user_id: this.props.item.user_id,
      product_id: this.props.item.product.id,
      size: this.props.item.size,
      quantity: this.props.item.quantity
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.updateCartItem(this.state);
  }

  handleChange = field => {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }


  //need to set field on onChange methods for select
  render() {
    if (this.props.isOpen) {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <select value={this.state.size} onChange={this.handleChange('size')}>
              <option value="Size">Size</option>
              <option value="X-Small">X-Small</option>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
              <option value="X-Large">X-Large</option>
            </select>
            <select value={this.state.quantity} onChange={this.handleChange('quantity')}>
              <option value="Qty">Qty</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
            <input type="submit" value="UPDATE"></input>
          </form>
        </div>
      );
    }
    return null;
  }
}

export default CartItemUpdateModal;
