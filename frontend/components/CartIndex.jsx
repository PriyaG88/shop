import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartIndexItem from './CartIndexItem';

class CartIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  componentDidMount() {
    this.props.fetchCartItems();
  }

  toggleModal = () => {
    this.setState(prevState => {
      return { isOpen: !prevState.isOpen };
    });
  }

  render() {
    const { isLoggedIn, cart, removeFromCart, updateCartItem } = this.props;

    if (isLoggedIn) {
      return (
        <ul className="cart-item-list">
          {cart.map(item => (
            <li key={'item' + item.id} className="cart-item">
              <CartIndexItem
                item={item}
                removeFromCart={removeFromCart}
                updateCartItem={updateCartItem}
                isOpen={this.state.isOpen}
                toggleModal={this.toggleModal}
              />
            </li>
          ))}
        </ul>
      );
    }

    return (
      <p>Please Log in</p>
    );
  }
}

export default CartIndex;

CartIndex.propTypes = {
  cart: PropTypes.array.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  fetchCartItems: PropTypes.func.isRequired
};
