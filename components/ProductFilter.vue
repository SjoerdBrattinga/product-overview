<template>
  <div v-if="store.loaded()">
    <div class="shadow-sm container p-4 product-filter">
      <!-- <div v-for="category in productCategories" :key="category.subGroupId"> -->
      <a href="#" @click="store.filterOffers()"
        >Aanbiedingen ({{ store.offers.length }})</a
      >
      <ul v-for="category in productCategories" :key="category.subGroupId">
        <li>
          <a href="#" @click="store.filterProducts(category.subGroupId)"
            >{{ category.description }} ({{ category.productList.length }})</a
          >
        </li>
      </ul>
      <!-- <button class="btn" @click="store.filterProducts(category.subGroupId)">
        
      </button> -->
    </div>
    <div class="shadow-sm container p-4 product-filter">
      <ul v-for="brand in brands" :key="brand.BrandID">
        <li>
          <a href="#" @click="store.filterBrands(brand.BrandID)">{{
            brand.Description
          }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useProductStore } from '~~/stores/product';

  export interface FilterObject {
    categoryId: number;
    offers: boolean;
    priceHighLow: boolean;
    priceLowHigh: boolean;
  }

  const store = useProductStore();
  const productCategories = store.categories;
  const brands = store.brands;

  const sortFilter = ['Prijs - Laag naar Hoog', 'Prijs - Hoog naar Laag'];
</script>

<style scoped>
  .product-filter {
    margin-top: 0.1rem;
    background-color: white;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .btn {
    display: block;
  }
  a:hover {
    color: red;
  }
</style>
