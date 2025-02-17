<template>
    <BreadCrumb currentPage="EASYBOOKING Shop"/>

    <div class="ShopHeader">
        <div class="boxShop">
            <h1>EASYBOOKING Shop</h1>
        </div>
        <div class="boxShop">Фундаментальные показатели для Акции и предложенияАкции и <br> предложенияАкции и
            предложения
        </div>
    </div>

    <div class="shop">
        <div class="shop__header">
            <h1>EASYBOOKING Shop</h1>


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

    <Footer />
</template>

<script setup lang="ts">
import BreadCrumb from "../../components/breadcrumbs/BreadCrumb.vue";
import Footer from "../../components/Footer.vue";
import {ref} from "vue";

const products = ref([
    {
        image: "/images/Shop_bag.svg",
        name: "Чехол на чемодан",
        price: "800 000 UZS",
        points: "400",
        hasPriceBall: false,
    },
    {
        image: "/images/Shop_pillow.svg",
        name: "Подушка для подголовника",
        price: "800 000 UZS",
        priceBall: "1 000 000 UZS",
        points: "400",
        hasPriceBall: false,
    },
    {
        image: "/images/Shop_Carryingbag.svg",
        name: "Сумка-переноска",
        price: "800 000 UZS",
        points: "400",
        hasPriceBall: false,
    },
]);
</script>

<style scoped lang="scss">
.ShopHeader {
    padding: 24px 32px;
    margin: 100px auto;
    display: flex;
    flex-direction: column;
    width: 1138px;
    height: 144px;
    background-color: rgba(255, 255, 255, 0.62);
    align-items: flex-start;
    justify-content: center;
    text-align: left;
    gap: 12px;
    font-family: Mulish, sans-serif;
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 20px;

    h1 {
    color: #212121;
        font-size: 32px;
        line-height: 40px;

    }


    .boxShop {
        font-size: 14px;
        line-height: 20px;
        color: #81899A;
    }
}
</style>