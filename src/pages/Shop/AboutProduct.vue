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

                        <DropDown>
                            <template #trigger="{ isOpen }">
                                <button :class="{ active: isOpen }">
                                    <img src="/src/assets/icons/share.svg" alt="">
                                </button>
                            </template>

                            <template #default="{ close }">
                                <div class="dropdown-content">
                                    <h1>
                                        Поделиться билетом
                                        <button class="trigger-btn" @click="close"><span class="close-icon">×</span>
                                        </button>
                                    </h1>
                                    <ShareTicket/>
                                </div>
                            </template>
                        </DropDown>
                    </div>
                </div>

                <hr style="width: 100%; border: 1px solid #F2F3F7">

                <div class="aboutShop_swiperContainer">
                    <div class="mainAboutShop_scroll">
                        <button
                            class="scroll_btn"
                            v-for="(image, index) in product[0] .images"
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
                            <SwiperSlide v-for="(image, index) in product[0].images" :key="index">
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

            <div class="container">
                <h1>Детали оплаты</h1>
                <div class="price-details">
                    <p>Цена: <span>2 400 000 UZS</span></p>
                    <span class="dashed-line"></span>
                    <p>Цена в ЕР: <span style="color: #6A67F8">800 000 ЕР</span></p>
                </div>

                <div class="color-selection">
                    <p>Выберите цвет:</p>
                    <div class="box_color">
                        <button
                            v-for="(color, index) in colors"
                            :key="index"
                            class="custom-button"
                            :class="{ active: selectedColorIndex === index }"
                            @click="selectColor(index)"
                        >
                            <span class="inner-box" :style="{ backgroundColor: color }"></span>
                        </button>
                    </div>
                </div>

                <div class="size-selection">
                    <p>Выберите размер:</p>
                    <div class="sizes">
                        <button
                            v-for="(size, index) in sizes"
                            :key="index"
                            :class="{ active: selectedSizeIndex === index }"
                            @click="selectSize(index)"
                        >
                            {{ size }}
                        </button>
                    </div>
                </div>

                <div class="quantity-selection">
                    <p>Количество:</p>
                    <div class="quantity">
                        <button @click="decrease">-</button>
                        <span>{{ quantity }}</span>
                        <button @click="increase">+</button>
                    </div>
                </div>

                <div class="price-details">
                    <p>Общая цена: <span style="font-size: 18px">4 800 000 UZS</span></p>
                    <span class="dashed-line"></span>
                    <p>Общая цена в EP: <span style="color: #6A67F8; font-size: 18px">1 600 000 EP</span></p>
                </div>

                <button class="buy-button">Купить в один клик</button>
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
import DropDown from "../../components/DropDown.vue";
import ShareTicket from "../../components/ShareTicket.vue";

const route = useRoute()
const quantity = ref(1);
const productId = Number(route.params.id);
const product = computed(() => initialProducts.filter(product => product.id === productId));
console.log(product.value)
const colors = ["#C2D8F2", "#C2F2D2", "#EED7D7", "#F2EAC2"];
const sizes = ["40х80", "45х90", "50х100", "XXL"];
const selectedColorIndex = ref<number | null>(null);
const selectedSizeIndex = ref<number | null>(null);

