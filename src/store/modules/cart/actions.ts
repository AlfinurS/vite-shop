// Выставить продукты в корзине
export default {
  addCartProduct: ({ commit, state }, product) => {
    const result = JSON.parse(JSON.stringify(state.cartProducts));
    const productFind = result.find((product) => product.id === product.id);
    if (productFind) {
      ++productFind.quantity;
    } else {
      const cartProduct = JSON.parse(JSON.stringify(product));
      cartProduct.quantity = 1;
      result.push(cartProduct);
    }
    commit("SET_CART_PRODUCTS", result);
  },

  // Сбросить все значения модуля авторизации
  reset: ({ commit }) => {
    commit("RESET");
  },
};
