<template>
    <div class="shop">
        <div class="shop__header">
            <h1>EASYBOOKING Shop</h1>

            <button>
                Все товары
                <img src="/src/assets/icons/arrow-right.svg" alt="Arrow Right" />
            </button>
        </div>

        <div class="Cards">
            <div v-for="(product, index) in products" :key="index" class="card">
                <img :src="product.image" :alt="product.name" />

                <div class="container">
                    <div v-if="product.points" class="ball">{{ product.points }} балл</div>

                    <div v-if="product.hasPriceBall" class="div">
                        <span class="price_ball">{{ product.priceBall }}</span>
                        <span class="ball">{{ product.points }}</span>
                    </div>

                    <span class="price">{{ product.price }}</span>
                    <span>{{ product.name }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const products = ref([
    {
        image: "/src/assets/images/Shop_bag.svg",
        name: "Чехол на чемодан",
        price: "800 000 UZS",
        points: "400",
        hasPriceBall: false,
    },
    {
        image: "/src/assets/images/Shop_pillow.svg",
        name: "Подушка для подголовника",
        price: "800 000 UZS",
        priceBall: "1 000 000 UZS",
        points: "400",
        hasPriceBall: false,
    },
    {
        image: "/src/assets/images/Shop_Carryingbag.svg",
        name: "Сумка-переноска",
        price: "800 000 UZS",
        points: "400",
        hasPriceBall: false,
    },
]);
</script>

<style scoped></style>
