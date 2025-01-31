<template>
    <div class="box">
        <div class="container">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
        <div class="containerFooter">
            <Footer/>
        </div>
    </div>
</template>

<script setup lang="ts">

import Card from "./ticketComponents/Card.vue";
import Footer from "../../../components/Footer.vue";
</script>

<style scoped lang="scss">
.box {
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;

    .container {
        display: flex;
        flex-direction: column;
        gap: 16px;
        margin-left: 20px;
    }

    .containerFooter {
        align-items: center;
        justify-content: center;
        display: flex;
        margin-left: -265px;
        margin-bottom: -10px;
    }
}
</style>