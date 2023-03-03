<template>
    <div>
        <h2>Products</h2>

        <div v-for="product in products" v-if="products" :key="product.ProductID">
            <ProductCard :product="product"/>            
        </div>
    </div>
</template>

<script setup lang="ts">
    import { Product } from '~~/types';
     
    const { data:products } = await useFetch<Product[]>('/api/products')

    console.log(products)
</script>

<style scoped>

</style>