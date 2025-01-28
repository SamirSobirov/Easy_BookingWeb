<template>
    <aside>
        <button class="folowPrice">
            <i class="notification fas fa-bell"></i>
            <span>Следить за ценой</span>
        </button>

        <div class="sidebar">
            <Transfers/>
            <hr>
            <Baggage/>
            <hr>
            <TravelTime />
            <hr>
            <TransferAirports />
            <hr>
            <Alliances />
            <hr>
            <Price />
            <hr>
            <Airlines />
            <hr>
            <Sort />
        </div>
    </aside>
</template>

<style scoped lang="scss">
aside {
    margin-top: 11px;
    width: 265px;
    height: 100%;
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
    gap: 14px;

    .folowPrice {
        backdrop-filter: blur(10px);
        padding: 16px;
        width: 100%;
        height: 54px;
        border-radius: 18px;
        border: 1px solid #FFFFFFA6;
        font-size: 14px;
        color: #6D7586;
        display: flex;
        gap: 10px;
        font-family: Arial, sans-serif;
        align-items: center;
        text-align: center;
        justify-content: center;
        background-color: #FFFFFFA6;
    }


    .sidebar {
        backdrop-filter: blur(10px);
        padding: 2px 15px 5px 15px;
        background-color: #FFFFFFA6;
        width: 100%;
        border-radius: 18px;
        border: 1px solid #FFFFFFA6;
        //padding-left: 16px;

        hr {
            margin: 25px 0 5px 0;
            width: 230px;
            border: 1px solid #E3E5ED;
        }
    }
}
</style>

<script setup lang="ts">
import Baggage from "./asidesCompanents/Baggage.vue";
import Transfers from "./asidesCompanents/Transfers.vue";
import TravelTime from "./asidesCompanents/TravelTime.vue";
import TransferAirports from "./asidesCompanents/TransferAirports.vue";
import Alliances from "./asidesCompanents/Alliances.vue";
import Price from "./asidesCompanents/Price.vue";
import Airlines from "./asidesCompanents/Airlines.vue";
import Sort from "./asidesCompanents/Sort.vue";


</script>