<template>
  <div class="flex gap-2">
    <div v-if="quantity > 0">
      <button class="btn remove" @click="store.removeFromCart(productId)">
        <Icon name="fa6-solid:circle-minus" size="30" />
      </button>
    </div>
    <div v-if="quantity > 0" class="product-quantity">
      {{ quantity }}
    </div>
    <div>
      <button class="btn add" @click="store.addToCart(productId)">
        <Icon name="fa6-solid:circle-plus" size="30" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useCartStore } from '~~/stores/cart';

  const prop = defineProps<{ productId: number }>();

  const store = useCartStore();
  const quantity = computed(() => store.getItemQuantity(prop.productId));
</script>

<style scoped>
  .btn {
    border: none;
    border-radius: 50%;
    background-color: inherit;
    color: darkgrey;
  }
  .add:hover {
    color: green;
    background-color: inherit;
  }
  .remove:hover {
    color: red;
    background-color: inherit;
  }

  .product-quantity {
    font-size: larger;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
</style>
