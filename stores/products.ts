import { defineStore } from "pinia";
import { Product } from "~~/types";

export const useProductsStore = defineStore("products", () => {
  const products = ref<Product[]>();
  // const name = ref('Eduardo')
  // const doubleCount = computed(() => count.value * 2)

  const fetchProducts = async () => {
    const { data, pending, error } = await useFetch<Product[]>("/api/products");

    if (data.value) {
      products.value = data.value;
    }

    return { data, pending, error };
  };

  return { products, fetchProducts };
});
