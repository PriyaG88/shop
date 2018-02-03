export const fetchCartItems = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/cart_items'
  });
};

export const addToCart = cartItem => {
  return $.ajax({
    method: 'POST',
    url: 'api/cart_items',
    data: { cartItem }
  });
};

export const updateCartItem = cartItem => {
  return $.ajax({
    method: 'PATCH',
    url: `api/cart_items/${cartItem.id}`,
    data: { cartItem }
  });
};

export const removeFromCart = id => {
  return $.ajax({
    method: 'DELETE',
    url: `api/cart_items/${id}`,
    data: { id }
  });
};
