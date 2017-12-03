export const allProduct = state => {
  return Object.values(state.entities.products);
};

export const singleProduct = (state, id) => {
  return state.entities.products[id];
};
