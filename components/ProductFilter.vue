<template>
  <div v-if="store.loaded()">
    <div class="shadow-sm container p-4 product-filter">
      <a href="#" @click="showAllProducts()"> Alle Producten </a>
      <a href="#" @click="store.filterOffers()">
        Aanbiedingen ({{ store.offers.length }})
      </a>

      <select v-model="selectedCategoryId" @change="onCategoryChange">
        <option value="0" selected disabled>Categorie</option>
        <option
          v-for="category in productCategories"
          :key="category.subGroupId"
          :value="category.subGroupId"
        >
          {{ category.description }} ({{ category.productIds.length }})
        </option>
      </select>

      <select v-model="selectedBrandId" @change="onBrandChange">
        <option value="0" selected disabled>Merk</option>
        <option
          v-for="brand in brands"
          :key="brand.brandId"
          :value="brand.brandId"
        >
          {{ brand.name }} ({{ brand.productIds.length }})
        </option>
      </select>

      <div class="dropdown">
        <select v-model="selectedSort" @change="onSortTypeChange">
          <option value="" selected disabled>Sorteer op prijs</option>
          <option value="sortLowHigh">Prijs - Laag naar Hoog</option>
          <option value="sortHighLow">Prijs - Hoog naar Laag</option>
        </select>
      </div>
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
  const selectedCategoryId = ref<number>(0);
  const selectedBrandId = ref<number>(0);
  const selectedSort = ref('');

  function showAllProducts() {
    store.filteredProducts = store.products;
    selectedBrandId.value = 0;
    selectedCategoryId.value = 0;
    selectedSort.value = '';
  }

  const onCategoryChange = function () {
    if (selectedCategoryId.value > 0) {
      store.filterCategories(selectedCategoryId.value);
      selectedBrandId.value = 0;
      selectedSort.value = '';
    }
  };

  const onBrandChange = function () {
    if (selectedBrandId.value > 0) {
      store.filterBrands(selectedBrandId.value);
      selectedCategoryId.value = 0;
      selectedSort.value = '';
    }
  };

  const onSortTypeChange = function () {
    store.sortProducts(selectedSort.value);
  };
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
  select,
  a {
    width: 200px;
    min-width: 100px;
  }
  li {
    border: 1px solid black;
  }
  .btn {
    display: block;
  }
  a:hover {
    color: red;
  }
  select:hover {
    cursor: pointer;
    color: red;
  }
  option:not(:checked) {
    color: black;
  }
</style>
