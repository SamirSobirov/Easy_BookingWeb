<script setup lang="ts">

</script>

<template>
    <div class="route-container">
        <div class="box">
            <span class="airport">TAS</span>
            <img src="/src/assets/icons/Modal_Flight_takeoff.svg" alt="">
            <span class="airport">UGC</span>
        </div>
        <div class="line"></div>
    </div>
</template>

<style scoped lang="scss">
.route-container {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 120px;
    flex-direction: column;
}

.box {
    font-family: Mulish, sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 8px;
    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
    width: 100%;

    img {
        width: 14px;
        height: 14px;
    }
}

.line {
    border-top-right-radius: 100px;
    border-top-left-radius: 100px;
    width: 100%;
    height: 4px;
    background-color: #00b8d7;
}

</style>

