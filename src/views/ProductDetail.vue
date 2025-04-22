<template>
  <div class="product-detail" v-if="product">
    <h1>{{ product.name }}</h1>
    <p>价格: ¥{{ product.price }}</p>
    <p>库存: {{ product.count }}</p>
    <div>
      <input
        type="number"
        v-model.number="quantity"
        min="1"
        :max="product.count"
      />
      <button @click="addToCart">加入购物车</button>
    </div>
    <router-link to="/products">返回商品列表</router-link>
  </div>
  <div v-else>
    <p>商品不存在</p>
    <router-link to="/products">返回商品列表</router-link>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

import { defineProps } from "vue"; // 手动导入（通常不需要）

const props = defineProps(["id"]);
const store = useStore();
const route = useRoute();
const quantity = ref(1);

const productId = props.id || route.params.id;
const product = computed(() =>
  store.state.products.find((p) => p.id == productId)
);

const addToCart = () => {
  if (product.value && product.value.stock >= quantity.value) {
    store.dispatch("addToCart", {
      ...product.value,
      quantity: quantity.value,
    });
    quantity.value = 1;
  }
};
</script>

<style scoped lang="scss">
.product-detail {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;

  input {
    padding: 5px;
    margin-right: 10px;
    width: 60px;
  }

  button {
    padding: 5px 15px;
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }
}
</style>
