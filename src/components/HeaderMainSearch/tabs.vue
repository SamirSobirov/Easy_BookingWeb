<template>
    <nav class="tabs">
        <button
            v-for="tab in tabs"
            :key="tab.key"
            :class="['tab', { active: activeTab === tab.key }]"
            @click="setActiveTab(tab.key)"
        >
            <img :src="tab.icon" :alt="tab.alt" />
            {{ tab.label }}
        </button>
    </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";
import planeIcon from "/src/assets/icons/plane_icon.svg";
import hotelIcon from "/public/icons/hotel_icon.svg";
import trainIcon from "/public/icons/train_icon.svg";
import transportIcon from "/src/assets/icons/transport.svg";
import toursIcon from "/public/icons/tours_icon.svg";
import insuranceIcon from "/src/assets/icons/insurance_icon.svg";

const tabs = [
    { key: "flights", icon: planeIcon, alt: "plane", label: "Перелеты" },
    { key: "hotels", icon: hotelIcon, alt: "hotels", label: "Отели" },
    { key: "train", icon: trainIcon, alt: "train", label: "Ж/Д" },
    { key: "transfers", icon: transportIcon, alt: "transport", label: "Трансферы" },
    { key: "tours", icon: toursIcon, alt: "tours", label: "Туры" },
    { key: "insurance", icon: insuranceIcon, alt: "insurance", label: "Страхование" },
];

const activeTab = ref<string>("flights");

const setActiveTab = (tab: string) => {
    activeTab.value = tab;
};
</script>


<style scoped lang="scss">
</style>