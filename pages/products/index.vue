<template>
  <div>
    <div v-if="error">
      <i>error</i>
    </div>

    <div v-if="pending">
      <i>pending</i>
    </div>

    <div v-else class="grid grid-cols-4 gap-5">
      <div v-for="product in products" :key="product.ProductID">
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  // import { Product, WebSubGroup } from "~~/types";
  import { useProductsStore } from '~~/stores/products';

  // const { data, pending, error } = await useFetch<Product[]>('/api/products')

  const store = useProductsStore();

  const { pending, error } = await store.fetchProducts();
  // store.fetchProducts()

  const products = store.products;
  // console.log(products)

  // if (data.value){
  //     //store.setProducts(products)
  //     products = data.value;

  //     const webSubGroups = [...new Set(products.map(item => item.WebSubGroups))].flat()

  //     const categories = [...new Set(webSubGroups.map( obj => obj.WebSubGroupID))].map(
  //         id => { return webSubGroups.find(obj => obj.WebSubGroupID === id) } )

  //     //console.log(categories)
  // }
</script>

<style scoped></style>
