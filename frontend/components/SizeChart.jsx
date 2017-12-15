import React from 'react';

const SizeChart = (props) => {
  if (props.category) {
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
  }
  return (
    <div className="add-to-cart-container">
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
};

export default SizeChart;
