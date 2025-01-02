<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
}>();

const emit = defineEmits<{
  (event: 'update:currentPage', page: number): void;
}>();

const totalPages = computed(() => Math.ceil(props.totalItems / props.itemsPerPage));

const pages = computed(() => {
  const pagesArray: number[] = [];
  for (let i = 1; i <= totalPages.value; i++) {
    pagesArray.push(i);
  }
  return pagesArray;
});

const changePage = (page: number) => {
  if (page >= 1 && page <= totalPages.value) {
    emit('update:currentPage', page);
  }
};
</script>

<template>
  <div class="pagination">
    <button
      class="pagination__arrow pagination__arrow--prev"
      :disabled="props.currentPage === 1"
      @click="changePage(props.currentPage - 1)"
    >
      <img src="../assets/img/down-arrow2.svg" alt="arrow" />
    </button>

    <button
      v-for="page in pages"
      :key="page"
      :class="['pagination__page', { 'pagination__page--active': page === props.currentPage }]"
      @click="changePage(page)"
    >
      {{ page }}
    </button>

    <button
      class="pagination__arrow pagination__arrow--next"
      :disabled="props.currentPage === totalPages"
      @click="changePage(props.currentPage + 1)"
    >
      <img src="../assets/img/down-arrow.svg" alt="arrow" />
    </button>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/variables.scss' as variables;

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 300;
  line-height: 20px;
  counter-reset: variables.$light-gray4-color;
  margin-top: 66px;

  &__arrow {
    background: none;
    border: none;
    font-size: 18px;
    cursor: pointer;

    &:disabled {
      color: #ccc;
      cursor: not-allowed;
    }

    &--prev {
      margin-right: 16px;
    }
    &--left {
      margin-left: 16px;
    }
  }

  &__page {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    color: variables.$light-gray4-color;
    height: 33px;
    width: 33px;

    &--active {
      background-color: variables.$primary-color;
      font-size: 14px;
      font-weight: 700;
      color: variables.$white-color;
    }
  }
}
</style>
