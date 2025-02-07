<template>
    <div class="price-slider">
        <div class="title">Цена на графике</div>
        <button class="nav-btn left" @click="scrollLeft">&#10094;</button>
        <div class="price-list" ref="priceList">
            <div
                v-for="(item, index) in prices"
                :key="index"
                :class="['price-item', { active: selectedIndex === index }]"
                @click="selectItem(index)"
            >
                <div>
                <div class="date">{{ item.date }}</div>
                <div :class="['price', { 'green': item.isLower }]">{{ item.price }} UZS</div>
                </div>
            </div>
        </div>
        <button class="nav-btn right" @click="scrollRight">&#10095;</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import "../style/PriceChart.scss";
const prices = ref([
    { date: "чт, 17 авг", price: "2 476 332", isLower: true },
    { date: "пт, 18 авг", price: "2 676 332", isLower: false },
    { date: "вс, 21 авг", price: "2 512 332", isLower: false },
    { date: "пн, 22 авг", price: "2 476 332", isLower: true },
    { date: "вт, 23 авг", price: "1 312 332", isLower: true },
    { date: "пн, 22 авг", price: "2 476 332", isLower: true },
    { date: "пн, 22 авг", price: "2 476 332", isLower: true },
]);

const selectedIndex = ref(2);
const priceList = ref<HTMLElement | null>(null);
const selectItem = (index: number) => {
    selectedIndex.value = index;
};
const scrollLeft = () => {
    if (priceList.value) {
        priceList.value.scrollLeft -= 150;
    }
};
const scrollRight = () => {
    if (priceList.value) {
        priceList.value.scrollLeft += 150;
    }
};
</script>

<style scoped lang="scss"></style>
