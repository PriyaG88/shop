import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CartItemUpdateModal from './CartItemUpdateModal';

class CartIndexItem extends Component {
  constructor(props) {
    super(props);
  }

  handleRemove = e => {
    e.preventDefault();
    this.props.removeFromCart(this.props.item.id);
  }

  handleUpdate = e => {
    e.preventDefault();
    this.props.toggleModal();
  }

  render() {
    const { image_url, id, title, price } = this.props.item.product;
    const { size, quantity } = this.props.item;
    const { isOpen, toggleModal, item } = this.props;

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
            <input onClick={this.handleUpdate} className="cart-item-btn" type="button" value="Edit" />
          </div>
        </div>
        <CartItemUpdateModal
          item={item}
          isOpen={isOpen}
          toggleModal={toggleModal}
          updateCartItem={this.props.updateCartItem} />
      </div>
    );
  }

}

export default CartIndexItem;
