<script setup lang="ts">

import HeaderMainSearch from "../components/HeaderMainSearch.vue";
import HeroSection from "../components/HeroSection.vue";
import HeaderMainButtons from "../components/HeaderMainButtons.vue";

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

<template>
    <header>
        <HeroSection msg="Welcome to EasyBooking!" />
        <HeaderMainButtons :images="imageList" />
        <HeaderMainSearch />
    </header>
    <RouterView/>
</template>

<style scoped lang="scss">

</style>