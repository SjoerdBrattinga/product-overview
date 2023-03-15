<template>
  <div class="shadow-sm container p-4 product-filter">
    <div v-for="category in productCategories" :key="category.subGroupId">
      <button class="btn" @click="store.filterProducts(category.subGroupId)">
        {{ category.description }} ({{ category.products.length }})
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useProductStore } from '~~/stores/product';

  const store = useProductStore();
  const productCategories = store.categories;
</script>

<style scoped>
  .product-filter {
    margin-top: 0.1rem;
    background-color: white;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .btn {
    display: block;
  }
</style>
