import React from 'react';
import { Link } from 'react-router-dom';

const ProductIndexItem = ( {product} ) => {
  return (
    <div className='product-grid-container'>
      <Link to={`/products/${product.id}`}>
        <div className='product-image-container'>
          <img src={product.image_url}></img>
        </div>
        <div className='product-info-container'>
          <div className='product-title'>
            {product.title}
          </div>
          <div className='product-price'>
            ${product.price}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductIndexItem;
