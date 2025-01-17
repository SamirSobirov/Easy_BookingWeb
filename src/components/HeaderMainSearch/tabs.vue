<template>
    <nav class="tabs">
        <button class="tab active" data-tab="flights">
            <img src="/src/assets/icons/plane_icon.svg" alt="plane"/>
            Перелеты
        </button>
        <button class="tab" data-tab="hotels">
            <img src="/src/assets/icons/hotel_icon.svg" alt="hotels"/>
            Отели
        </button>
        <button class="tab" data-tab="train">
            <img src="/src/assets/icons/train_icon.svg" alt="train"/>
            Ж/Д
        </button>
        <button class="tab" data-tab="transfers">
            <img src="/src/assets/icons/transport.svg" alt="transport"/>
            Трансферы
        </button>
        <button class="tab" data-tab="tours">
            <img src="/src/assets/icons/tours_icon.svg" alt="tours"/>
            Туры
        </button>
        <button class="tab" data-tab="insurance">
            <img src="/src/assets/icons/insurance_icon.svg" alt="insurance"/>
            Страхование
        </button>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "tabs",
});
</script>


<style scoped lang="scss">
</style>