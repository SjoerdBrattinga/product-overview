<template>
  <div v-if="product">
    <ProductCard :product="product" />
  </div>
  <div v-else>
    <i>error</i>
  </div>
</template>

<script setup>
  import { useProductsStore } from '~~/stores/product';

  const { id } = useRoute().params;
  const store = useProductsStore();
  const product = store.getProductById(+id);
</script>

<style scoped></style>
