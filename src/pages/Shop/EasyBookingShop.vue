<script setup lang="ts">

import BreadCrumb from "../../components/breadcrumbs/BreadCrumb.vue";
</script>

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
</template>

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