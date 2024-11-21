<template>
  <div class="slider">
    <div class="slider__content">
      <h2 class="slider__title">Корпоративная жизнь</h2>
      <div class="slider__btns">
        <button @click="prevSlide" class="slider__prev-btn">
          <img src="/imgs/arrow-left.svg" alt="arrow-left" />
        </button>
        <button @click="nextSlide" class="slider__next-btn">
          <img src="/imgs/arrow-right.svg" alt="arrow-right" />
        </button>
      </div>
    </div>
    <div class="slider__overflow">
      <div class="slider__list">
        <div
          class="slider__hero slider__slide"
          v-for="(hero, index) in heroes"
          :key="index"
        >
          <img :src="hero" alt="hero" />
        </div>
      </div>
    </div>
    <div class="slider__indicators">
      <div
        class="slider__indicator"
        v-for="(image, index) in heroes"
        :key="index"
        :class="{ active: index === activeIndex }"
        @click="changeSlide(index)"
      ></div>
    </div>
  </div>
</template>

<script setup>
const heroes = [
  "/imgs/slide-1.svg",
  "/imgs/slide-2.svg",
  "/imgs/slide-3.svg",
  "/imgs/slide-4.svg",
  "/imgs/slide-5.svg",
];

/* touchscreen slider from 320px till 1440px starts */
const activeIndex = ref(0);
const sliderContainer = ref(null);
const slideWidth = ref(0);
const slidesLength = heroes.length;

onMounted(() => {
  const slider = document.querySelector(".slider");
  sliderContainer.value = slider.querySelector(".slider__list");
  const slideElement = slider.querySelector(".slider__slide");
  slideWidth.value = slideElement.offsetWidth;
  sliderContainer.value.style.transition = "transform 0.3s ease";

  let startX = null;

  const handleTouchStart = (e) => {
    startX = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    if (!startX) return;

    const diffX = startX - e.touches[0].clientX;
    if (diffX > 50) {
      nextSlide();
      startX = null;
    } else if (diffX < -50) {
      prevSlide();
      startX = null;
    }
  };

  slider.addEventListener("touchstart", handleTouchStart, { passive: true });
  slider.addEventListener("touchmove", handleTouchMove, { passive: true });
});

const moveSlider = () => {
  const translateX = -activeIndex.value * slideWidth.value;
  sliderContainer.value.style.transform = `translateX(${translateX}px)`;
};
/* touchscreen slider from 320px till 1440px ends */

/* carousel from 1440px starts */
const prevSlide = () => {
  activeIndex.value =
    activeIndex.value === 0 ? slidesLength - 1 : activeIndex.value - 1;
  moveSlider();
};

const nextSlide = () => {
  activeIndex.value =
    activeIndex.value === slidesLength - 1 ? 0 : activeIndex.value + 1;
  moveSlider();
};
/* carousel from 1440px ends */
</script>

<style lang="scss" scoped>
@import "@/assets/app.scss";
.slider {
  &__title {
    font-family: "Nova Semibold";
    font-size: 1.75rem;
    color: $gray;
    margin: 0;
  }
  &__btns {
    display: none;
  }
  &__overflow {
    overflow: hidden;
  }
  &__list {
    display: flex;
    margin: 0.938rem 0 0.938rem 0;
    transition: transform 0.5s ease-in-out;
  }
  &__slide {
    width: 100%;
    flex-shrink: 0;

    img {
      width: 100%;
      flex-shrink: 0;

      img {
        width: 100%;
      }
    }
  }
  &__indicators {
    display: flex;
    gap: 0.625rem;
    margin-bottom: 3.125rem;
  }
  &__indicator {
    width: 100%;
    height: 3px;
    background-color: #f1f1f1;

    &.active {
      background-color: $russet;
    }
  }
}
/* 1440px = 90em */
@media (min-width: 90em) {
  .slider {
    width: 1110px;
    height: 979px;
    margin: 0 auto 3.125rem auto;
    &__content {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &__title {
      font-size: 3.5rem;
    }
    &__btns {
      display: flex;
      gap: 1.25rem;
    }
    &__prev-btn,
    &__next-btn {
      @include btn;
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background-color: #f0f0f0;
    }
    &__list {
      margin: 3.438rem 0 1.75rem 0;
    }
    &__slide {
      width: 100%;
      flex-shrink: 0;

      img {
        width: 100%;
        flex-shrink: 0;

        img {
          width: 100%;
        }
      }
    }
    &__indicators {
      display: flex;
      gap: 0.625rem;
    }
    &__indicator {
      width: 100%;
      height: 3px;
      background-color: #f1f1f1;

      &.active {
        background-color: $russet;
      }
    }
  }
}
</style>
