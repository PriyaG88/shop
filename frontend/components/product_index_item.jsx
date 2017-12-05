import React from 'react';

const ProductIndexItem = ( {product} ) => {
  return (
    <div className='product-grid-container'>
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
    </div>
  );
};

export default ProductIndexItem;
