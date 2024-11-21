<template>
  <div id="app">
    <div class="page-container">
      <UIHeader></UIHeader>
      <UIInfo></UIInfo>
      <UINav></UINav>
      <UIMission></UIMission>
      <UIBusiness></UIBusiness>
      <UICompensation></UICompensation>
      <UISlider></UISlider>
    </div>
  </div>
</template>

<style lang="scss">
html {
  box-sizing: border-box;
}
*,
*::after,
*::before {
  box-sizing: inherit;
  /* outline: solid 1px red; */
}
body {
  min-width: 20em;
  background-color: #fff;
  margin: 0rem auto;
}
.page-container {
  padding: 0rem 0.938rem;
}
/* 1440px = 90em */
@media (min-width: 90em) {
  .page-container {
    padding: 0rem 5.938rem;
  }
}
/* 1920px = 120em */
@media (min-width: 120em) {
  .page-container {
    padding: 0rem 20.938rem;
  }
}
</style>
