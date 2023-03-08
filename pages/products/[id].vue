<template>
  <div>
    <h2>Product details for {{ id }}</h2>
  </div>
</template>

<script setup>
  const { id } = useRoute().params;
</script>

<style scoped></style>
