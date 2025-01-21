<script setup lang="ts">
import HeaderMainSearch from "../components/HeaderMainSearch.vue";
import HeroSection from "../components/HeroSection.vue";
import HeaderMainButtons from "../components/HeaderMainButtons.vue";
import BreadCrumb from "../components/breadcrumbs/BreadCrumb.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";
import AppBackground from "./AppBackground.vue";
const route = useRoute();

const isResultPage = computed(() => route.path === "/result");
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
    <AppBackground />
    <header>
        <HeroSection msg="Welcome to EasyBooking!" />
        <BreadCrumb v-if="isResultPage" />
        <HeaderMainButtons :images="imageList" />
        <HeaderMainSearch />
    </header>
    <RouterView />

</template>

<style lang="scss">
.full-width-header {
    width: 100%;
}
</style>