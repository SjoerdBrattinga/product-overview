<template>
  <div class="flex gap-2">
    <div v-if="quantity > 0">
      <button class="btn remove" @click="removeFromCart(productId)">
        <Icon name="fa6-solid:circle-minus" size="30" />
      </button>
    </div>
    <div v-if="quantity > 0" class="product-quantity">
      {{ quantity }}
    </div>
    <div>
      <button class="btn add" @click="addToCart(productId)">
        <Icon name="fa6-solid:circle-plus" size="30" />
      </button>
    </div>

    <!-- <Teleport to=".main">
      <div class="icon-wrap">
        <Transition name="add">
          <Icon v-if="added" name="fa6-solid:circle-plus" size="30" />
        </Transition>
      </div>
    </Teleport> -->
  </div>
</template>

<script setup lang="ts">
  import { useCartStore } from '~~/stores/cart';

  const prop = defineProps<{ productId: number }>();

  const store = useCartStore();
  const quantity = computed(() => store.getItemQuantity(prop.productId));
  // const added = ref(false);

  function addToCart(productId: number) {
    store.addToCart(productId);
    //  added.value = true;
    // setTimeout(() => (added.value = false), 10000);
  }

  function removeFromCart(productId: number) {
    store.removeFromCart(productId);
  }
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
  /* .icon-wrap {
    position: absolute;
    z-index: 999;
  } */
  /* enter transitions */
  .add-enter-from {
    /* opacity: 1; */
    /* transform: translate(0); */
  }
  /* .toast-enter-to {
    opacity: 1;
    transform: translateY(0);
  } */
  .add-enter-active {
    /* transition: all 0.3s ease; */
  }
  /* leave transitions */
  /* .toast-leave-from {
    opacity: 1;
    transform: translateY(0);
  } */
  .add-leave-to {
    /* opacity: 0;
    transform: translate(100px -100px); */
  }
  .add-leave-active {
    /* transition: all 0.3s ease; */
  }
</style>
