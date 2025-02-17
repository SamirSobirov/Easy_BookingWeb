<template>
    <div class="offers-card">
        <div class="offers-card__header">
            <h1>Акции и предложения</h1>
            <div class="offers-card__header-buttons">
                <button
                    v-for="(button, index) in buttons"
                    :key="index"
                    :class="['button', { active: activeButton === button.type }]"
                    @click="setActiveButton(button.type)"
                >
                    <img :src="button.icon" :alt="button.alt"/>
                    {{ button.label }}
                </button>
            </div>
        </div>

        <div class="Cards">
            <div v-for="(card, index) in cards" :key="index" class="card">
                <img :src="card.image" :alt="card.alt"/>
                <div class="container">
                    <p>{{ card.title }}</p>
                    <span>
            <img src="/src/assets/icons/Calendar.svg" alt="Calendar"/>
            {{ card.date }}
          </span>
                    <span class="price">{{ card.price }}</span>
                </div>
            </div>
        </div>

        <div class="cardFooter">
            <button>
                <img src="/src/assets/icons/ToKnow.svg" alt="To Know"/>
                <span>Узнать больше</span>
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref} from "vue";

const activeButton = ref("flights");
const buttons = [
    {
        type: "flights",
        label: "Перелеты",
        icon: "/icons/hotel_icon.svg",
        alt: "Flights",
    },
    {
        type: "tours",
        label: "Туры",
        icon: "/icons/tours_icon.svg",
        alt: "Tours",
    },
    {
        type: "train",
        label: "Ж/Д",
        icon: "/icons/train_icon.svg",
        alt: "Train",
    },
];
const cards = [
    {
        image: "/images/SharmELSheyx.svg",
        alt: "Sharm El Sheikh",
        title: "Отдых в Шарм-эль-Шейхе",
        date: "12.01.2024 - 18.02.2024",
        price: "7 844 000 UZS",
    },
    {
        image: "/images/Georgia.svg",
        alt: "Georgia",
        title: "Чудеса Грузии",
        date: "12.01.2024 - 18.02.2024",
        price: "7 844 000 UZS",
    },
    {
        image: "/images/Georgia2.svg",
        alt: "Georgia",
        title: "Чудеса Грузии",
        date: "12.01.2024 - 18.02.2024",
        price: "7 844 000 UZS",
    },

];
const setActiveButton = (type: string) => {
    activeButton.value = type;
};
</script>

<style lang="scss" scoped></style>