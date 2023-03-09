import { defineStore } from 'pinia';
import { Product } from '~~/types';

export const useProductsStore = defineStore('products', () => {
  const products = ref<Product[]>([]);

  const fetchProducts = async () => {
    const { data, pending, error } = await useFetch<Product[]>('/api/products');

    if (data.value) {
      products.value = data.value;
    }

    return { data, pending, error };
  };

  const getProductById = (id: number) => {
    return products.value.find((p) => p.ProductID === id) as Product;
  };
  // const getProductById = computed(() => (id: number) => {
  //   const value = products.value.find((p) => p.ProductID === id);
  //   console.log(products);
  //   console.log(value);
  //   return value;
  // });

  //     const webSubGroups = [...new Set(products.map(item => item.WebSubGroups))].flat()

  //     const categories = [...new Set(webSubGroups.map( obj => obj.WebSubGroupID))].map(
  //         id => { return webSubGroups.find(obj => obj.WebSubGroupID === id) } )

  //     //console.log(categories)

  return { products, fetchProducts, getProductById };
});
