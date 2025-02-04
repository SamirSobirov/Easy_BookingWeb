<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
</script>

<template>
    <div class="plan_container">
        <Swiper
            :slides-per-view="3"
            space-between="11"
            navigation
            pagination
            class="swiper-container"
        >
            <SwiperSlide v-for="(index) in 10" :key="index">
                <div class="card">
                    <div class="card_content">
                        <h3 class="card_title"></h3>
                        <p class="card_price"></p>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
</template>

<style  lang="scss">

.plan_container {
    width: 100%;
    max-width: 800px;
    margin: auto;
}

.swiper-container {
    padding: 20px 0;
    display: flex;
    gap: 10px;
}

.card {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 16px;
    border-radius: 12px;
    width: 254px;
    height: 192px;
    background-color: #FFFFFF;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    text-align: center;

}

.card_title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 8px;
}

.card_price {
    font-size: 20px;
    font-weight: bold;
    color: #FF6B6B;
}
</style>
