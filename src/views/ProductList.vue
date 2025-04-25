<template>
  <div class="products">
    <h1>商品列表</h1>
    <div class="product-list">
      <div v-for="product in products" :key="product.id" class="product-item">
        <h3>{{ product.name }}</h3>
        <p>价格: ￥{{ product.price }}</p>
        <p>库存: {{ product.count }}</p>
        <button @click="addToCart(product)" :disabled="product.count <= 0">
          {{ product.count > 0 ? "加入购物车" : "已售罄" }}
        </button>
        <router-link
          :to="{ name: 'product-detail', params: { id: product.id } }"
        >
          查看详情
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const products = computed(() => store.state.products);

const addToCart = (product) => {
  if (product.count > 0) {
    store.dispatch("addToCart", product);
  }
};
</script>

<style lang="scss" scoped>
.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
}

.product-item {
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 5px;
  text-align: center;

  button {
    margin: 10px 5px;
    padding: 5px 10px;
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 3px;
    cursor: pointer;

    &:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }
  }
}
</style>
