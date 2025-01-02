<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
  item: {
    type: Object,
    required: true,
  },
  onRemove: {
    type: Function,
    required: true,
  },
  onIncrement: {
    type: Function,
    required: true,
  },
  onDecrement: {
    type: Function,
    required: true,
  },
});
</script>

<template>
  <div class="cart__item">
    <div class="cart__item-container">
      <span class="cart__item-img">
        <img src="../assets/img/book.svg" alt="book icon" />
      </span>
      <p class="cart__item-name">
        {{ item.name }}
      </p>
      <button class="cart__item-remove" @click="onRemove(item.id)">
        <img src="../assets/img/rubbish-bin.svg" alt="trash icon" />
      </button>
    </div>
  </div>
  <div class="cart__item-summary">
    <span class="cart__item-tag">Cena</span>
    <p class="cart__item-price">{{ item.price }} PLN</p>
  </div>
  <div class="cart__item-quantity">
    <span class="cart__item-tag">Ilość</span>
    <div class="cart__item-quantity-controls">
      <span class="cart__item-quantity-count">{{ item.quantity }}</span>
      <button class="cart__item-quantity-btn" @click="onIncrement(item.id)">+</button>
      <button class="cart__item-quantity-btn" @click="onDecrement(item.id)">-</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/variables.scss' as variables;

.cart__item {
  display: flex;
  flex-direction: column;
  padding-left: 22px;
  padding-right: 18.94px;
  margin-bottom: 12px;
  background: variables.$white-color;
  border-radius: 4px;

  &-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 23px;
  }
  &-name {
    color: variables.$primary-color;
    font-size: 16px;
    line-height: 24px;
    font-weight: 700;
    max-width: 188px;
  }

  &-remove {
    border: none;
    width: 13px;
    height: 17px;
    cursor: pointer;
    background: transparent;
  }

  &-quantity {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 22px;
    padding-right: 18.94px;
    margin: 0px 0px 22px;
  }

  &-quantity-controls {
    display: flex;
    align-items: center;
    gap: 3px;
  }

  &-quantity-btn {
    background-color: variables.$primary-color;
    color: variables.$white-color;
    font-size: 13px;
    width: 16px;
    height: 16px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  &-quantity-count {
    font-size: 16px;
    color: variables.$dark-color;
    font-weight: 700;
  }

  &-tag {
    color: variables.$dark-color;
    font-size: 14px;
    font-weight: 300;
    line-height: 24px;
  }

  &-price {
    font-size: 18px;
    color: variables.$dark-color;
    font-weight: 900;
    line-height: 30px;
  }

  &-summary {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 22px;
    padding-right: 18.94px;
  }
}
</style>
