<template>
  <div class="main mx-auto">
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4 flex justify-between flex-wrap">
        <NuxtLink :to="`/products`"><span>Winkel</span></NuxtLink>
        <NuxtLink :to="`/cart`"><CartIcon /></NuxtLink>
      </nav>
    </header>

    <div class="container mx-auto">
      <slot />
    </div>
  </div>
</template>

<style scoped>
  .main {
    max-width: 1200px;
  }
  span:hover {
    color: red;
  }
  nav {
    /* height: 5vh; */
  }
</style>
