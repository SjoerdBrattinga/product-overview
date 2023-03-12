<template>
  <div>
    <div v-if="error">
      <i>error</i>
    </div>

    <div v-if="pending">
      <i>pending</i>
    </div>

    <div v-else class="grid grid-cols-4 gap-5">
      <div v-for="product in products" :key="product.ProductID">
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useProductStore } from '~~/stores/product';

  const store = useProductStore();
  const { pending, error } = await store.fetchProducts();
  const products = store.products;
</script>

<style scoped></style>
