<script setup lang="ts">
import { useCartStore } from '@/stores/cart';
import { computed } from 'vue';
import CartItem from '@/components/CartItem.vue';

const cartStore = useCartStore();
const cartItems = computed(() => cartStore.items);
const totalPrice = computed(() => cartStore.totalPrice);

const removeFromCart = (id: number) => {
  cartStore.removeFromCart(id);
};

const incrementQuantity = (id: number) => {
  cartStore.incrementQuantity(id);
};

const decrementQuantity = (id: number) => {
  cartStore.decrementQuantity(id);
};

const toggleCart = () => {
  cartStore.toggleCart();
};
</script>
<template>
  <div class="cart">
    <h2 class="cart__title">
      Twój koszyk
      <span @click="toggleCart" class="cart__close"
        ><img src="../assets/img/cancel.svg" alt="cancel icon"
      /></span>
    </h2>

    <template v-if="cartItems.length === 0">
      <p class="cart__item">Brak produktow w koszyku</p>
    </template>
    <div class="cart__item-container" v-else>
      <CartItem
        v-for="item in cartItems"
        :key="item.id"
        :item="item"
        :onRemove="removeFromCart"
        :onIncrement="incrementQuantity"
        :onDecrement="decrementQuantity"
      />
    </div>
    <div class="cart__summary">
      <div class="cart__summary-total">
        Łączna kwota:
        <div class="cart__summary-price-details">
          <span class="cart__summary-price-details-price">{{ totalPrice.toFixed(2) }} PLN</span>
          <span class="cart__summary-price-details-vat">+ VAT 23%</span>
        </div>
      </div>
      <button class="cart__summary-button">PRZEJDZ DO KOSZYKA</button>
    </div>
  </div>
  <div class="cart__overlay"></div>
</template>
<style lang="scss" scoped>
@use '@/assets/variables.scss' as variables;

.cart {
  background: variables.$white-color;
  position: absolute;
  padding: 19px 32px 28px 28px;
  top: 90px;
  right: 0px;
  width: 381px;
  max-height: 674px;
  z-index: 100;
  display: flex;
  flex-direction: column;

  &__title {
    font-size: 18px;
    font-weight: 700;
    color: variables.$dark-color;
    margin-bottom: 16px;
    line-height: 30px;
  }

  &__close {
    position: absolute;
    top: 0px;
    right: 0px;
    background: variables.$primary-color;
    width: 41px;
    height: 41px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  &__item {
    padding: 16px 0;

    &-container {
      overflow-y: auto;
    }
  }

  &__summary {
    justify-self: flex-end;
    border-top: 1px solid rgba(variables.$light-gray4-color, 0.35);
    display: flex;
    flex-direction: column;

    &-total {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: variables.$dark-color;
      font-size: 16px;
      line-height: 24px;
      font-weight: bold;
      margin-top: 25px;
      margin-bottom: 18px;
      text-align: right;
    }

    &-price-details {
      display: flex;
      flex-direction: column;

      &-price {
        font-weight: 900;
        color: variables.$dark-color;
        font-size: 22px;
        line-height: 24px;
      }

      &-vat {
        color: variables.$dark-color;
        font-weight: 300;
        font-size: 14px;
        line-height: 24px;
      }
    }

    &-button {
      height: 50px;
      color: variables.$white-color;
      background: variables.$gold-color;
      font-size: 16px;
      border: none;
      text-align: center;
      letter-spacing: 2.4px;
      font-weight: 500;
      text-transform: uppercase;
      cursor: pointer;
    }
  }

  &__overlay {
    position: fixed;
    top: 90px;
    right: 0;
    bottom: 0;
    left: 0;
    background: variables.$dark2-color;
    opacity: 0.6;
    z-index: 10;
  }
}
</style>
