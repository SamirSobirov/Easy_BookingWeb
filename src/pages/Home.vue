<script setup lang="ts">

import HelpCenter from "../components/HelpCenter.vue";
import Advantages from "../components/Advantages.vue";
import Shop from "../components/Shop.vue";
import Footer from "../components/Footer.vue";
import Slider from "../components/Slider.vue";
import GroundHandling from "../components/GroundHandling.vue";
import ProfitableOffers from "../components/ProfitableOffers.vue";
import DownloadApp from "../components/DownloadApp.vue";
import Blog from "../components/Blog.vue";
import Reviews from "../components/Reviews.vue";
import MainCards from "../components/OffersCard.vue";
</script>

<template>


    <main>
        <Slider />
        <mainCards />
        <Advantages />
        <DownloadApp />
        <Shop />
        <ProfitableOffers />
        <Blog />
        <GroundHandling />
        <HelpCenter />
        <Reviews />
        <Footer />
    </main>
</template>

<style scoped lang="scss">

</style>