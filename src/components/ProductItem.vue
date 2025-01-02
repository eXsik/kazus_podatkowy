<script setup lang="ts">
import type { Product } from '@/data/products';

interface Props {
  product: Product;
}
const props = defineProps<Props>();

const emit = defineEmits<{ (e: 'addToCart', product: Product): void }>();

const onAddToCart = () => {
  emit('addToCart', props.product);
};
</script>

<template>
  <div class="product-card" @click="onAddToCart">
    <img
      :src="`../assets/img/${product.image}`"
      :alt="product.name + '- image'"
      class="product-card__image"
    />
    <div class="product-card__content">
      <h3 class="product-card__name">{{ product.name }}</h3>
      <p class="product-card__price">
        {{ product.price?.toFixed(2) }} <span class="product-card__price-tag">PLN</span>
      </p>
      <span class="product-card__vat">+ VAT 23%</span>
      <button @click="onAddToCart" class="product-card__details">Szczegóły</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../assets/variables.scss' as variables;

.product-card {
  background: variables.$white-color;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid transparent;
  transition: all 0.3s ease-in-out;
  color: variables.$primary-color;

  &:hover {
    color: variables.$gold-color;
    border-color: variables.$gold-color;
    box-shadow: 20px 20px 40px variables.$light-gray2-color;
  }

  &__name {
    margin-top: 85px;
    font-size: 18px;
    font-weight: 900;
    line-height: 27px;
    text-align: center;
  }

  &__image {
    top: -110px;
    position: absolute;
    max-width: 163px;
    max-height: 190px;
    object-fit: contain;
  }

  &__content {
    // padding: 1rem;
    display: flex;
    margin-top: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 286px;
    height: 261px;
  }

  &__price {
    font-size: 24px;
    font-weight: 900;
    color: inherit;
    margin-top: 10px;
    margin-bottom: 20px;

    &-tag {
      font-size: 18px;
    }
  }

  &__vat {
    display: block;
    font-size: 14px;
    font-weight: 300;
    line-height: 24px;
  }

  &__details {
    margin-top: 14px;
    margin-bottom: 23px;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 2.4px;
    line-height: 19px;
    background: transparent;
    color: inherit;
    border: none;
    cursor: pointer;
    text-transform: uppercase;
  }
}
</style>
