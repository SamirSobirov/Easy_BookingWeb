<template>
    <div class="CardsWeather">
        <div v-for="(city, index) in cities" :key="index" class="WeatherGradusCard">
            <div class="weatherHeader">
                <p>{{ city.name }}</p>
                <h1>{{ city.temperature }}°C</h1>
            </div>

            <div class="weatherGradus">
                <div class="time">
                    <p>Временами облачно</p>
                    <p class="date">
                        <Icon icon="oui:token-date" width="18" height="18"/>
                        {{ city.date }}
                    </p>
                </div>
                <div class="gradus">
                    <div class="max">
                        <p>Макс: <span>{{ city.max }}°C</span></p>
                    </div>
                    <div class="max">
                        <p>Мин: <span>{{ city.min }}°C</span></p>
                    </div>
                </div>

                <swiper
                    :modules="[Navigation, Pagination]"
                    :slides-per-view="1"
                    :space-between="10"
                    :navigation="true"
                    :pagination="{ clickable: false }"
                    class="weather-swiper"
                >
                    <swiper-slide v-for="(weather, i) in weatherData" :key="i">
                        <WeatherCard :day="weather.day" :icon="weather.icon" :temperature="weather.temperature"/>
                    </swiper-slide>
                </swiper>

                <div class="weatherLastWeek">
                    <div class="weatherLastWeek__header">
                        <Icon icon="oui:token-date" width="18" height="18"/>
                        <span>Прогноз на 5 дней</span>
                    </div>
                    <div v-for="(forecast, j) in city.forecast" :key="j">
                        <div class="weatherLastWeek__main">
                            <p>{{ forecast.day }}</p>
                            <img :src="forecast.icon" alt="weather icon"/>
                            <p class="gradus">{{ forecast.min }}° <span style="color: #B5BBC9">/</span> {{
                                    forecast.max
                                }}°</p>
                        </div>
                        <hr v-if="j < city.forecast.length - 1"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {Swiper, SwiperSlide} from "swiper/vue";
import "swiper/css";
import {Navigation, Pagination} from "swiper/modules";
import {Icon} from "@iconify/vue";
import WeatherCard from "./WeatherCard.vue";

const cities = ref([
    {
        name: "Ташкент",
        temperature: 17,
        date: "21.12.2024",
        max: 45,
        min: -45,
        forecast: [
            {day: "Сегодня", icon: "/icons/cloudly.svg", max: 17, min: 10},
            {day: "Завтра", icon: "/public/icons/cloudly.svg", max: 16, min: 9},
            {day: "Понедельник", icon: "/public/icons/cloudly.svg", max: 15, min: 8}
        ]
    },
    {
        name: "Стамбул",
        temperature: 9,
        date: "21.12.2024",
        max: 22,
        min: -2,
        forecast: [
            {day: "Сегодня", icon: "/icons/cloudly.svg", max: 17, min: 10},
            {day: "Завтра", icon: "/icons/cloudly.svg", max: 16, min: 9},
            {day: "Понедельник", icon: "/icons/cloudly.svg", max: 15, min: 8}
        ]
    },
    {
        name: "Самарканд",
        temperature: -42,
        date: "21.12.2024",
        max: 12,
        min: 6,
        forecast: [
            {day: "Сегодня", icon: "/icons/cloudly.svg", max: 27, min: 40},
            {day: "Завтра", icon: "/icons/cloudly.svg", max: 6, min: 4},
            {day: "Понедельник", icon: "/icons/cloudly.svg", max: 5, min: 18}
        ]
    }
]);

const weatherData = ref([
    {day: "Сейчас", icon: "/icons/sun.svg", temperature: 17},
    {day: "12", icon: "/icons/sun.svg", temperature: 19},
    {day: "13", icon: "/icons/cloudly.svg", temperature: 18},
    {day: "15", icon: "/icons/sun.svg", temperature: 12},
    {day: "16", icon: "/icons/cloudly.svg", temperature: 13}
]);
</script>

<style lang="scss"></style>
