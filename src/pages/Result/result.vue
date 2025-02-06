<template>
    <div class="container">
        <PriceChart/>
        <div class="box">
            <Ticket/>
            <main>
            </main>
        </div>
    </div>
</template>

<script setup lang="ts">
import PriceChart from "./component/PriceChart.vue";
import Ticket from "./component/Ticket.vue";
</script>

<style lang="scss">
body {
    height: 100vh;
}

.search-box {
    margin-top: 100px;
}

.box {
    display: flex;
    align-items: start;
    justify-content: center;
    margin: 12px auto;
    max-width: 1140px;
    width: 1138px;
}
</style>