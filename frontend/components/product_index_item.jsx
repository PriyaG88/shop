import React from 'react';

const ProductIndexItem = ( {product} ) => {
  return (
    <div>
      <div className='product-image-container'>
        <img src={product.image_url}></img>
      </div>
      <div className='product-title'>
        {product.title}
      </div>
      <div>
        ${product.price}
      </div>
    </div>
  );
};

export default ProductIndexItem;
