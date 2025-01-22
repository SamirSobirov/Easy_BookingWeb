<template>
<div class="container">
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
                <div class="date">{{ item.date }}</div>
                <div :class="['price', { 'green': item.isLower }]">{{ item.price }} UZS</div>
            </div>
        </div>
        <button class="nav-btn right" @click="scrollRight">&#10095;</button>
    </div>
</div>
</template>

<style lang="scss">
body {
    height: 100vh;
}

.search-box {
    margin-top: -80px;
}

.price-slider {
    justify-content: left;
    text-align: left;
    width: 1138px;
    margin: 0 auto;
    display: flex;
    gap: 12px;
    align-items: center;
    background: #f0f4f8;
    padding: 10px 20px;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.title {
    font-size: 14px;
    font-weight: 500;
    width: 210px;
    padding: 17px 45px;
    color: #23282D;
    margin-right: 10px;
}

.nav-btn {
    border: none;
    background: transparent;
    font-size: 20px;
    cursor: pointer;
    color: #555;
    font-weight: 200;
    transition: color 0.3s;

    padding: 16px 16px;

    &:hover {
        color: #000;

    }
}

.price-list {
    margin-left: 10px;
    display: flex;
    gap: 10px;
    scroll-behavior: smooth;

    white-space: nowrap;
    overflow: hidden;
}

.price-item {
    align-items: center;
    margin: 0 auto;
    padding: 10px 15px;
    background: #fff;
    border-radius: 8px;
    text-align: center;
    transition: all 0.3s ease-in-out;
    width: 148px;
    cursor: pointer;
    border: 2px solid transparent;

    &.active {
        border:1px solid #00aaff;
        box-shadow: 0 0 10px rgba(0, 170, 255, 0.5);

    }

    .date {
        font-size: 14px;
        color: #B5BBC9;
    }

    .price {
        margin-top: 5px;
        font-size: 16px;
        font-weight: 400;
        color: #333;

        &.green {
            color: #27AE60;
        }
    }
}

</style>




<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
    name: "PriceSlider",
    setup() {
        const prices = ref([
            { date: "чт, 17 авг", price: "2 476 332", isLower: true },
            { date: "пт, 18 авг", price: "2 676 332", isLower: false },
            { date: "вс, 21 авг", price: "2 512 332", isLower: false },
            { date: "пн, 22 авг", price: "2 476 332", isLower: true },
            { date: "вт, 23 авг", price: "1 312 332", isLower: true },
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

        return {
            prices,
            selectedIndex,
            selectItem,
            scrollLeft,
            scrollRight,
            priceList,
        };
    },
});
</script>