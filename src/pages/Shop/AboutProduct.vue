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

                <div class="aboutShop_swiperContainer">
                    <div class="mainAboutShop_scroll">
                        <button
                            class="scroll_btn"
                            v-for="(image, index) in images"
                            :key="index"
                            :class="{ active: activeIndex === index }"
                            @click="selectImage(index)"
                        >
                            <img :src="image" alt="Bag Image"/>
                        </button>
                    </div>

                    <div class="mainAboutShop_swiper">
                        <Swiper
                            :modules="[Navigation]"
                            :slides-per-view="1"
                            :loop="true"
                            navigation
                            @swiper="onSwiper"
                            :initial-slide="activeIndex"
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

                <div class="coment">
                    <p class="coment_header">Описание</p>
                    <p class="coment_main">Опытные гиды и организаторы туров обеспечат вам комфортное и безопасное
                        путешествие. Широкий выбор отелей и разнообразие экскурсий позволят подобрать программу отдыха,
                        соответствующую вашим предпочтениям и бюджету. Возможность дополнительных услуг: SPA процедуры,
                        вечерние шоу, участие в тематических мероприятиях и многое другое для создания неповторимого
                        отдыха. <br>
                        Опытные гиды и организаторы туров обеспечат вам комфортное и безопасное путешествие. Широкий
                        выбор отелей и разнообразие экскурсий позволят подобрать программу отдыха, соответствующую вашим
                        предпочтениям и бюджету. Возможность дополнительных услуг: SPA процедуры, вечерние шоу, участие
                        в тематических мероприятиях и многое другое для создания неповторимого отдыха. <br>
                        Не упустите шанс отправиться в увлекательное путешествие по Турции с нами!</p>
                </div>
            </div>
        </div>
        <div class="aboutShop_box">
            <div class="elem">
                <div class="container">
                    <h1>Детали оплаты</h1>
                    <div class="price-details">
                        <p>Цена: <span>2 400 000 UZS</span></p>
                        <p>Цена в ЕР: <span>800 000 ЕР</span></p>
                    </div>

                    <div class="color-selection">
                        <label for="color">Выберите цвет:</label>
                        <select id="color" name="color">
                            <option value="red">Красный</option>
                            <option value="blue">Синий</option>
                            <option value="green">Зеленый</option>
                        </select>
                    </div>

                    <div class="size-selection">
                        <label>Выберите размер:</label>
                        <div class="sizes">
                            <button>40х80</button>
                            <button>45х90</button>
                            <button>50х100</button>
                            <button>XXL</button>
                        </div>
                    </div>

                    <div class="quantity-selection">
                        <label>Количество:</label>
                        <div class="quantity">
                            <button>-</button>
                            <span>2</span>
                            <button>+</button>
                        </div>
                    </div>

                    <div class="total-price">
                        <p>Общая цена: <span>4 800 000 UZS</span></p>
                        <p>Общая цена в ЕР: <span>1 600 000 ЕР</span></p>
                    </div>

                    <button class="buy-button">Купить в один клик</button>
                </div>
            </div>
        </div>
    </div>

    <Footer/>
</template>

<script setup lang="ts">
import {computed, ref} from "vue";
import {Swiper, SwiperSlide} from "swiper/vue";
import {Navigation} from "swiper/modules";
import type {Swiper as SwiperClass} from "swiper/types";
import "swiper/css";
import {Icon} from "@iconify/vue";
import BreadCrumb from "../../components/breadcrumbs/BreadCrumb.vue";
import Footer from "../../components/Footer.vue";
import {initialProducts} from "../../constants";
import {useRoute} from "vue-router";

const route = useRoute()
const productId = Number(route.params.id);
computed(() => initialProducts.filter(product => product.id === productId));
const images = ref([
    "/images/bagAboutShop.svg",
    "/images/bagAboutShop2.svg",
    "/images/bagAboutShop.svg",
    "/images/bagAboutShop2.svg",
    "/images/bagAboutShop2.svg",
    "/images/bagAboutShop.svg"
]);

const swiperInstance = ref<SwiperClass | null>(null);
const activeIndex = ref(0);
const onSwiper = (swiper: SwiperClass) => {
    swiperInstance.value = swiper;
};

const selectImage = (index: number) => {
    activeIndex.value = index;
    swiperInstance.value?.slideTo(index);
};

const nextSlide = () => swiperInstance.value?.slideNext();
const prevSlide = () => swiperInstance.value?.slidePrev();
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
                        padding: 8px 8px 5px 8px;
                        background-color: #F3F5FA;
                        border-radius: 8px;


                    }
                }
            }

            .aboutShop_swiperContainer {
                display: flex;
                gap: 15px;
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

                        &.active {
                            border-color: #00B8D7;
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
                        height: 279px;
                        padding-top: 53px;
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

            .coment {
                margin-top: 20px;
                gap: 8px;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                text-align: left;
                width: 700px;
                max-width: 700px;

                .coment_header {
                    font-size: 18px;
                    font-weight: bold;
                    //margin-bottom: 8px;
                    padding-left: 0;
                }

                .coment_main {
                    font-family: Mulish, sans-serif;
                    line-height: 20px;
                    font-size: 14px;
                    color: #6D7586;
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


            .container {
                max-width: 600px;
                height: 569px;
                margin: 0 auto;
                background: #fff;
                padding: 20px;
                border-radius: 8px;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }

            h1 {
                text-align: center;
                color: #444;
            }

            .price-details, .total-price {
                margin: 20px 0;
                p {
                    margin: 10px 0;
                    span {
                        font-weight: bold;
                    }
                }
            }

            .color-selection, .size-selection, .quantity-selection {
                margin: 20px 0;
                label {
                    display: block;
                    margin-bottom: 10px;
                    font-weight: bold;
                }
                select, .sizes, .quantity {
                    width: 100%;
                    padding: 10px;
                    border-radius: 4px;
                    border: 1px solid #ddd;
                }
                .sizes, .quantity {
                    display: flex;
                    justify-content: space-between;
                    button {
                        padding: 10px 20px;
                        border: none;
                        background-color: #007bff;
                        color: white;
                        border-radius: 4px;
                        cursor: pointer;
                        &:hover {
                            background-color: darken(#007bff, 10%);
                        }
                    }
                }
            }

            .total-price {
                text-align: center;
                font-size: 1.2em;
            }

            .buy-button {
                width: 100%;
                padding: 15px;
                background-color: #28a745;
                color: white;
                border: none;
                border-radius: 4px;
                font-size: 1.1em;
                cursor: pointer;
                &:hover {
                    background-color: darken(#28a745, 10%);
                }
            }
        }
    }
}
</style>
