<script setup lang="ts"></script>

<template>
  <section class="hero">
    <div class="hero__bg"></div>
    <div class="hero__content">
      <header class="hero__header">
        <h1 class="hero__title">Czasopisma</h1>
        <p class="hero__description">
          Mamy przyjemność oddać w Państwa ręce kolejny numer „Kazusu Podatkowego”, który tym razem
          poświęcony jest w dużej części zmianom w podatkach w roku 2019.
          <span
            >Omówiliśmy najważniejsze zagadnienia takie jak zmiany w zakresie rozliczania kosztów
            używania samochodów osobowych, wprowadzenie „exit tax” czy zmiany dotyczące poboru
            podatku u źródła na gruncie podatków dochodowych, poświęcając im odrębne artykuły.</span
          >
        </p>
      </header>
      <div class="hero__image">
        <img src="@/assets/img/Group 1823.png" alt="Hero Image" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/assets/variables.scss' as variables;

.hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  padding: 0 2rem;
  height: 360px;
  background: variables.$primary-color;

  &__content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    width: 100%;
    position: relative;
    height: 100%;
  }

  &__bg {
    position: absolute;
    top: 15px;
    left: 85px;
    width: 448px;
    height: 471px;
    background: transparent url('@/assets/img/hero_bg.svg') 0% 0% no-repeat padding-box;
  }

  &__header {
    max-width: 562px;
    margin-top: 63px;
    margin-bottom: 60px;
  }

  &__title {
    font-size: 56px;
    font-weight: bold;
    margin-bottom: 31px;
    color: variables.$white-color;
  }

  &__description {
    font-size: 14px;
    color: variables.$white-color;
    font-weight: bold;
    line-height: 1.7;

    span {
      font-weight: 300;
      margin-top: 30px;
      display: inline-block;
    }
  }

  &__image {
    img {
      width: 528px;
      border-radius: 8px;
      object-fit: cover;
      position: absolute;
      top: 35px;
      right: 50px;

      @media screen and (max-width: 1200px) {
        display: none;
      }
    }
  }
}
</style>
