<template>
    <AppBackground/>
    <header>
        <HeroSection msg="Welcome to EasyBooking!"/>
        <BreadCrumb v-if="isResultPage" current-page="Поиск"/>
        <HeaderMainButtons/>
        <HeaderMainSearch v-if="isHomePage || isResultPage"/> 
    </header>
    <main>
        <Home v-if="isHomePage"/> 
        <RouterView v-else />
    </main>
</template>

<script setup lang="ts">
import HeaderMainSearch from "../components/HeaderMainSearch.vue";
import HeroSection from "../components/HeroSection.vue";
import HeaderMainButtons from "../components/HeaderMainButtons.vue";
import BreadCrumb from "../components/breadcrumbs/BreadCrumb.vue";
import Home from "../pages/Home.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";
import AppBackground from "./AppBackground.vue";

const route = useRoute();

const isHomePage = computed(() => route.path === "/");

const isResultPage = computed(() => route.path === "/result");
</script>


<style lang="scss">
.full-width-header {
    width: 100%;
}
</style>