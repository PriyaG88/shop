import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const CartIndexItem = ({ item }) => {
  const { image_url, id, title } = item.product;

  return (
    <div>
      <img src={image_url} className="cart-item-img" />
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
      </div>
    </div>
  );
};

export default CartIndexItem;
