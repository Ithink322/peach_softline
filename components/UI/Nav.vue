<template>
  <transition name="fade-slide">
    <div v-if="isVisible">
      <nav class="container-nav">
        <div class="nav">
          <button @click="toggleDropdown" class="nav__content-btn">
            Офисы Softline
            <img src="/imgs/arrow-down.svg" alt="" class="nav__arrow" />
          </button>
          <div
            v-if="isBodyVisible"
            class="nav__body"
            :class="{ 'nav__body--opacity': shouldApplyOpacity }"
          >
            <button
              v-for="region in regions"
              :key="region.name"
              class="nav__btn"
              :class="{ active: activeBtn === region.name }"
              @click="setActiveBtn(region.name)"
            >
              {{ region.name }}
            </button>
          </div>
          <div
            v-if="isDropdownActive && !isDropdownHiddenOnLargeScreens"
            class="nav__dropdown"
          >
            <button
              @click="
                toggleList(0);
                setActiveBtn('Москва');
              "
              class="nav__dropdown-btn"
              :class="{ active: activeListIndex === 0 }"
            >
              Москва
            </button>
            <div class="nav__content">
              <button
                @click="
                  toggleList(1);
                  setActiveBtn('Центр');
                "
                :class="{ active: activeListIndex === 1 }"
                class="nav__dropdown-btn"
              >
                Центр
                <img
                  class="nav__dropdown-arrow"
                  :class="{ active: activeListIndex === 1 }"
                  src="/imgs/triangle.svg"
                  alt=""
                />
              </button>
              <ul v-if="activeListIndex === 1" class="nav__list">
                <li>Воронеж</li>
                <li>Ярославль</li>
                <li>Белгород</li>
              </ul>
            </div>
            <div class="nav__content">
              <button
                @click="
                  toggleList(2);
                  setActiveBtn('Северо-Запад');
                "
                :class="{ active: activeListIndex === 2 }"
                class="nav__dropdown-btn"
              >
                Северо-Запад
                <img
                  class="nav__dropdown-arrow"
                  :class="{ active: activeListIndex === 2 }"
                  src="/imgs/triangle.svg"
                  alt=""
                />
              </button>
              <ul v-if="activeListIndex === 2" class="nav__list">
                <li>Санкт-Петербург</li>
                <li>Калининград</li>
              </ul>
            </div>
            <div class="nav__content">
              <button
                @click="
                  toggleList(3);
                  setActiveBtn('Юг');
                "
                :class="{ active: activeListIndex === 3 }"
                class="nav__dropdown-btn"
              >
                Юг
                <img
                  class="nav__dropdown-arrow"
                  :class="{ active: activeListIndex === 3 }"
                  src="/imgs/triangle.svg"
                  alt=""
                />
              </button>
              <ul v-if="activeListIndex === 3" class="nav__list">
                <li>Ростов-на-Дону</li>
                <li>Краснодар</li>
                <li>Волгоград</li>
              </ul>
            </div>
            <div class="nav__content">
              <button
                @click="
                  toggleList(4);
                  setActiveBtn('Волга');
                "
                :class="{ active: activeListIndex === 4 }"
                class="nav__dropdown-btn"
              >
                Волга
                <img
                  class="nav__dropdown-arrow"
                  :class="{ active: activeListIndex === 4 }"
                  src="/imgs/triangle.svg"
                  alt=""
                />
              </button>
              <ul v-if="activeListIndex === 4" class="nav__list">
                <li>Казань</li>
                <li>Самара</li>
                <li>Уфа</li>
                <li>Оренбург</li>
                <li>
                  Нижний<br />
                  Новгород
                </li>
              </ul>
            </div>
            <div class="nav__content">
              <button
                @click="
                  toggleList(5);
                  setActiveBtn('Урал');
                "
                :class="{ active: activeListIndex === 5 }"
                class="nav__dropdown-btn"
              >
                Урал
                <img
                  class="nav__dropdown-arrow"
                  :class="{ active: activeListIndex === 5 }"
                  src="/imgs/triangle.svg"
                  alt=""
                />
              </button>
              <ul v-if="activeListIndex === 5" class="nav__list">
                <li>Екатеринбург</li>
                <li>Челябинск</li>
                <li>Пермь</li>
                <li>Сургут</li>
                <li>Тюмень</li>
                <li>Ижевск</li>
              </ul>
            </div>
            <div class="nav__content">
              <button
                @click="
                  toggleList(6);
                  setActiveBtn('Сибирь');
                "
                :class="{ active: activeListIndex === 6 }"
                class="nav__dropdown-btn"
              >
                Сибирь
                <img
                  class="nav__dropdown-arrow"
                  :class="{ active: activeListIndex === 6 }"
                  src="/imgs/triangle.svg"
                  alt=""
                />
              </button>
              <ul v-if="activeListIndex === 6" class="nav__list">
                <li>Новосибирск</li>
                <li>Омск</li>
                <li>Томск</li>
                <li>Красноярск</li>
                <li>Иркутск</li>
              </ul>
            </div>
            <div class="nav__content">
              <button
                @click="
                  toggleList(7);
                  setActiveBtn('Дальний Восток');
                "
                :class="{ active: activeListIndex === 7 }"
                class="nav__dropdown-btn"
              >
                Дальний Восток
                <img
                  class="nav__dropdown-arrow"
                  :class="{ active: activeListIndex === 7 }"
                  src="/imgs/triangle.svg"
                  alt=""
                />
              </button>
              <ul v-if="activeListIndex === 7" class="nav__list">
                <li>Хабаровск</li>
                <li>Владивосток</li>
              </ul>
            </div>
          </div>
        </div>
        <div
          v-if="isDropdownActiveFrom1440px"
          class="nav__dropdown nav__dropdown--from1440px"
        >
          <button class="nav__dropdown-btn">Москва</button>
          <div class="nav__content">
            <button class="nav__dropdown-btn">Центр</button>
            <ul class="nav__list">
              <li>Воронеж</li>
              <li>Ярославль</li>
              <li>Белгород</li>
            </ul>
          </div>
          <div class="nav__content">
            <button class="nav__dropdown-btn">Северо-Запад</button>
            <ul class="nav__list">
              <li>Санкт-Петербург</li>
              <li>Калининград</li>
            </ul>
          </div>
          <div class="nav__content">
            <button class="nav__dropdown-btn">Юг</button>
            <ul class="nav__list">
              <li>Ростов-на-Дону</li>
              <li>Краснодар</li>
              <li>Волгоград</li>
            </ul>
          </div>
          <div class="nav__content">
            <button class="nav__dropdown-btn">Волга</button>
            <ul class="nav__list">
              <li>Казань</li>
              <li>Самара</li>
              <li>Уфа</li>
              <li>Оренбург</li>
              <li>
                Нижний<br />
                Новгород
              </li>
            </ul>
          </div>
          <div class="nav__content">
            <button class="nav__dropdown-btn">Урал</button>
            <ul class="nav__list">
              <li>Екатеринбург</li>
              <li>Челябинск</li>
              <li>Пермь</li>
              <li>Сургут</li>
              <li>Тюмень</li>
              <li>Ижевск</li>
            </ul>
          </div>
          <div class="nav__content">
            <button class="nav__dropdown-btn">Сибирь</button>
            <ul class="nav__list">
              <li>Новосибирск</li>
              <li>Омск</li>
              <li>Томск</li>
              <li>Красноярск</li>
              <li>Иркутск</li>
            </ul>
          </div>
          <div class="nav__content">
            <button class="nav__dropdown-btn">Дальний Восток</button>
            <ul class="nav__list">
              <li>Хабаровск</li>
              <li>Владивосток</li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="content" :class="{ 'content--opacity': shouldApplyOpacity }">
        <img class="content__hero" :src="currentMap" alt="Map" />
      </div>
    </div>
  </transition>
