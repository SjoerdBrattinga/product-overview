<template>
  <div v-if="cartItems.length > 0">
    <div v-for="item in cartItems" :key="item.productId">
      <CartItem :item="item" />
    </div>
    <div v-if="cartItems.length > 0" class="checkout">
      <button @click="store.cartItems = []">Afrekenen</button>
      <div class="price">Totaal: {{ Math.round(totalPrice * 100) / 100 }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useCartStore } from '~~/stores/cart';

  const store = useCartStore();
  const cartItems = computed(() => store.cartItems);
  const totalPrice = computed(() => store.totalPrice());
</script>

<style scoped>
  .checkout {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 15px;
    padding: 10px;
    background: white;
    box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }

  button {
    border: 1px solid black;
    border-radius: 10px;
    height: 50px;
    width: 100px;
  }
  .price {
    font-size: 1.1rem;
    font-weight: 700;
  }
</style>
