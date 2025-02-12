<script setup lang="ts">
import {Icon} from "@iconify/vue";
import { ref, onMounted } from "vue";
import EmblaCarousel from "embla-carousel";
import WeatherCard from "./WeatherCard.vue";
const weatherData = ref([
    { day: "Сейчас", icon: "/icons/sun.svg", temperature: 17 },
    { day: "12", icon: "/icons/sun.svg", temperature: 19 },
    { day: "13", icon: "/icons/cloudly.svg", temperature: 18 },
    { day: "15", icon: "/icons/sun.svg", temperature: 12 },
    { day: "16", icon: "/icons/cloudly.svg", temperature: 13 },
    { day: "12", icon: "/icons/sun.svg", temperature: 19 },
    { day: "13", icon: "/icons/cloudly.svg", temperature: 18 },
]);
const emblaRef = ref<HTMLElement | null>(null);

onMounted(() => {
    if (emblaRef.value) {
        const embla = EmblaCarousel(emblaRef.value, {
            loop: false, // Отключить бесконечный цикл
            dragFree: true, // Плавный скролл
            align: 'start', // Выравнивание слайдов
            skipSnaps: false, // Пропускать ли промежуточные слайды
            inViewThreshold: 0.7, // Порог видимости слайда
        });

        // Опционально: Добавьте обработчики событий, если нужно
        embla.on('select', () => {
            console.log('Current slide:', embla.selectedScrollSnap());
        });
    }
});
</script>

<template>
    <div class="Cards">
        <div class="Card">
            <div class="weatherHeader">
                <p>Ташкент</p>
                <h1>17°C</h1>
            </div>

            <div class="weatherGradus">
                <div class="time">
                    <p>Временами облачно</p>
                    <p class="date">
                        <Icon icon="oui:token-date" width="18" height="18"/>
                        21.12.2024
                    </p>
                </div>
                <div class="gradus">
                    <div class="max">
                        <p>Макс: <span>12°C</span></p>
                    </div>
                    <div class="max">
                        <p>Мин: <span>2°C</span></p>
                    </div>
                </div>

                <div class="weather-slider embla" ref="emblaRef">
                    <div class="embla__viewport">
                        <div class="embla__container">
                            <div class="embla__slide" v-for="(weather, index) in weatherData" :key="index">
                                <WeatherCard :day="weather.day" :icon="weather.icon" :temperature="weather.temperature" />
                            </div>
                        </div>
                    </div>
                </div>


                <div class="weatherLastWeek">

                </div>
            </div>
        </div>
        <div class="Card">

        </div>
    </div>
</template>

<style lang="scss">
.weather-slider {
    overflow-x: auto;
    white-space: nowrap;
    padding-bottom: 10px;
}

.weather-slider::-webkit-scrollbar {
    height: 4px;
}

.weather-slider::-webkit-scrollbar-thumb {
    background-color: #D0D5DD;
    border-radius: 24px;
}

.weather-slider::-webkit-scrollbar-track {
    background-color: #F5F5F5;
    border-radius: 24px;
}

.embla__container {
    display: flex;
    gap: 10px;
}

.embla__slide:active {
    cursor: grabbing;
}

.Cards {
    display: flex;
    gap: 14px;

    .Card {
        width: 308px;
        height: 518px;
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

                    p{
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

        .slider {
            display: flex;
            gap: 6px;

        }

        .weatherLastWeek {

        }
    }
}
</style>