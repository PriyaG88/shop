export const allProduct = state => {
  return Object.values(state.entities.products);
};

export const singleProduct = (state, id) => {
  return state.entities.products[id];
};

export const allCategories = state => {
  return Object.values(state.entities.categories);
};

export const cartItems = state => {
  return Object.values(state.entities.cart);
};
