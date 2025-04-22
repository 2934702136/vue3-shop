import { createStore } from "vuex";

export default createStore({
  state: {
    cart: [],
    products: [
      { id: 1, name: "product1", price: 100, count: 100 },
      { id: 2, name: "product2", price: 200, count: 200 },
      { id: 3, name: "product3", price: 300, count: 300 },
    ],
  },
  mutations: {
    addToCart(state, product) {
      const item = state.cart.find((item) => item.id === product.id);
      if (item) {
        item.count++;
      } else {
        state.cart.push({ ...product, count: 1 });
      }
    },
    removeFromCart(state, productId) {
      state.cart = state.cart.filter((item) => item.id !== productId);
    },
    updateCount(state, { productId, count }) {
      const item = state.cart.find((item) => item.id === productId);
      if (item) {
        item.count = count;
      }
    },
  },
  actions: {
    addToCart({ commit }, product) {
      commit("addToCart", product);
    },
    removeFromCart({ commit }, productId) {
      commit("removeFromCart", productId);
    },
    updateCount({ commit }, payload) {
      commit("updateCount", payload);
    },
  },
  getters: {
    cartTotal(state) {
      return state.cart.reduce(
        (total, item) => total + item.price * item.count,
        0
      );
    },
    cartItemCount(state) {
      return state.cart.reduce((total, item) => total + item.count, 0);
    },
  },
});
