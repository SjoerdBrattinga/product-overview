import { defineStore } from 'pinia';
import { Product } from '~~/types';

export interface ProductCategory {
  subGroupId: number;
  description: string;
  products: Product[];
}

export const useProductStore = defineStore('products', () => {
  const products = ref<Product[]>([]);
  const offers = ref<Product[]>([]);
  const categories = ref<ProductCategory[]>([]);

  const fetchProducts = async () => {
    const { data, pending, error } = await useFetch<Product[]>('/api/products');

    if (data.value) {
      handleProductData(data.value);
    }

    return { pending, error };
  };

  function filterProducts(categoryId: number) {
    const index = categories.value.findIndex(
      (c) => c.subGroupId === categoryId
    );

    if (index !== -1) {
      products.value = categories.value[index].products;
    }
  }

  const getProducts = () => {
    return products.value;
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
          products: [],
        } as ProductCategory);
      }
    });

    // store products in categories
    products.value.forEach((product: Product) => {
      product.WebSubGroups.forEach((wsg) => {
        const index = categories.value.findIndex(
          (c) => c.subGroupId === wsg.WebSubGroupID
        );
        if (index !== -1) {
          categories.value[index].products.push(product);
        }
        if (product.ProductOffers.length > 0) {
          offers.value.push(product);
        }
      });
    });
  }

  return {
    products,
    categories,
    fetchProducts,
    getProductById,
    filterProducts,
    getProducts,
    loaded,
  };
});
