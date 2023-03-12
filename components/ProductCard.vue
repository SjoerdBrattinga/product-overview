<template>
  <div v-if="product" class="card">
    <div class="text-center m-4">
      <NuxtLink :to="`/products/${product.ProductID}`">
        <img
          :src="product.ProductPictures[0].Url"
          alt="Product Image"
          class=""
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
    max-height: 100px;
    max-width: 80%;
    margin: 0 auto;
  }
</style>
