<template>
  <div class="cart-item">
    <div class="img-wrap">
      <img :src="item.product.ProductPictures[0].Url" alt="Product Image" />
    </div>
    <div class="info">
      {{ item.product.Brand }}
      {{ item.product.MainDescription }}
      {{ item.product.SubDescription }}
    </div>
    <div class="price">
      {{ Math.round(item.totalPrice * 100) / 100 }}
    </div>
    <div class="quantity">
      <ProductQuantity :product="item.product" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { CartItem } from '~~/stores/cart';

  defineProps<{ item: CartItem }>();
</script>

<style scoped>
  .cart-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 10px;
    padding: 10px;
    background: white;
    box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }
  .img-wrap {
    height: 100px;
    width: 100px;
    max-width: 20%;
  }
  .info {
    width: 40%;
  }
  .price {
    width: 20%;
  }
  .quantity {
    width: 20%;
    width: 150px;
  }
</style>