const selectColor = (index: number) => {
    selectedColorIndex.value = index;
};
const selectSize = (index: number) => {
    selectedSizeIndex.value = index;
};
const decrease = () => {
    if (quantity.value > 1) {
        quantity.value--;
    }
};
const increase = () => {
    quantity.value++;
};

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
                gap: 14px;
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
                        width: 449px;
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
        width: 369px;
        height: 610px;
        background-color: #FFFFFF59;
        backdrop-filter: blur(16px);
        border: 1px solid #FFFFFFA8;
        border-radius: 24px;

        .container {
            max-width: 360px;
            border-radius: 24px;
            border: 1px solid #FFFFFFA8;
            background-color: rgba(255, 255, 255, 0.89);
            display: flex;
            flex-direction: column;
            width: 345px;
            height: 585px;
            margin: 12px 12px;
            align-items: flex-start;
            padding: 15px 20px;

        }

        h1 {
            text-align: left;
            color: #23282D;
            font-size: 16px;
        }

        .price-details, .total-price {
            border-top: 1px solid #F2F3F7;
            border-bottom: 1px solid #F2F3F7;
            font-family: Mulish, sans-serif;
            display: flex;
            flex-direction: column;
            margin: 15px 0;

            .dashed-line {
                flex-grow: 1;
                width: 296px;
                border-bottom: 1px dashed #DADEEE;
                border-spacing: 5px;
                margin: 8px 4px;
            }

            p {
                color: #6D7586;
                line-height: 18px;
                display: flex;
                justify-content: space-between;
                margin: 10px 0;

                span {
                    font-family: Mulish, sans-serif;
                    color: #0D0D0D;
                    font-size: 15px;
                    font-weight: 700;
                }
            }
        }

        .total-price {
            margin: 20px 0;

            p {
                margin: 10px 0;

                span {
                    font-weight: bold;
                }
            }
        }

        .color-selection {
            display: flex;
            flex-direction: column;
            align-items: start;
            justify-content: start;
            text-align: left;
            gap: 17px;

            p {
                display: block;
                font-size: 16px;
                font-family: Mulish, sans-serif;
                font-weight: 600;
            }

            .box_color {
                display: flex;
                gap: 8px;

                .custom-button {
                    width: 36px;
                    height: 36px;
                    border-radius: 8px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 1px solid #f2f3f7;
                    cursor: pointer;
                    transition: all 0.3s ease;

                    &.active {
                        border: 1px solid #00B8D7;
                    }
                }

                .inner-box {
                    width: 26px;
                    height: 26px;
                    border-radius: 4px;
                }
            }
        }

        .size-selection {
            margin: 16px 0;
            align-items: start;
            justify-content: start;
            text-align: left;
            display: flex;
            flex-direction: column;
            gap: 12px;

            p {
                display: block;
                font-size: 16px;
                font-family: Mulish, sans-serif;
                font-weight: 600;
            }

            .sizes {
                width: 304px;
                display: flex;
                gap: 8px;

                button {
                    padding: 8px 10px;
                    border: 1px solid #f2f3f7;
                    border-radius: 8px;
                    font-size: 14px;
                    font-family: Mulish, sans-serif;
                    color: #23282d;
                    cursor: pointer;
                    transition: all 0.3s ease;

                    &.active {
                        border: 1px solid #00B8D7;
                    }
                }
            }
        }

        .quantity-selection {
            align-items: start;
            justify-content: start;
            text-align: left;
            display: flex;
            flex-direction: column;
            gap: 12px;

            p {
                display: block;
                font-size: 16px;
                font-family: Mulish, sans-serif;
                font-weight: 600;
            }

            .quantity {
                display: flex;
                gap: 25px;
                align-items: center;

                button {
                    width: 120px;
                    height: 44px;
                    border: 1px solid #F2F3F7;
                    border-radius: 8px;
                    font-size: 25px;
                    font-family: Mulish, sans-serif;
                    font-weight: normal;
                }
            }
        }

        .total-price {
            text-align: center;
            font-size: 1.2em;
        }

        .buy-button {
            margin-bottom: 20px;
            width: 304px;
            padding: 9px;
            height: 40px;
            font-family: Mulish, sans-serif;
            background-color: #00B8D7;
            color: white;
            border: none;
            border-radius: 10px;
            font-size: 14px;
            cursor: pointer;
        }
    }
}

.dropdown-content {
    position: absolute;
    z-index: 10;
    height: 170px;
    padding: 20px;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;

    h1 {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 18px;
        font-weight: 600;
        font-family: 'Mulish', sans-serif;
        color: black;
        margin-bottom: 15px;

        .trigger-btn {
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 32px;
            background-color: #FFFFFF !important;
            height: 32px;
            border-radius: 50% !important;
            border: 1px solid #C9D4E4;
            transition: background 0.3s ease, border 0.3s ease;

            .close-icon {
                font-size: 24px;
                padding-bottom: 3px;
                color: #475569;
                transition: color 0.3s ease;
            }

            &:active, &.active {
                border-color: #00B8D7;

                .close-icon {
                    color: #00B8D7;
                }
            }
        }
    }
}

</style>
