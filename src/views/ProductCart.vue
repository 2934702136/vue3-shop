<template>
  <div class="cart">
    <h1>购物车</h1>
    <div v-if="cartItems.length > 0">
      <div v-for="item in cartItems" :key="item.id" class="cart-item">
        <h3>{{ item.name }}</h3>
        <p>单价: ¥{{ item.price }}</p>
        <div>
          <button @click="decreaseQuantity(item.id)">-</button>
          <input
            type="number"
            v-model.number="item.count"
            @change="updateQuantity(item.id, item.count)"
            min="1"
            :max="getProductStock(item.id)"
          />
          <button @click="increaseQuantity(item.id)">+</button>
        </div>
        <p>小计: ¥{{ item.price * item.quantity }}</p>
        <button @click="removeFromCart(item.id)">移除</button>
      </div>
      <div class="cart-summary">
        <h3>总计: ¥{{ cartTotal }}</h3>
        <p>共 {{ cartItemCount }} 件商品</p>
        <button @click="checkout">结算</button>
      </div>
    </div>
    <div v-else>
      <p>购物车为空</p>
      <router-link to="/products">去购物</router-link>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const cartItems = computed(() => store.state.cart);
const cartTotal = computed(() => store.getters.cartTotal);
const cartItemCount = computed(() => store.getters.cartItemCount);

const getProductStock = (productId) => {
  const product = store.state.products.find((p) => p.id === productId);
  return product ? product.count : 0;
};

const removeFromCart = (productId) => {
  store.dispatch("removeFromCart", productId);
};

const updateQuantity = (productId, quantity) => {
  const stock = getProductStock(productId);
  if (quantity > stock) {
    quantity = stock;
  } else if (quantity < 1) {
    quantity = 1;
  }
  store.dispatch("updateQuantity", { productId, quantity });
};

const increaseQuantity = (productId) => {
  const item = store.state.cart.find((item) => item.id === productId);
  if (item) {
    updateQuantity(productId, item.quantity + 1);
  }
};

const decreaseQuantity = (productId) => {
  const item = store.state.cart.find((item) => item.id === productId);
  if (item && item.quantity > 1) {
    updateQuantity(productId, item.quantity - 1);
  }
};

const checkout = () => {
  alert(`结算成功! 总金额: ¥${cartTotal.value}`);
  // 这里可以添加结算逻辑
};
</script>

<style scoped lang="scss">
.cart {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;

  .cart-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #eee;

    div {
      display: flex;
      align-items: center;

      button {
        padding: 5px 10px;
        margin: 0 5px;
      }

      input {
        width: 50px;
        text-align: center;
        padding: 5px;
      }
    }

    button {
      padding: 5px 10px;
      background-color: #ff4444;
      color: white;
      border: none;
      border-radius: 3px;
      cursor: pointer;
    }
  }

  .cart-summary {
    margin-top: 20px;
    padding: 20px;
    background-color: #f8f8f8;
    text-align: right;

    button {
      padding: 10px 20px;
      background-color: #42b983;
      color: white;
      border: none;
      border-radius: 3px;
      cursor: pointer;
      font-size: 16px;
    }
  }
}
</style>
