<script setup lang="ts"></script>

<template>
  <h2 class="product-header">
    <slot />
  </h2>
</template>

<style lang="scss" scoped>
@use '@/assets/variables.scss' as variables;

.product-header {
  margin-top: 123px;
  margin-bottom: 125px;
  font-weight: 800;
  font-size: 42px;
  color: variables.$primary-color;
}
</style>
