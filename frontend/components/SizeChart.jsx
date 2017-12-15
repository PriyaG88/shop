import React from 'react';

const SizeChart = (props) => {
  return (
    <div className="add-to-cart-container">
      <form className="add-to-cart-form">
        <label className="size-label">XS
          <input name="sizeSelect" type="radio" value="XS" className="size-input"></input>
        </label>
        <label className="size-label">S
          <input name="sizeSelect" type="radio" value="S" className="size-input"></input>
        </label>
        <label className="size-label">M
          <input name="sizeSelect" type="radio" value="M" className="size-input"></input>
        </label>
        <label className="size-label">L
          <input name="sizeSelect" type="radio" value="L" className="size-input"></input>
        </label>
        <label className="size-label">XL
          <input name="sizeSelect" type="radio" value="XL" className="size-input"></input>
        </label>
      </form>
    </div>
  );
};

export default SizeChart;
