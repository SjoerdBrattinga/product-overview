import { defineStore } from 'pinia';
import { Product } from '~~/types';

export interface CartItem {
  productId: number;
  product: Product;
  quantity: number;
  totalPrice: number;
}

export const useCartStore = defineStore('cart', () => {
  const cartItems = ref<CartItem[]>([]);

  function addToCart(product: Product) {
    const item = cartItems.value.find(
      (item) => item.productId === product.ProductID
    );

    if (item) {
      item.quantity++;
      item.totalPrice = product.ProductPrices[0].Price * item.quantity;
    } else {
      cartItems.value.push({
        productId: product.ProductID,
        product,
        quantity: 1,
        totalPrice: product.ProductPrices[0].Price,
      } as CartItem);
    }
  }

  function removeFromCart(productId: number) {
    const item = cartItems.value?.find((item) => item.productId === productId);

    if (item) {
      item.quantity--;
      item.totalPrice = item.product.ProductPrices[0].Price * item.quantity;

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

  const totalPrice = () => {
    return cartItems.value.reduce((acc, item) => acc + item.totalPrice, 0);
  };

  const totalItems = () => {
    return cartItems.value.reduce((acc, item) => acc + item.quantity, 0);
  };

  return {
    cartItems,
    totalItems,
    addToCart,
    removeFromCart,
    totalPrice,
    getItemQuantity,
  };
});
