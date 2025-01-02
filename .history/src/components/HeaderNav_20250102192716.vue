<script setup lang="ts">
import { navLinks } from '@/data/constants';
import { useCartStore } from '@/stores/cart';
import { computed, ref } from 'vue';
import { RouterLink } from 'vue-router';
import CartComponent from './CartComponent.vue';

const cartStore = useCartStore();
const totalItems = computed(() => cartStore.totalItems);
const isCartVisible = computed(() => cartStore.isCartVisible);

const toggleCart = () => {
  cartStore.toggleCart();
};

const isMenuVisible = ref(false);

const toggleMenu = () => {
  isMenuVisible.value = !isMenuVisible.value;
};
</script>

<template>
  <header class="header">
    <div class="header__container">
      <div class="header__logo">
        <img src="@/assets/img/Group 412.svg" alt="logo img" />
      </div>
      <nav class="header__nav">
        <ul v-if="!isMenuVisible" class="header__menu">
          <li v-for="(link, index) in navLinks" :key="index" class="header__link">
            <RouterLink :to="link.href">{{ link.name }}</RouterLink>
          </li>
        </ul>
        <ul v-if="isMenuVisible" class="header__menu header__menu--mobile">
          <li v-for="(link, index) in navLinks" :key="index" class="header__link">
            <RouterLink :to="link.href">{{ link.name }}</RouterLink>
          </li>
        </ul>
      </nav>
      <div class="header__options">
        <div class="header__search">
          <img src="../assets/img/magnifying-glass.svg" alt="magnifying glass icon" />
        </div>
        <div class="header__user">
          <img src="../assets/img/user.svg" alt="user icon" />
        </div>
        <div class="header__cart" @click="toggleCart">
          <img class="header__cart-icon" src="../assets/img/Group 32.svg" alt="cart icon" />

          <span class="header__cart-count">{{ totalItems }}</span>
        </div>
      </div>
      <div class="header__hamburger" @click="toggleMenu">
        <span class="header__hamburger-line"></span>
        <span class="header__hamburger-line"></span>
        <span class="header__hamburger-line"></span>
      </div>
      <CartComponent v-if="isCartVisible" @close="toggleCart" />
    </div>
  </header>
</template>

<style scoped lang="scss">
@use '@/assets/variables.scss' as variables;

.header {
  height: 90px;
  position: sticky;
  top: 0px;
  background-color: variables.$white-color;
  color: variables.$dark-color;
  border-bottom: 1px solid variables.$light-gray-color;
  z-index: 100;

  &__container {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 90px;
    margin: 0 auto;
    background-color: variables.$white-color;
    color: variables.$dark-color;
    border-bottom: 1px solid variables.$light-gray-color;
    z-index: 100;
    max-width: 1200px;
    @media (max-width: 1200px) {
      width: 100%;
      padding: 0 10px;
    }
  }

  &__logo img {
    height: 43px;
    @media (max-width: 1200px) {
      height: 35px;
    }
  }

  &__menu {
    display: flex;
    gap: 37px;
    list-style: none;
    margin: 0;
    padding: 0;

    @media (max-width: 1200px) {
      gap: 15px;
    }

    @media (max-width: 850px) {
      display: none;
    }
  }

  &__link {
    list-style: none;
    a {
      color: variables.$dark-color;
      text-decoration: none;
      font-size: 14px;
      transition: color 0.3s ease-in-out;
      font-weight: 300;

      &:hover {
        color: variables.$primary-color;
      }
    }
  }

  .header__options {
    display: flex;
    align-items: center;
  }

  &__search {
    width: 40px;
    height: 40px;
    background: variables.$primary-color;
    color: variables.$white-color;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 19px;

    img {
      height: 19px;
      width: 19px;
    }
  }

  &__user {
    margin-right: 28px;
    height: 20px;
    display: flex;
    align-items: flex-end;
    img {
      height: 18px;
      width: 18px;
    }
  }

  &__cart {
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;

    img {
      height: 20px;
      width: 20px;
    }

    &-count {
      height: 13px;
      width: 13px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: variables.$primary-color;
      border-radius: 50%;
      color: variables.$white-color;
      font-size: 10px;
      position: absolute;
      top: -3px;
      right: -6px;
    }
  }

  .header__hamburger {
    display: none;
    cursor: pointer;
    flex-direction: column;
    gap: 5px;
    @media (max-width: 850px) {
      display: flex;
    }

    &-line {
      width: 30px;
      height: 2px;
      background-color: variables.$dark-color;
    }
  }

  .header__menu--mobile {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 90px;
    left: 0;
    right: 0;
    background-color: variables.$white-color;
    padding: 20px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    z-index: 101;
    @media (max-width: 850px) {
      display: flex;
    }
  }

  .header__menu--mobile .header__link {
    margin-bottom: 15px;
    font-size: 18px;
  }
}
</style>
