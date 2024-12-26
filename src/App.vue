<template>
  <div id="app">
    <header>
      <HeroSection msg="Welcome to EasyBooking!" />
      <HeaderMainButtons :images="imageList" />
      <HeaderMainSearch />
    </header>

    <main>
      <Slider />
      <mainCards />
      <Advantages />
      <DownloadApp />
      <Shop />
      <ProfitableOffers />
    </main>
  </div>
</template>

<script setup lang="ts">
import HeroSection from "./components/HeroSection.vue";
import HeaderMainButtons from "./components/HeaderMainButtons.vue";
import HeaderMainSearch from "./components/HeaderMainSearch.vue";
import Slider from "./components/Slider.vue";
import mainCards from "./components/OffersCard.vue";
import Advantages from "./components/Advantages.vue";
import DownloadApp from "./components/DownloadApp.vue";
import Shop from "./components/Shop.vue";
import ProfitableOffers from "./components/ProfitableOffers.vue";

const imageNames = [
  "DubaiCountry.svg",
  "BaliCountry.svg",
  "SochiCountry.svg",
  "SaintPetersburgCountry.svg",
  "AstanaCountry.svg",
];

const imageList = imageNames.map((name) => ({
  url: new URL(`./assets/images/${name}`, import.meta.url).href,
}));
</script>

<style lang="scss" scoped></style>
