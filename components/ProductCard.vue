<template>
  <div v-if="product" class="card">
    <div class="">
      <NuxtLink :to="`/products/${product.ProductID}`">
        <div class="img-wrap">
          <img
            :src="product.ProductPictures[0].Url"
            alt="Product Image"
            class="zoom"
          />
        </div>
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
  .img-wrap {
    overflow: hidden;
    height: 250px;
    max-width: 100%;
    margin: 0 auto 0.5rem;
  }

  .zoom {
    max-height: 250px;
    margin: 0 auto;
    transition: transform 0.3s ease-out;
  }

  .zoom:hover {
    transform: scale(1.1);
  }
</style>
