import { defineStore } from "pinia"
import { Product } from "~~/types"

export const useProductsStore = defineStore('products', () => {
    const products = ref<Product[]>()
    //const name = ref('Eduardo')
    //const doubleCount = computed(() => count.value * 2)

    function setProducts(p:Product[]){
       // products.value = p
    }

    const fetchProducts = async () => {
        const { data, pending, error } = await useFetch<Product[]>('/api/products')

        if(data.value){
            console.log(data)
            products.value = data.value;
        }
        
        return { data, pending, error }
    } 
  
    return { products, fetchProducts, setProducts }
  })