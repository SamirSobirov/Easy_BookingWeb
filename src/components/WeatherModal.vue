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
            {day: "Сегодня", icon: "/public/icons/cloudly.svg", max: 17, min: 10},
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
            {day: "Сегодня", icon: "/public/icons/cloudly.svg", max: 17, min: 10},
            {day: "Завтра", icon: "/public/icons/cloudly.svg", max: 16, min: 9},
            {day: "Понедельник", icon: "/public/icons/cloudly.svg", max: 15, min: 8}
        ]
    },
    {
        name: "Самарканд",
        temperature: -42,
        date: "21.12.2024",
        max: 12,
        min: 6,
        forecast: [
            {day: "Сегодня", icon: "/public/icons/cloudly.svg", max: 27, min: 40},
            {day: "Завтра", icon: "/public/icons/cloudly.svg", max: 6, min: 4},
            {day: "Понедельник", icon: "/public/icons/cloudly.svg", max: 5, min: 18}
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

<template>
    <div class="Cards">
        <div v-for="(city, index) in cities" :key="index" class="Card">
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

<style lang="scss">
.Cards {
    display: flex;
    gap: 14px;
    overflow-x: scroll;
    padding-bottom: 10px;

    &::-webkit-scrollbar {
        height: 4px;
    }

    &::-webkit-scrollbar-track {
        background: #f5f5f5;
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
        background: #c0c4cc;
        border-radius: 10px;
    }

    .Card {
        width: 308px;
        height: 530px;
        background-color: rgba(255, 255, 255, 0.54);
        border-radius: 16px;


        .weatherHeader {
            margin-top: 12px;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            justify-content: center;
            gap: 8px;

            p {
                font-size: 16px;
                font-weight: 500;
                color: #6D7586;
                font-family: Mulish, sans-serif;
                line-height: 24px;
            }

            h1 {
                font-size: 32px;
                font-weight: 600;
                font-family: Mulish, sans-serif;
            }
        }

        .weatherGradus {
            display: flex;
            flex-direction: column;
            gap: 8px;
            padding: 12px 16px;

            .time {
                display: flex;
                justify-content: space-between;

                p {
                    font-size: 14px;
                    font-family: Mulish, sans-serif;
                    color: #23282D;
                    letter-spacing: -1%;
                }

                .date {
                    cursor: pointer;
                    font-size: 14px;
                    font-family: Mulish, sans-serif;
                    color: #6D7586;
                    letter-spacing: -1%;
                    display: flex;
                    gap: 3px;
                }
            }

            .gradus {
                margin-top: 8px;
                display: flex;
                gap: 6px;
                align-items: center;

                .max {
                    width: 135px;
                    text-align: left;
                    padding: 8px 8px;
                    background-color: white;
                    border-radius: 8px;
                    height: 31px;

                    p {
                        display: flex;
                        gap: 4px;
                        font-size: 12px;
                        font-weight: 500;
                        font-family: Mulish, sans-serif;
                        line-height: 15px;

                        span {
                            font-size: 12px;
                            font-weight: 500;
                            font-family: Mulish, sans-serif;
                            color: #23282D;
                        }
                    }
                }
            }
        }

        .swiper {
            margin-top: 10px;
            overflow-x: scroll !important;
            padding-bottom: 10px;
        }

        .swiper::-webkit-scrollbar {
            height: 4px;
        }

        .swiper::-webkit-scrollbar-track {
            background: #f5f5f5;
            border-radius: 10px;
        }

        .swiper::-webkit-scrollbar-thumb {
            background: #c0c4cc;
            border-radius: 10px;
        }

        .swiper-slide {
            flex-shrink: 1;
        }

        .weather-swiper {
            width: 100%;

        }

        .weatherLastWeek {
            display: flex;
            flex-direction: column;
            gap: 12px;
            width: 276px;
            text-align: left;
            background-color: #FFFFFF;
            border-radius: 8px;
            padding: 10px 8px;
            height: 234px;

            &__header {
                align-items: center;
                text-align: left;
                display: flex;
                gap: 6px;

                span {
                    font-size: 14px;
                    font-family: Mulish, sans-serif;
                }
            }

            &__main {
                display: flex;
                justify-content: space-between;
                text-align: center;
                align-items: center;

                p {
                    font-size: 14px;
                    font-family: Mulish, sans-serif;
                    color: #81899A;
                    font-weight: 400;
                }

                img {
                    width: 24px;
                    height: 24px;
                }

                .gradus {
                    color: #23282D;
                    font-size: 14px;
                    font-family: Mulish, sans-serif;
                }
            }

            hr {
                margin-top: 0;
                width: 100%;
                border: 1px solid rgba(223, 225, 233, 0.19);
            }
        }
    }
}
</style>
