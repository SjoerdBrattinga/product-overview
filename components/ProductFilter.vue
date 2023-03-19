<template>
  <div v-if="store.loaded()">
    <div class="shadow-sm container p-4 product-filter">
      <a href="#" @click="store.filteredProducts = store.products">
        Alle Producten
      </a>
      <a href="#" @click="store.filterOffers()">
        Aanbiedingen ({{ store.offers.length }})
      </a>

      <select v-model="selectedCategory" @change="onCategoryChange">
        <option value="undefined" selected disabled>Categorie</option>
        <option
          v-for="category in productCategories"
          :key="category.subGroupId"
          :value="category"
        >
          {{ category.description }} ({{ category.productIds.length }})
        </option>
      </select>

      <select v-model="selectedBrand" @change="onBrandChange">
        <option value="undefined" selected disabled>Merk</option>
        <option v-for="brand in brands" :key="brand.brandId" :value="brand">
          {{ brand.name }} ({{ brand.productIds.length }})
        </option>
      </select>

      <select v-model="selectedSort" @change="onSortTypeChange">
        <option value="" selected disabled>Sorteer op prijs</option>
        <option value="sortLowHigh">Prijs - Laag naar Hoog</option>
        <option value="sortHighLow">Prijs - Hoog naar Laag</option>
      </select>
    </div>
  </div>
</template>

<script setup lang="ts">
  import {
    ProductCategory,
    ProductBrand,
    useProductStore,
  } from '~~/stores/product';

  export interface FilterObject {
    categoryId: number;
    offers: boolean;
    priceHighLow: boolean;
    priceLowHigh: boolean;
  }

  const store = useProductStore();
  const productCategories = store.categories;
  const brands = store.brands;
  const selectedCategory = ref<ProductCategory>();
  const selectedBrand = ref<ProductBrand>();
  const selectedSort = ref('');

  const onCategoryChange = function () {
    if (selectedCategory.value) {
      store.filterCategories(selectedCategory.value?.subGroupId);
      selectedBrand.value = undefined;
    }
  };

  const onBrandChange = function () {
    if (selectedBrand.value) {
      store.filterBrands(selectedBrand.value?.brandId);
      selectedCategory.value = undefined;
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
  li {
    border: 1px solid black;
  }

  .btn {
    display: block;
  }
  a:hover {
    color: red;
  }
</style>
