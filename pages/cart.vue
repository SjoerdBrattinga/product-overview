<template>
  <div v-if="cartItems.length > 0" class="">
    <div v-for="item in cartItems" :key="item.productId">
      <CartItem :item="item" />
    </div>
    <div v-if="cartItems.length > 0" class="checkout">
      <div>
        {{ Math.round(totalPrice * 100) / 100 }}
        <button @click="store.cartItems = []">Afrekenen</button>
      </div>
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
    justify-content: flex-end;
    margin-top: 10px;
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
</style>
