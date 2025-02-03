<template>
    <div class="box">
        <asides/>
        <div class="containerFooter">
            <Card/>
            <Card/>
        </div>


    </div>
</template>

<script setup lang="ts">

import Card from "./ticketComponents/Card.vue";
import Asides from "./Asides.vue";
</script>

<style scoped lang="scss">
.box {
    max-width: 1138px;
    width: 1138px;
    display: flex;
    align-items: start;
    justify-content: center;
    gap: 20px;

    .containerFooter {
        gap: 20px;
        display: flex;
        flex-direction: column;
        margin-top: 0;
    }
}

</style>