<script setup lang="ts">
import HeroMain from '@/components/HeroMain.vue';
import ProductHeader from '@/components/ProductHeader.vue';
import ProductList from '@/components/ProductList.vue';
</script>

<template>
  <main class="home">
    <HeroMain />
    <section class="home__products">
      <ProductHeader> Wyszukaj czasopismo </ProductHeader>
      <ProductList />
    </section>
  </main>
</template>

<style lang="scss" scoped>
.home {
  &__products {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.5rem;
    padding: 0 16px;
    max-width: 1200px;
    margin: 0 auto 50px;
  }
}
</style>
