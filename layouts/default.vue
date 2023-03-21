<template>
  <div class="main mx-auto">
    <header class="shadow-md bg-white">
      <nav class="container mx-auto p-4 flex justify-between flex-wrap">
        <NuxtLink :to="`/`"><span class="home">Winkel</span></NuxtLink>
        <NuxtLink :to="`/cart`"><CartIcon /></NuxtLink>
      </nav>
    </header>

    <div class="content container mx-auto">
      <slot />
    </div>
  </div>
</template>

<style scoped>
  .main {
    max-width: 1200px;
  }
  .home:hover {
    color: red;
  }
  header {
    position: sticky;
    top: 0;
    z-index: 1;
    height: 64px;
  }
</style>
