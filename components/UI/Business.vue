<template>
  <div class="container" :class="{ 'container--visible': isVisible }">
    <h2 class="container__title">Направления бизнеса</h2>
    <div class="container__list">
      <div
        class="container__rect"
        :class="{ 'container__rect--full': expandedIndex === index }"
        v-for="(business, index) in businesses"
        :key="index"
        @click="toggleImage(index)"
      >
        <img
          class="container__hero"
          :class="{ 'container__hero--full': expandedIndex === index }"
          :src="business.img"
          :alt="business.title"
        />
        <div class="container__hero-overlay"></div>
        <div
          class="container__content"
          :class="{ 'container__content--full': expandedIndex === index }"
        >
          <span class="container__rect-title">{{ business.title }}</span>
          <img
            src="/imgs/arrow-white.svg"
            alt="arrow"
            class="container__rect-arrow"
            :class="{ 'container__rect-arrow--full': expandedIndex === index }"
          />
        </div>
        <p v-if="expandedIndex === index" class="container__desc">
          {{ business.desc }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const isVisible = ref(false);

onMounted(() => {
  const containerElement = document.querySelector(".container");

  const observer = new IntersectionObserver(
    (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        isVisible.value = true;
        observer.unobserve(containerElement);
      }
    },
    { threshold: 0.1 }
  );

  if (containerElement) observer.observe(containerElement);
});

const businesses = [
  {
    img: "/imgs/business-1.svg",
    title: "Решения Softline",
    desc: "ГК Softline предлагает клиентам собственную линейку оборудования (ПК, серверы, торговое оборудование и проч.), разработку программных продуктов, облачных решений, решений в области информационной безопасности.",
  },
  {
    img: "/imgs/business-2.svg",
    title: "Кибербезопасность",
    desc: "Softline обладает всеми необходимыми государственными лицензиями для организации проектов по информационной безопасности и аттестации.",
  },
  {
    img: "/imgs/business-3.svg",
    title: "Импортозамещение",
    desc: "ГК Softline обладает широчайшим портфелем решений и услуг для импортозамещения, включая ПО и оборудование собственного производства.",
  },
  {
    img: "/imgs/business-4.svg",
    title: "Облачные решения",
    desc: "Softline использует современные облачные решения как российских, так и международных вендоров для масштабирования бизнеса своих клиентов. Подписки, услуги, трансформация.",
  },
  {
    img: "/imgs/business-5.svg",
    title: "Цифровая трансформация и разработка ПО",
    desc: "Softline использует современные технологи и новые возможности для увеличения производительности бизнеса заказчика. В штате ГК Softline - 2000+ разработчиков, которые трансформируют ПО под нужды конкретного предприятия.",
  },
  {
    img: "/imgs/business-6.svg",
    title: "Техническая поддержка Softline",
    desc: "200+ инженеров, 24 часа в сутки, 7 дней в неделю, 12 месяцев в году, сервисное партнерство с 30+ мировыми производителями.",
  },
];

const expandedIndex = ref(null);
const toggleImage = (index) => {
  expandedIndex.value = expandedIndex.value === index ? null : index;
};
</script>

<style lang="scss" scoped>
.container {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;

  &.container--visible {
    opacity: 1;
    transform: translateY(0);
  }
  &__title {
    font-family: "Nova Semibold";
    font-size: 1.75rem;
    color: #444444;
    text-align: center;
    margin: 0 0 0.938rem 0;
  }
  &__list {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
  }
  &__rect {
    position: relative;
    height: 60px;
    cursor: pointer;

    &--full {
      height: 240px;
    }
  }
  &__hero {
    height: 60px;
    width: 100%;
    object-fit: cover;
    object-position: top;

    &--full {
      height: 240px;
    }
  }
  &__hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background-color: #2d3653;
    opacity: 60%;
    pointer-events: none;

    .container__hero--full + & {
      height: 100%;
    }
  }
  &__content {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-between;
    top: 0rem;
    width: 100%;
    height: 60px;
    padding: 0rem 0.625rem;
  }
  &__rect-arrow {
    &--full {
      rotate: 180deg;
    }
  }
  &__rect-title {
    font-family: "Nova Semibold";
    font-size: 1.25rem;
    color: #ffffff;
  }
  &__desc {
    position: absolute;
    top: 0rem;
    padding: 0rem 0.625rem;
    margin: 3.75rem 0 0 0;
    font-family: "Nova Regular";
    font-size: 1.063rem;
    color: #fff;
  }
}
/* 1440px = 90em */
@media (min-width: 90em) {
  .container {
    &__title {
      font-size: 3.5rem;
    }
    &__list {
      flex-direction: row;
      flex-wrap: wrap;
      gap: 1.25rem;
      justify-content: center;
    }
    &__rect {
      height: 260px;
      max-width: calc((100% - 1.25rem) / 2);

      &--full {
        height: 260px;
      }
    }
    &__hero {
      height: 260px;

      &--full {
        height: 260px;
      }
    }
    &__hero-overlay {
      height: 80px;
      top: auto;
      bottom: 0rem;
    }
    &__content {
      height: 80px;
      padding: 0rem 1.25rem;
      top: auto;
      bottom: 0rem;

      &--full {
        top: 0rem;
      }
    }
    &__rect-arrow {
      display: none;
    }
    &__rect-title {
      font-size: 1.5rem;
    }
    &__desc {
      padding: 0rem 1.25rem;
      margin-top: 5rem;
    }
  }
}
</style>
