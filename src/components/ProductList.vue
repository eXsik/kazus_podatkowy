<script setup lang="ts">
import { useCartStore } from '@/stores/cart';
import ProductItem from './ProductItem.vue';
import { computed, onMounted, ref } from 'vue';
import { getProducts, type Product } from '@/data/products';
import ProductPagination from './ProductPagination.vue';

const cartStore = useCartStore();
const products = ref<Product[]>([]);
const loading = ref(true);

const itemsPerPage: number = 8;
const currentPage = ref<number>(1);

const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  return products.value.slice(start, end);
});

const totalItems = computed(() => products.value.length);

onMounted(async () => {
  try {
    products.value = await getProducts();
  } catch (error) {
    console.error('Błąd podczas ładowania produktów: ', error);
  } finally {
    loading.value = false;
  }
});

const addToCart = (product: Product) => {
  cartStore.addToCart(product);
};
</script>

<template>
  <div class="product-list">
    <div v-if="loading" class="product-list__loading">Ładowanie produktów...</div>
    <div v-else class="product-list__grid">
      <ProductItem
        v-for="product in paginatedProducts"
        :key="product.id"
        :product="product"
        @addToCart="addToCart"
      />
    </div>
    <ProductPagination
      :totalItems="totalItems"
      :itemsPerPage="itemsPerPage"
      :currentPage="currentPage"
      @update:currentPage="(page) => (currentPage = page)"
    />
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/variables.scss' as variables;

.product-header {
  margin-top: 123px;
  font-weight: black;
  font-size: 42px;
  color: variables.$primary-color;
}
.product-list {
  padding: 32px 0px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  &__loading {
    text-align: center;
    padding: 32px;
    font-size: 20px;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    row-gap: 186px;
    column-gap: 32px;
  }
}
</style>
