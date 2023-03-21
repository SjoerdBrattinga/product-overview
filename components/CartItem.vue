<template>
  <div class="cart-item">
    <div class="first-half">
      <div class="img-wrap">
        <img :src="item.product.ProductPictures[0].Url" alt="Product Image" />
      </div>
      <div class="info">
        <p class="font-bold">{{ item.product.Brand }}</p>
        {{ item.product.MainDescription }}
        {{ item.product.SubDescription }}
      </div>
    </div>
    <div class="second-half">
      <ProductQuantity :product="item.product" />
      <div class="price">
        {{ Math.round(item.totalPrice * 100) / 100 }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { CartItem } from '~~/stores/cart';

  defineProps<{ item: CartItem }>();
</script>

<style scoped>
  .cart-item {
    max-width: 100%;
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
  .first-half {
    min-width: 300px;
    display: flex;
    flex-direction: row;
    justify-items: flex-start;
    align-items: center;
  }
  .second-half {
    display: flex;
    flex-direction: row;
    justify-items: flex-end;
    align-items: center;
  }
  .img-wrap {
    height: 100px;
    width: 100px;
    margin: 0.5rem;
  }
  .info {
    max-width: 30%;
  }
  .price {
    width: 50px;
    font-size: 1.1rem;
    text-align: end;
  }
</style>
