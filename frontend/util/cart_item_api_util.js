export const fetchCartItems = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/cart_item'
  });
};

export const addToCart = cartItem => {
  return $.ajax({
    method: 'POST',
    url: '/api/cart_item',
    data: { cartItem }
  });
};

export const removeFromCart = cartItemId => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/cart_item/${cartItemId}`
  });
};
