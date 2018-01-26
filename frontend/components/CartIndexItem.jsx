import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const CartIndexItem = ({ item }) => {
  const { image_url, id, title } = item.product;

  return (
    <div>
      <Link to={`/products/${id}`}><img src={image_url} className="cart-item-img" /></Link>
      <div className="cart-item-details">
        <span className="cart-item-title">
          <Link to={`/products/${id}`} className="cart-item-link">{title}</Link>
        </span>
        <div>
          Size: <span>{item.size}</span>
        </div>
        <div>
          Qty: <span>{item.quantity} @ ${item.product.price}</span>
        </div>
        <div className="cart-item-actions">
          <input className="cart-item-btn" type="button" value="Remove"></input>
          <input className="cart-item-btn" type="button" value="Edit"></input>
        </div>
      </div>
    </div>
  );
};

export default CartIndexItem;
