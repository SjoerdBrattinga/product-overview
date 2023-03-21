import { defineStore } from 'pinia';
import { Product } from '~~/types';

export interface ProductCategory {
  subGroupId: number;
  description: string;
  productIds: number[];
}

export interface ProductBrand {
  brandId: number;
  name: string;
  productIds: number[];
}

export const useProductStore = defineStore('products', () => {
  const products = ref<Product[]>([]);
  const filteredProducts = ref<Product[]>([]);
  const offers = ref<Product[]>([]);
  const categories = ref<ProductCategory[]>([]);
  const brands = ref<ProductBrand[]>([]);

  const fetchProducts = async () => {
    const { data, pending, error } = await useFetch<Product[]>('/api/products');

    if (data.value) {
      handleProductData(data.value);
      filteredProducts.value = products.value;
    }

    return { pending, error };
  };

  function handleProductData(productData: Product[]) {
    if (loaded()) {
      return;
    }

    // all products
    products.value = productData;

    getCategories();
    getBrands();
    getOffers();
  }

  function filterCategories(categoryId: number) {
    filteredProducts.value = products.value.filter((p) =>
      p.WebSubGroups.find((group) => group.WebSubGroupID === categoryId)
    );
  }

  function filterBrands(brandId: number) {
    filteredProducts.value = products.value.filter(
      (p) => p.BrandInfo?.BrandID === brandId
    );
  }

  function filterOffers() {
    filteredProducts.value = offers.value;
  }

  function sortProducts(sortType: string) {
    if (sortType === 'sortLowHigh') {
      filteredProducts.value.sort((a, b) => {
        if (a.ProductPrices[0].Price < b.ProductPrices[0].Price) {
          return -1;
        }
        if (a.ProductPrices[0].Price > b.ProductPrices[0].Price) {
          return 1;
        }
        return 0;
      });
    } else if (sortType === 'sortHighLow') {
      filteredProducts.value.sort((a, b) => {
        if (a.ProductPrices[0].Price > b.ProductPrices[0].Price) {
          return -1;
        }
        if (a.ProductPrices[0].Price < b.ProductPrices[0].Price) {
          return 1;
        }
        return 0;
      });
    }
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
        const productIds = products.value
          .filter((p) =>
            p.WebSubGroups?.find(
              (wsg) => wsg.WebSubGroupID === group.WebSubGroupID
            )
          )
          .map((p) => p.ProductID);

        categories.value.push({
          subGroupId: group.WebSubGroupID,
          description: group.Description,
          productIds,
        } as ProductCategory);
      }
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
        const productIds = products.value
          .filter((p) => p.BrandInfo?.BrandID === brand.BrandID)
          .map((p) => p.ProductID);

        brands.value.push({
          brandId: brand.BrandID,
          name: brand.Description,
          productIds,
        } as ProductBrand);
      }
    });
  }

  function getOffers() {
    products.value.forEach((product: Product) => {
      if (product.ProductOffers.length > 0) {
        offers.value.push(product);
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
    filterCategories,
    filterBrands,
    filterOffers,
    sortProducts,
    getProducts,
    loaded,
  };
});
