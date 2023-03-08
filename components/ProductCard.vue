<template>
  <div class="card">
    <div class="text-center m-4 truncate">
      <NuxtLink :to="`/products/${product.ProductID}`">
        <p class="font-bold text-gray-500">
          {{ product.Brand }}
          {{ product.MainDescription }}
          {{ product.SubDescription }}
        </p>
        <p>{{ product.CommercialContent }}</p>
        <img
          :src="product.ProductPictures[0].Url"
          alt="Product Image"
          class=""
        />
      </NuxtLink>
    </div>

    <div class="m-4">
      <p class="font-bold text-gray-500 text-center">
        {{ product.ProductPrices[0].Price }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { Product } from '~~/types';

  defineProps<{ product: Product }>();
</script>

<style scoped>
  .product-image {
    max-height: 100px;
    max-width: 80%;
    margin: 0 auto;
  }
</style>
