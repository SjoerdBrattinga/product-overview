<template>
    <div>
        <h2>Products</h2>

        <div v-for="product in products">
            <ProductCard :product="product"/>            
        </div>
    </div>
</template>

<script setup>
    const runtimeConfig = useRuntimeConfig()
    
    const { data: products } = await useFetch('/assortmentcache/group/281/104/', { 
        baseURL: runtimeConfig.public.apiBase,
        query: { api_key: runtimeConfig.public.apiKey }
    })

    console.log(products)
</script>

<style scoped>

</style>