</template>

<script setup>
const isVisible = ref(false);
onMounted(() => {
  isVisible.value = true;
});

const isBodyVisible = ref(true);
const isDropdownActive = ref(false);
const isDropdownActiveFrom1440px = ref(false);
const isDropdownHiddenOnLargeScreens = ref(false);

const toggleDropdown = () => {
  if (typeof window !== "undefined" && window.innerWidth < 1440) {
    isBodyVisible.value = !isBodyVisible.value;
    isDropdownActive.value = !isDropdownActive.value;
  }
  isDropdownActiveFrom1440px.value = !isDropdownActiveFrom1440px.value;
};

const updateDropdownVisibility = () => {
  if (typeof window !== "undefined") {
    isDropdownHiddenOnLargeScreens.value = window.innerWidth >= 1440;
  }
};
onMounted(() => {
  if (typeof window !== "undefined") {
    window.addEventListener("resize", updateDropdownVisibility);
    updateDropdownVisibility();
  }
});

onUnmounted(() => {
  if (typeof window !== "undefined") {
    window.removeEventListener("resize", updateDropdownVisibility);
  }
});

const activeBtn = ref("Все");
const currentMap = ref("/imgs/map-all.svg");

const regions = [
  { name: "Все", map: "/imgs/map-all.svg" },
  { name: "Москва", map: "/imgs/map-moscow.svg" },
  { name: "Центр", map: "/imgs/map-center.svg" },
  { name: "Северо-Запад", map: "/imgs/map-northwest.svg" },
  { name: "Юг", map: "/imgs/map-south.svg" },
  { name: "Волга", map: "/imgs/map-volga.svg" },
  { name: "Урал", map: "/imgs/map-ural.svg" },
  { name: "Сибирь", map: "/imgs/map-siberia.svg" },
  { name: "Дальний Восток", map: "/imgs/map-fareast.svg" },
];

