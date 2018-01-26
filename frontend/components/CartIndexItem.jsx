import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CartIndexItem extends Component {
  constructor(props) {
    super(props);
  }

  handleRemove = (e) => {
    e.preventDefault();
    this.props.removeFromCart(this.props.item.id);
  }

  render() {
    const { image_url, id, title, price } = this.props.item.product;
    const { size, quantity } = this.props.item;

    return (
      <div>
        <Link to={`/products/${id}`}><img src={image_url} className="cart-item-img" /></Link>
        <div className="cart-item-details">
          <span className="cart-item-title">
            <Link to={`/products/${id}`} className="cart-item-link">{title}</Link>
          </span>
          <div>
            Size: <span>{size}</span>
          </div>
          <div>
            Qty: <span>{quantity} @ ${price}</span>
          </div>
          <div className="cart-item-actions">
            <input onClick={this.handleRemove} className="cart-item-btn" type="button" value="Remove" />
            <input className="cart-item-btn" type="button" value="Edit" />
          </div>
        </div>
      </div>
    );
  }

}

export default CartIndexItem;
