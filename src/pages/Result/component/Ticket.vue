<script setup lang="ts">

import Card from "./ticketComponents/Card.vue";
</script>

<template>
    <div class="container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />


    </div>

</template>

<style scoped lang="scss">
.container {
 display: flex;
    flex-direction: column;
    gap: 16px;
    margin-left: 25px;

}
</style>