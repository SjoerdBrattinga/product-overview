<template>
  <div class="product-view">
    <div v-if="error" class="center">
      <i>error</i>
    </div>

    <div v-if="pending" class="center">
      <Icon name="svg-spinners:12-dots-scale-rotate" size="48" />
    </div>

    <div v-else>
      <ProductFilter />
      <div class="grid grid-cols-4 gap-5 p-4">
        <div v-for="product in productList" :key="product.ProductID">
          <ProductCard :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useProductStore } from '~~/stores/product';

  const store = useProductStore();

  const { pending, error } = await store.fetchProducts();
  const productList = computed(() => store.getProducts().value);
</script>

<style scoped>
  .center {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ProductCard {
    height: 250px;
    width: 250px;
  }
</style>
