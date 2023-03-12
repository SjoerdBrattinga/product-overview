import { defineStore } from 'pinia';

export interface CartItem {
  productId: number;
  quantity: number;
}

export const useCartStore = defineStore('cart', () => {
  const cartItems = ref<CartItem[]>([]);

  function addToCart(productId: number) {
    const item = cartItems.value.find((item) => item.productId === productId);

    if (item) {
      item.quantity++;
    } else {
      cartItems.value.push({ productId, quantity: 1 } as CartItem);
    }
  }

  function removeFromCart(productId: number) {
    const item = cartItems.value?.find((item) => item.productId === productId);

    if (item) {
      item.quantity--;

      if (item.quantity === 0) {
        cartItems.value = cartItems.value?.filter(
          (item) => item.productId !== productId
        );
      }
    }
  }

  function getItemQuantity(productId: number) {
    const item = cartItems.value?.find((item) => item.productId === productId);

    if (item) {
      return item.quantity;
    } else {
      return 0;
    }
  }

  return { cartItems, addToCart, removeFromCart, getItemQuantity };
});
