import type { Product } from '@/data/products';
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useCartStore = defineStore('cart', () => {
  const items = ref<Product[]>([]);
  const isCartVisible = ref<boolean>(false);

  const totalItems = computed(() => items.value.reduce((sum, item) => sum + item.quantity, 0));
  const totalPrice = computed(() =>
    items.value.reduce((sum, item) => sum + item.price * item.quantity, 0),
  );

  const toggleCart = () => {
    isCartVisible.value = !isCartVisible.value;
  };

  const addToCart = (product: { id: number; name: string; price: number; image: string }) => {
    const existingItem = items.value.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      items.value.push({ ...product, quantity: 1 });
    }
  };

  const removeFromCart = (productId: number) => {
    const index = items.value.findIndex((item) => item.id === productId);

    if (index !== -1) {
      items.value.splice(index, 1);
    }
  };

  const incrementQuantity = (productId: number) => {
    const item = items.value.find((item) => item.id === productId);
    if (item) {
      item.quantity++;
    }
  };

  const decrementQuantity = (productId: number) => {
    const item = items.value.find((item) => item.id === productId);
    if (item && item.quantity > 1) {
      item.quantity--;
    }
  };

  return {
    toggleCart,
    isCartVisible,
    items,
    totalItems,
    totalPrice,
    addToCart,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
  };
});
