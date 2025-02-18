<template>
    <BreadCrumb :breadcrumbs="[
    { label: 'Главная', path: '/' },
    { label: 'EASYBOOKING Shop', path: '/shop' },
    { label: 'О товаре' }
]"/>
    <div class="containerAboutShop">

        <div class="aboutShop_box1">
            <div class="elem">
                <div class="header_aboutShop">
                    <div class="header_block">
                        <h1>Подушка для подголовника</h1>
                    </div>

                    <div class="buttonsBlock">
                        <button><img src="/src/assets/icons/Heart.svg" alt=""></button>
                        <button><img src="/src/assets/icons/share.svg" alt=""></button>
                    </div>
                </div>

                <hr style="width: 100%; border: 1px solid #F2F3F7">
                <!--            <p>ID товара: {{ id }}</p>-->

                <div class="aboutShop_swiperContainer">
                    <div class="mainAboutShop_scroll">
                        <button class="scroll_btn" v-for="(image, index) in images" :key="index">
                            <img :src="image" alt="Bag Image"/>
                        </button>
                    </div>

                    <div class="mainAboutShop_swiper">
                        <Swiper
                            :modules="[Navigation]"
                            :slides-per-view="1"
                            :loop="true"
                            navigation
                        >
                            <SwiperSlide v-for="(image, index) in images" :key="index">
                                <img :src="image" alt="Product Image" class="swiper-image"/>
                            </SwiperSlide>

                            <button class="swiper-button prev" @click="prevSlide">
                                <Icon icon="iconamoon:arrow-left-2-thin" width="24" height="24" style="color: #bbb0b0"/>
                            </button>
                            <button class="swiper-button next" @click="nextSlide">
                                <Icon icon="iconamoon:arrow-right-2-thin" width="24" height="24"
                                      style="color: #bbb0b0"/>
                            </button>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
        <div class="aboutShop_box">
            <div class="elem"></div>
        </div>
    </div>

    <Footer/>
</template>

<script setup lang="ts">
// import {useRoute} from 'vue-router';
import BreadCrumb from "../../components/breadcrumbs/BreadCrumb.vue";
import Footer from "../../components/Footer.vue";
import {ref, onMounted} from "vue";
import {Swiper, SwiperSlide} from "swiper/vue";
import {Navigation} from "swiper/modules";
import "swiper/css";

import "swiper/css";
import {Icon} from "@iconify/vue";

const images = ref([
    "/images/bagAboutShop.svg",
    "/images/bagAboutShop2.svg",
    "/images/bagAboutShop.svg",
    "/images/bagAboutShop2.svg",
    "/images/bagAboutShop2.svg",
    "/images/bagAboutShop.svg",
]);

let swiperInstance: any = null;

onMounted(() => {
    swiperInstance = document.querySelector(".swiper")?.swiper;
});


const nextSlide = () => swiperInstance?.slideNext();
const prevSlide = () => swiperInstance?.slidePrev();
// const route = useRoute();
// const id = route.params.id;
</script>

<style scoped lang="scss">
.containerAboutShop {
    margin-top: 100px;
    display: flex;
    gap: 24px;
    align-items: flex-start;
    justify-content: center;

    .aboutShop_box1 {
        width: 744px;
        height: 763px;
        background-color: #FFFFFF59;
        backdrop-filter: blur(16px);
        border: 1px solid #FFFFFFA8;
        border-radius: 24px;

        .elem {
            border: 1px solid #FFFFFFA8;
            background-color: #FFFFFFA6;
            border-radius: 24px;
            display: flex;
            flex-direction: column;
            gap: 16px;
            width: 720px;
            height: 739px;
            margin: 12px 12px;
            align-items: flex-start;
            padding: 20px 20px;

            .header_aboutShop {
                display: flex;
                justify-content: space-between;
                align-items: center;
                text-align: left;
                width: 100%;

                .header_block {
                    h1 {
                        font-size: 24px;
                        line-height: 32px;
                        font-family: Mulish, sans-serif;
                        color: #212121;
                    }
                }


                .buttonsBlock {
                    display: flex;
                    gap: 8px;
                    align-items: center;

                    button {
                        padding: 8px 8px;
                        background-color: #F3F5FA;
                        border-radius: 8px;


                    }
                }
            }

            .aboutShop_swiperContainer {
                display: flex;
                gap: 16px;
                width: 100%;
                height: 355px;

                .mainAboutShop_scroll {
                    width: 140px;
                    height: 355px;
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                    overflow-y: auto;
                    border-radius: 8px;
                    padding-right: 4px;
                    -ms-overflow-style: none;
                    scrollbar-width: none;

                    &::-webkit-scrollbar {
                        display: none;
                    }

                    &::-webkit-scrollbar-thumb {
                        background-color: #ccc;
                        border-radius: 4px;

                    }

                    .scroll_btn {
                        width: 120px;
                        height: 100px;
                        border: 1px solid #F2F3F7;
                        padding: 7px 27px 7px 20px;
                        background-color: #FFFFFF;
                        border-radius: 8px;

                        img {
                            width: 75px;
                            height: 74px;
                        }
                    }
                }

                .mainAboutShop_swiper {
                    position: relative;
                    max-width: 600px;
                    width: 544px;
                    height: 100%;
                    background-color: #FFFFFF;
                    border-radius: 8px;
                    border: 1px solid #F2F3F7;

                    .swiper {
                        width: 100%;
                        height: 100%;
                    }

                    .swiper-image {
                        width: 249px;
                        padding-top: 53px;
                        height: auto;
                        border-radius: 10px;
                    }

                    .swiper-button {
                        width: 28px;
                        height: 28px;
                        border: 1px solid #F2F3F7;
                        position: absolute;
                        top: 50%;
                        transform: translateY(-50%);
                        background: rgba(255, 255, 255, 0.8);
                        padding: 2px 2px;
                        border-radius: 50%;
                        transition: 0.3s;
                        z-index: 10;

                        &:hover {
                            background: rgba(255, 255, 255, 1);
                        }
                    }

                    .prev {
                        left: 10px;
                    }

                    .next {
                        right: 10px;
                    }
                }

            }
        }
    }

    .aboutShop_box {
        width: 360px;
        height: 593px;
        background-color: #FFFFFF59;
        backdrop-filter: blur(16px);
        border: 1px solid #FFFFFFA8;
        border-radius: 24px;

        .elem {
            border: 1px solid #FFFFFFA8;
            background-color: #FFFFFFA6;
            border-radius: 24px;
            display: flex;
            flex-direction: column;
            gap: 16px;
            width: 336px;
            height: 569px;
            margin: 12px 12px;
            align-items: center;
            justify-content: center;
        }
    }
}
</style>
