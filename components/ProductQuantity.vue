<template>
  <div v-if="store.getItemQuantity(productId) > 0">
    <button @click="store.removeFromCart(productId)">-</button>
  </div>
  <div v-if="store.getItemQuantity(productId) > 0">
    {{ store.getItemQuantity(productId) }}
  </div>
  <!-- <div>
    <button @click="store.removeFromCart(productId)">-</button>
  </div>
  <div>
    {{ store.getItemQuantity(productId) }}
  </div> -->
  <div>
    <button @click="store.addToCart(productId)">+</button>
  </div>
</template>

<script setup lang="ts">
  import { useCartStore } from '~~/stores/cart';
  // withDefaults(
  defineProps<{
    productId: number;
  }>();
  //   {
  //     productId: () => {
  //       return -1;
  //     },
  //   }
  // );

  const store = useCartStore();
  // const quantity = computed(() => store.getItemQuantity(props.productId));
  // const getItemQuantity = storeToRefs(store);

  // const quantity = store.getItemQuantity(props.productId);
</script>

<style scoped></style>
