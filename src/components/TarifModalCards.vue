<script setup lang="ts">
import {Swiper, SwiperSlide} from 'swiper/vue';
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
                        <h3 class="card_title">Эконом Премиум <input name="toggle" type="checkbox"/></h3>

                        <div class="card_main">
                            <div class="inputs">

                                <div class="Input">
                                    <input type="checkbox" class="mainInput" checked disabled>
                                </div>

                                <div class="spans">
                                    <span>Багаж: Взрослый <br> 30кг/10кг <span style="font-size: 12px; color: #B5BBC9">40x30x20 см </span></span>
                                </div>
                            </div>

                            <div class="inputs">
                                <input type="checkbox" class="mainInput" checked disabled>
                                <span>Питание на борту</span>
                            </div>

                            <div class="inputs">
                                <input type="checkbox" class="mainInput" checked disabled>
                                <span>Выбор место на борту</span>
                            </div>

                            <div class="inputs">
                                <input type="checkbox" class="mainInput" checked disabled>
                                <span>WiFi</span>
                            </div>

                            <div class="inputs">
                                <a href="#">Подробно</a>
                            </div>
                        </div>
                        <p class="card_price"></p>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
</template>

<style lang="scss">

.plan_container {
    width: 100%;
    max-width: 800px;
    margin: auto;
}

.swiper-container {
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
    text-align: center;


    .card_content {

        .card_main {
            justify-content: left;
            display: flex;
            text-align: left;
            gap: 9px;
            flex-direction: column;

            .inputs {
                align-items: center;
                text-align: left;
                justify-content: left;
                display: flex;
                gap: 11px;

                a {
                    color: #00B8D7;
                    font-size: 14px;
                }
            }

            .mainInput[type="checkbox"] {
                appearance: none;
                -webkit-appearance: none;
                -moz-appearance: none;
                width: 15px;
                height: 15px;
                border: 1px solid #27AE60;
                border-radius: 4px;
                outline: none;
                cursor: pointer;
                background-color: white;
                position: relative;

                &::before {
                    display: block;
                    width: 3px;
                    height: 6px;
                    border: solid #27AE60;
                    border-width: 0 1.3px 1.4px 0;
                    position: absolute;
                    left: 4.8px;
                    top: 2.5px;
                    transform: rotate(45deg);
                }
            }

            span {
                font-size: 12px;
            }
        }

        input[type="checkbox"] {
            appearance: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            width: 20px;
            height: 20px;
            border: 1px solid #B5BBC9;
            border-radius: 10px;
            outline: none;
            cursor: pointer;
            background-color: #FFFFFF;
            position: relative;
        }

        input[type="checkbox"]:checked {
            border: none;
            background-color: #00B8D7;


            &::before {
                content: "";
                display: block;
                width: 4px;
                height: 9px;
                border: solid white;
                border-width: 0 1.4px 1.4px 0;
                position: absolute;
                left: 7px;
                top: 3.5px;
                transform: rotate(45deg);

            }
        }
    }
}

.card_title {
    font-family: Mulish, sans-serif;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
}

.card_price {
    font-size: 20px;
    font-weight: bold;
    color: #FF6B6B;
}
</style>
