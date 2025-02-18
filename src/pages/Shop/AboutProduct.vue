<template>
    <BreadCrumb :breadcrumbs="[
    { label: 'Главная', path: '/' },
    { label: 'EASYBOOKING Shop', path: '/shop' },
    { label: 'О товаре' }
]" />
    <div class="containerAboutShop">

        <div class="aboutShop_box1">
            <p>ID товара: {{ id }}</p>
        </div>
        <div class="aboutShop_box"></div>

    </div>
</template>

<script setup lang="ts">
import {useRoute} from 'vue-router';
import BreadCrumb from "../../components/breadcrumbs/BreadCrumb.vue";

const route = useRoute();
const id = route.params.id;
</script>

<style scoped lang="scss">
.containerAboutShop {
    margin-top: 100px;
    display: flex;
    gap: 24px;
    align-items: flex-start;
    justify-content: center;

    .aboutShop_box1{
        width: 744px;
        height: 763px;
        background-color: #FFFFFF59;
        backdrop-filter: blur(16px);
        border: 1px solid #FFFFFFA8;
        border-radius: 24px;
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
    .aboutShop_box{
        width: 360px;
        height: 593px;
        background-color: #FFFFFF59;
        backdrop-filter: blur(16px);
        border: 1px solid #FFFFFFA8;
        border-radius: 24px;
    }
}


</style>
