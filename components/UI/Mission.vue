<template>
  <div class="content">
    <img
      class="content__hero content__hero--from320px"
      src="/imgs/mission-from320px.svg"
      alt=""
    />
    <img
      class="content__hero content__hero--from1440px"
      src="/imgs/mission-from1440px.svg"
      alt=""
    />
  </div>
</template>

<style lang="scss" scoped>
.content {
  margin: -2rem 0 3.125rem 0;

  &__hero {
    width: 100%;
  }
  &__hero--from1440px {
    display: none;
  }
}
/* 768px = 48em */
@media (min-width: 48em) {
  .content {
    margin-top: 6.25rem;

    &__hero--from320px {
      display: none;
    }
    &__hero--from1440px {
      display: block;
    }
  }
}
</style>
