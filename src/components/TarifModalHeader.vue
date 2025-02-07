<template>
    <div class="header_sec">
        <img src="/src/assets/icons/PlanModalFlag.svg" alt="airline">
        <div class="header_box">
            <div>Выберите тариф:</div>
            <div class="ChoosePlanModal-route-title">
                <span style="color: black">Ташкент</span>(TAS) —
                <span style="color: black">Москва</span> (MOW)
            </div>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.header_sec {
    display: flex;
    text-align: left;
    gap: 10px;

    img {
        border: 1px solid #E5E9EB;
        border-radius: 40px;
        background-color: #FFFFFF;
        padding: 3px 6px;
    }

    .header_box {
        text-align: left;
        display: flex;
        flex-direction: column;
    }

    .ChoosePlanModal-route-title {
        font-size: 16px;
        font-weight: 600;
        color: #00B8D7;
        display: flex;
        align-items: center;
        gap: 10px;
    }
}
</style>