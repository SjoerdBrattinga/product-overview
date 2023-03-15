<template>
  <div class="flex gap-2">
    <!-- <div v-if="quantity > 0">
      <button
        class="remove-btn hover:bg-red-300"
        @click="store.removeFromCart(productId)"
      >
        <Icon name="fa6-solid:circle-minus" />
        -
      </button>
    </div>
    <div v-if="quantity > 0" class="product-quantity">
      <h1>{{ quantity }}</h1>
    </div>
    <div>
      <button
        class="add-btn hover:bg-green-300"
        @click="store.addToCart(productId)"
      >
        <Icon name="fa6-solid:circle-plus" />
        +
      </button>
      <button class="btn">
        <Icon name="fa6-solid:circle-plus" size="48" />
      </button>
    </div> -->
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
  .add {
    /* background-color: green; */
  }
  .add:hover {
    color: green;
    background-color: inherit;
  }
  .remove {
    /* background-color: red; */
  }
  .remove:hover {
    color: red;
    background-color: inherit;
  }

  .quantity-controller {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .product-quantity {
    font-size: larger;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    /* width: 25px; */
    /* padding-left: 0.5rem;
    padding-right: 0.5rem; */
  }
  .add-btn {
    border: 0.5px solid black;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 25px;
    width: 25px;
    font: bold;
  }

  .remove-btn {
    border: 0.5px solid black;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 25px;
    width: 25px;
  }
</style>
