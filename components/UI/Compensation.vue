<template>
  <div class="content">
    <div class="container">
      <h2 class="container__title">Компенсационный пакет</h2>
      <div class="container__list">
        <div class="container__content">
          <div class="container__cirle">
            <img
              src="/imgs/dmc-icon.svg"
              alt=""
              class="container__cirle-icon"
            />
          </div>
          <span class="container__text">ДМС</span>
        </div>
        <div class="container__content">
          <div class="container__cirle">
            <img
              src="/imgs/holiday-on-birthday-icon.svg"
              alt=""
              class="container__cirle-icon"
            />
          </div>
          <span class="container__text"
            >Выходной<br />
            в день рождения</span
          >
        </div>
        <div class="container__content">
          <div class="container__cirle">
            <img
              src="/imgs/phone-icon.svg"
              alt=""
              class="container__cirle-icon"
            />
          </div>
          <span class="container__text"
            >Корпоративная<br />
            мобильная связь</span
          >
        </div>
        <div class="container__content">
          <div class="container__cirle">
            <img
              src="/imgs/dumbbell-icon.svg"
              alt=""
              class="container__cirle-icon"
            />
          </div>
          <span class="container__text"
            >Корпоративные<br />
            скидки на спорт</span
          >
        </div>
        <div class="container__content">
          <div class="container__cirle">
            <img
              src="/imgs/lti-icon.svg"
              alt=""
              class="container__cirle-icon"
            />
          </div>
          <span class="container__text">LTI</span>
        </div>
      </div>
      <div class="container__border"></div>
      <h2 class="container__title container__title--small">
        Программа дополнительной мотивации<br />
        <span class="container__title--red">доплата 12% от суммы</span>
      </h2>
      <div class="container__list">
        <div class="container__content">
          <div class="container__cirle">
            <img
              src="/imgs/printer-icon.svg"
              alt=""
              class="container__cirle-icon"
            />
          </div>
          <span class="container__text">Оргтехники</span>
        </div>
        <div class="container__content">
          <div class="container__cirle">
            <img
              src="/imgs/dmc-icon.svg"
              alt=""
              class="container__cirle-icon"
            />
          </div>
          <span class="container__text">ДМС</span>
        </div>
        <div class="container__content">
          <div class="container__cirle">
            <img
              src="/imgs/ipoteka-icon.svg"
              alt=""
              class="container__cirle-icon"
            />
          </div>
          <span class="container__text">Ипотеки</span>
        </div>
      </div>
    </div>
    <div class="container container--over">
      <h2 class="container__title">Компенсационный пакет</h2>
      <div class="container__list">
        <div class="container__content">
          <div class="container__cirle">
            <img
              src="/imgs/dmc-icon.svg"
              alt=""
              class="container__cirle-icon"
            />
          </div>
          <span class="container__text">ДМС</span>
        </div>
        <div class="container__content">
          <div class="container__cirle">
            <img
              src="/imgs/holiday-on-birthday-icon.svg"
              alt=""
              class="container__cirle-icon"
            />
          </div>
          <span class="container__text"
            >Выходной<br />
            в день рождения</span
          >
        </div>
        <div class="container__content">
          <div class="container__cirle">
            <img
              src="/imgs/phone-icon.svg"
              alt=""
              class="container__cirle-icon"
            />
          </div>
          <span class="container__text"
            >Корпоративная<br />
            мобильная связь</span
          >
        </div>
        <div class="container__content">
          <div class="container__cirle">
            <img
              src="/imgs/dumbbell-icon.svg"
              alt=""
              class="container__cirle-icon"
            />
          </div>
          <span class="container__text"
            >Корпоративные<br />
            скидки на спорт</span
          >
        </div>
        <div class="container__content">
          <div class="container__cirle">
            <img
              src="/imgs/lti-icon.svg"
              alt=""
              class="container__cirle-icon"
            />
          </div>
          <span class="container__text">LTI</span>
        </div>
      </div>
      <div class="container__border"></div>
      <h2 class="container__title container__title--small">
        Программа дополнительной мотивации<br />
        <span class="container__title--red">доплата 12% от суммы</span>
      </h2>
      <div class="container__list">
        <div class="container__content">
          <div class="container__cirle">
            <img
              src="/imgs/printer-icon.svg"
              alt=""
              class="container__cirle-icon"
            />
          </div>
          <span class="container__text">Оргтехники</span>
        </div>
        <div class="container__content">
          <div class="container__cirle">
            <img
              src="/imgs/dmc-icon.svg"
              alt=""
              class="container__cirle-icon"
            />
          </div>
          <span class="container__text">ДМС</span>
        </div>
        <div class="container__content">
          <div class="container__cirle">
            <img
              src="/imgs/ipoteka-icon.svg"
              alt=""
              class="container__cirle-icon"
            />
          </div>
          <span class="container__text">Ипотеки</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "@/assets/app.scss";
.container {
  background-color: #fff;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.06);
  padding: 1.5rem 0.313rem;
  margin: 3.125rem 0;

  &__title {
    font-family: "Nova Semibold";
    font-size: 1.75rem;
    color: $gray;
    margin: 0 0 2.5rem 0;
    text-align: center;

    &--red {
      color: #b01736;
    }
    &--small {
      font-size: 1.375rem;
    }
  }
  &__list {
    display: flex;
    gap: 1.563rem;
    flex-wrap: wrap;
    justify-content: center;
  }
  &__content {
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
    align-items: center;
    width: 120px;
    cursor: pointer;
  }
  &__cirle {
    width: 80px;
    height: 80px;
    background-color: #f1f1f1;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__cirle-icon {
    z-index: 2;
  }
  &__text {
    font-family: "Nova Regular";
    text-align: center;
  }
  &__border {
    border: 1px solid #f1f1f1;
    margin: 1.5rem 0;
  }
}
/* 1440px = 90em */
@media (min-width: 90em) {
  .content {
    position: relative;
  }
  .container {
    padding: 5rem 4.875rem;
    width: 1110px;
    margin: 6.25rem auto;

    &--over {
      position: absolute;

      top: -5rem;
      margin: 0 0 0 -1.438rem;
      z-index: 2;
    }
    &__title {
      font-size: 3.5rem;
      margin: 0 0 3.125rem 0;

      &--small {
        font-size: 2.5rem;
      }
    }
    &__list {
      gap: 1rem;
    }
    &__content {
      width: 178px;
    }
    &__cirle {
      width: 110px;
      height: 110px;
    }
    &__cirle-icon {
      width: 48px;
      height: 48px;
    }
    &__text {
      font-size: 1.125rem;
    }
    &__border {
      margin: 4.688rem -3rem 4.375rem -3rem;
    }
  }
}
</style>
