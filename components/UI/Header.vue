<template>
  <div class="header">
    <img src="/imgs/logo.png" alt="" class="header__logo" />
    <ul class="header__list">
      <li><NuxtLink>Облачные решения</NuxtLink></li>
      <li><NuxtLink>Кибербезопасность</NuxtLink></li>
      <li><NuxtLink>Импортозамещение</NuxtLink></li>
      <li><NuxtLink>Цифровая трансформация</NuxtLink></li>
    </ul>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "@/assets/app.scss";
.header {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 0.438rem 1rem 0.313rem;
  border: 1px solid #d9d9d9;

  &__logo {
    width: 125px;
    height: 25px;
  }
  &__list {
    @include ul;
    display: flex;
    align-items: center;
    gap: 0.625rem;
    flex-wrap: wrap;
    margin: 0;

    li {
      font-family: "Nova Semibold";
      font-size: 0.875rem;
      white-space: nowrap;
      cursor: pointer;
    }
  }
}
/* 768px = 48em */
@media (min-width: 48em) {
  .header {
    flex-direction: row;
    justify-content: space-between;
  }
}
/* 1024px = 64em */
@media (min-width: 64em) {
  .header {
    padding: 1.875rem 4.375rem;

    &__list {
      gap: 1.25rem;

      li {
        font-size: 1.125rem;
      }
    }
  }
}
</style>
