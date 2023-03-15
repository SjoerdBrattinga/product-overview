<template>
  <div class="wrapper">
    <Icon name="typcn:shopping-cart" size="30" />
    <div class="cart-items">
      {{ store.totalItems() }}
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useCartStore } from '~~/stores/cart';

  const store = useCartStore();
</script>

<style scoped>
  .wrapper {
    position: relative;
    width: 35px;
    border: 1px solid gray;
    border-radius: 15%;
  }
  .wrapper:hover {
    border-radius: 0%;
    border-color: red;
  }
  Icon {
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .cart-items {
    position: absolute;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    top: -10px;
    right: -8px;
    font-size: 12px;
    padding: 0 5px;
    background: red;
    color: white;
  }
</style>
