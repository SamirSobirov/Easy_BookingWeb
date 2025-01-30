<template>
    <div class="slider-container">
        <div class="price-display">Всего до {{ formattedPrice }} UZS</div>
        <Slider
            v-model="priceValue"
            :min="0"
            :max="20000000"
            :step="1000"
            :ticks="true"
            :tooltip="'none'"
            @input="updatePrice"
        />
    </div>
</template>

<script setup lang="ts">
import { ref, computed, defineProps } from "vue";
import Slider from "@vueform/slider";
import "@vueform/slider/themes/default.css";

defineProps<{ initialPrice: number }>();

const priceValue = ref(initialPrice);

const formattedPrice = computed(() => {
    return new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: 'UZS',
        minimumFractionDigits: 2,
    }).format(priceValue.value);
});

const updatePrice = () => {
};
</script>

<style scoped>
.slider-container {
    width: 100%;
}

.price-display {
    font-size: 1rem;
    color: #7b8794;
    margin-bottom: 10px;
}

.slider-wrapper {
    width: 100%;
}

.slider-connect {
    background-color: #00B8D7 !important;
}
</style>
