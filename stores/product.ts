import { defineStore } from 'pinia';
import { BrandInfo, Product } from '~~/types';

export interface ProductCategory {
  subGroupId: number;
  description: string;
  productList: Product[];
}

export interface ProductBrand {
  brandId: number;
  name: string;
  productList: Product[];
}

export const useProductStore = defineStore('products', () => {
  const products = ref<Product[]>([]);
  const filteredProducts = ref<Product[]>([]);
  const offers = ref<Product[]>([]);
  const categories = ref<ProductCategory[]>([]);
  const brands = ref<BrandInfo[]>([]);

  const fetchProducts = async () => {
    const { data, pending, error } = await useFetch<Product[]>('/api/products');

    if (data.value) {
      handleProductData(data.value);
      filteredProducts.value = products.value;
      // filterBrands(2046);
    }

    return { pending, error };
  };

  function filterProducts(categoryId: number) {
    // const index = categories.value.findIndex(
    //   (c) => c.subGroupId === categoryId
    // );

    // if (index !== -1) {
    //   filteredProducts.value = categories.value[index].productList;
    // }
    filteredProducts.value = products.value.filter((p) =>
      p.WebSubGroups.find((group) => group.WebSubGroupID === categoryId)
    );
    console.log(filteredProducts.value);
  }

  function filterBrands(brandId: number) {
    filteredProducts.value = products.value.filter(
      (p) => p.BrandInfo?.BrandID === brandId
    );
    console.log(filteredProducts.value);
    // if (index !== -1) {
    //   filteredProducts.value = categories.value[index].productList;
    // }
  }

  function filterOffers() {
    filteredProducts.value = offers.value;
  }

  const getProducts = () => {
    return filteredProducts;
  };

  const getProductById = (id: number) => {
    return products.value.find((p) => p.ProductID === id) as Product;
  };

  const loaded = () => {
    return products.value.length > 0;
  };

  function handleProductData(productData: Product[]) {
    if (loaded()) {
      return;
    }

    // all products
    products.value = productData;

    getCategories();
    getBrands();

    // store products in categories
    products.value.forEach((product: Product) => {
      // store in offers
      if (product.ProductOffers.length > 0) {
        offers.value.push(product);
      }
      // store in categories
      product.WebSubGroups.forEach((wsg) => {
        const index = categories.value.findIndex(
          (c) => c.subGroupId === wsg.WebSubGroupID
        );
        if (index !== -1) {
          categories.value[index].productList.push(product);
        }
      });
      // store in brands
    });
  }

  function getBrands() {
    const brandObjects = products.value
      .filter((brand) => !!brand.BrandInfo)
      .map(({ BrandInfo }) => BrandInfo);

    const uniqueBrands = [
      ...new Set(brandObjects.map((brandObj) => brandObj.BrandID)),
    ].map((id) => {
      return brandObjects.find((brand) => brand.BrandID === id);
    });

    uniqueBrands.forEach((brand) => {
      if (brand) {
        brands.value.push(brand);
      }
    });
  }

  function getCategories() {
    // find all WebSubGroups
    const webSubGroups = products.value.flatMap(
      ({ WebSubGroups }) => WebSubGroups
    );

    // get unique WebSubGroups
    const uniqueSubGroups = [
      ...new Set(webSubGroups.map((obj) => obj.WebSubGroupID)),
    ].map((id) => {
      return webSubGroups.find((obj) => obj.WebSubGroupID === id);
    });

    // store as ProductCategory
    uniqueSubGroups.forEach((group) => {
      if (group) {
        categories.value.push({
          subGroupId: group.WebSubGroupID,
          description: group.Description,
          productList: [],
        } as ProductCategory);
      }
    });
  }

  return {
    products,
    categories,
    brands,
    offers,
    filteredProducts,
    fetchProducts,
    getProductById,
    filterProducts,
    filterBrands,
    filterOffers,
    getProducts,
    loaded,
  };
});
