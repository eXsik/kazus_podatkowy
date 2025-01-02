<script setup lang="ts">
import { RouterView } from 'vue-router';
import Header from './components/HeaderNav.vue';
</script>

<template>
  <Header />
  <RouterView />
</template>

<style scoped>
.wrapper {
  width: 100%;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  padding: 0;
}
</style>
