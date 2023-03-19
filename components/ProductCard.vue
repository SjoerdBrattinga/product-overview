<template>
  <div v-if="product" class="card">
    <div class="">
      <NuxtLink :to="`/products/${product.ProductID}`">
        <img
          :src="product.ProductPictures[0].Url"
          alt="Product Image"
          class="product-image zoom"
        />
        <p class="font-bold text-gray-500 truncate">
          {{ product.Brand }}
          {{ product.MainDescription }}
          {{ product.SubDescription }}
        </p>
        <p>{{ product.CommercialContent }}</p>
      </NuxtLink>
    </div>

    <div class="container mx-auto p-4 flex justify-between">
      <p class="font-bold text-gray-500 text-center">
        {{ product.ProductPrices[0].Price }}
      </p>
      <ProductQuantity :product-id="product.ProductID" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { Product } from '~~/types';

  defineProps<{ product: Product }>();
</script>

<style scoped>
  .product-image {
    display: block;
    /* max-height: 200px; */
    max-width: 100%;
    margin: 0 auto;
  }
  .zoom {
    /* padding: 50px;
    
    transition: transform 0.2s; /* Animation */
    background-color: inherit;
    width: 200px;
    height: 200px;
    margin: 0 auto;
  }

  .zoom:hover {
    transform: scale(
      1.1
    ); /* (120% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
  }
</style>
