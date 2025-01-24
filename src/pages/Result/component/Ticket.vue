<script setup lang="ts">

import Card from "./ticketComponents/Card.vue";
import Footer from "../../../components/Footer.vue";
</script>

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

<style scoped lang="scss">
.box {
    display: flex;
    flex-direction: column;

.container {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-left: 25px;

}
    .containerFooter {
        align-items: center;
        justify-content: center;
        display: flex;
        margin-left: -250px;
    }
}
</style>