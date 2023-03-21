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
      <div class="product-grid grid">
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
  .product-grid {
    display: grid;
    gap: 1.25rem;
    padding: 1rem;
  }

  ProductCard {
    height: 250px;
    width: 100%;
  }

  @media (max-width: 350px) {
    .product-grid {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
  }
  @media (min-width: 600px) {
    .product-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
  @media (min-width: 800px) {
    .product-grid {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
  @media (min-width: 1000px) {
    .product-grid {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  }
</style>
