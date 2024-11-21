<template>
  <div class="info">
    <h1 class="info__title">Softline</h1>
    <p class="info__text">
      Ведущий поставщик IT-решений и сервисов.* Мы предлагаем комплексные
      IT-решения, облака, программное и аппаратное обеспечение, решения
      по цифровой трансформации и кибербезопасности, а также широкий спектр
      IT-услуг.
    </p>
    <div class="info__body">
      <div class="info__content">
        <span class="info__title info__title--big">> 30 лет</span>
        <span class="info__text">на IT-рынке</span>
      </div>
      <div class="info__content">
        <span class="info__title info__title--big">4600</span>
        <span class="info__text">сотрудников в России</span>
      </div>
      <div class="info__content">
        <span class="info__title info__title--big">25</span>
        <span class="info__text">городов России</span>
      </div>
      <div class="info__content info__content--mg-left">
        <span class="info__title info__title--big">2000 +</span>
        <span class="info__text">разработчиков</span>
      </div>
      <div class="info__content">
        <span class="info__title info__title--big">3000 +</span>
        <span class="info__text info__text--al-centered"
          >сотрудников ежегодно<br />
          проходят оценку и обучение
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.info {
  margin: 1.688rem 0.313rem 0 0.313rem;

  &__body {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    flex-wrap: wrap;
    margin: 3.125rem auto;
    width: 280px;
  }
  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;
  }
  &__content--mg-left {
    margin-left: 2rem;
  }
  &__title {
    font-family: "Nova Semibold";
    font-size: 1.75rem;
    color: #b01736;
    margin-top: 0rem;
    margin-bottom: 0.625rem;
  }
  &__title--big {
    font-size: 2.5rem;
    margin: 0;
  }
  &__text {
    font-family: "Nova Regular";
    color: #444444;
    margin: 0;
  }
  &__text--al-centered {
    text-align: center;
  }
}
/* 768px = 48em */
@media (min-width: 48em) {
  .info {
    &__title,
    &__text {
      text-align: center;
    }
    &__body {
      flex-wrap: nowrap;
      gap: 0.688rem;
      width: 100%;
    }
  }
}
/* 1440px = 90em */
@media (min-width: 90em) {
  .info {
    margin-top: 4.938rem;

    &__title {
      font-size: 3.5rem;
      margin-bottom: 1.875rem;
    }
    &__text {
      font-size: 2rem;
    }
    &__body {
      display: none;
    }
  }
}
/* 1920px = 120em */
@media (min-width: 120em) {
  .info {
    &__text {
      margin: 0 4rem;
    }
  }
}
</style>
