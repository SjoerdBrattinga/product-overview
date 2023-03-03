<template>
    <div>
        <NuxtLink :to="`/products/${product.ProductID}`">{{ product.MainDescription }}</NuxtLink>
    </div>
</template>

<script setup>
    const { product } = defineProps(['product'])
</script>

<style scoped>

</style>