const setActiveBtn = (btn) => {
  activeBtn.value = btn;
  const selectedRegion = regions.find((region) => region.name === btn);
  if (selectedRegion) {
    currentMap.value = selectedRegion.map;
  }
};

const activeListIndex = ref(null);
const toggleList = (index) => {
  activeListIndex.value = activeListIndex.value === index ? null : index;
};

const windowWidth = ref(0);
onMounted(() => {
  if (typeof window !== "undefined") {
    windowWidth.value = window.innerWidth;
  }
});

const shouldApplyOpacity = computed(() => {
  return isDropdownActiveFrom1440px.value && windowWidth.value >= 1440;
});
</script>

<style lang="scss" scoped>
@import "@/assets/app.scss";
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}
.fade-slide-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
.nav {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  overflow: hidden;
  padding: 1.125rem 0.75rem 0rem 0.313rem;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.06);
  transition: opacity 0.3s ease;

  &__content-btn {
    @include btn;
    gap: 0.375rem;
    font-family: "Nova Semibold";
    font-size: 1.25rem;
  }
  &__body {
    display: flex;
    gap: 1rem;
  }
  &__btn {
    @include btn;
    white-space: nowrap;
    gap: 0.188rem;
    font-family: "Nova Semibold";
    font-size: 0.875rem;
    padding-bottom: 20px;

    &.active {
      color: $russet;
      border-bottom: 2px solid $russet;
    }
  }
  &__dropdown {
    display: flex;
    gap: 1.875rem;
    flex-wrap: wrap;
    align-items: start;
    margin-bottom: 1.188rem;
  }
  &__content {
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
  }
  &__dropdown-btn {
    @include btn;
    gap: 0.188rem;
    font-family: "Nova Semibold";
    font-size: 0.875rem;

    &.active {
      color: $russet;
    }
  }
  &__dropdown-arrow {
    &.active {
      rotate: 180deg;
    }
  }
  &__list {
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
    margin: 0rem;
    padding: 0rem;
    list-style-type: none;

    li {
      font-family: "Nova Regular";
      font-size: 0.875rem;
    }
  }
}
.content {
  overflow: hidden;

  &__hero {
    height: 445px;
  }
}
/* 1024px = 64em */
@media (min-width: 64em) {
  .nav {
    padding: 1.75rem 4.375rem 0rem 4.375rem;

    &__content-btn {
      gap: 1rem;
      font-size: 1.5rem;
    }
    &__btn {
      font-size: 1.125rem;
      padding-bottom: 28px;

      &.active {
        border-bottom: 3px solid $russet;
      }
    }
    &__dropdown-btn {
      font-size: 1.125rem;
      gap: 0.5rem;
    }
    &__list {
      li {
        font-size: 1.125rem;
      }
    }
  }
  .content {
    margin-top: 5.625rem;

    &__hero {
      width: 100%;
    }
  }
}
/* 1440px = 90em */
@media (min-width: 90em) {
  .container-nav {
    position: relative;
  }
  .nav {
    flex-direction: row;
    align-items: start;
    justify-content: space-between;
    margin-top: 4.938rem;

    &__dropdown {
      display: none;
    }
    &__dropdown--from1440px {
      position: absolute;
      display: flex;
      padding: 1.875rem 4.281rem;
      width: 100%;
      background-color: #ffffff;
      margin-top: 1.25rem;
      margin-bottom: 0rem;
      box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.06);
      z-index: 1;
    }
    &__body--opacity {
      opacity: 10%;
    }
  }
  .content {
    &--opacity {
      opacity: 10%;
    }
    &__hero {
      height: 604px;
    }
  }
}
</style>
