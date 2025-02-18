<template>
    <BreadCrumb :breadcrumbs="[
    { label: 'Главная', path: '/' },
    { label: 'EASYBOOKING Shop', path: '/shop' },
    { label: 'О товаре' }
]" />
    <div>
        <h1>Информация о продукте</h1>
        <p>ID товара: {{ id }}</p>
    </div>
</template>

<script setup lang="ts">
import {useRoute} from 'vue-router';
import BreadCrumb from "../../components/breadcrumbs/BreadCrumb.vue";

const route = useRoute();
const id = route.params.id;
</script>

<style scoped lang="scss">
h1{
    margin-top: 80px;
}
</style>
