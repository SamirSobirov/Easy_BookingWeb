<template>
    <div class="slider-container">
        <div class="price-display"><span style="color: #000000">Всего</span> <span> до {{ formattedPrice }} UZS</span>
        </div>
        <Slider
            :value="priceValue"
            @slide="priceValue = $event"
            :min="1967765"
            :max="1095743557"
            :step="1000"
            :ticks="true"
            :tooltip="'none'"
            @input="updatePrice"
        />
    </div>
</template>

<script setup lang="ts">
import {ref, computed, defineProps} from "vue";
import Slider from "@vueform/slider";
import "@vueform/slider/themes/default.css";

const props = defineProps<{
    initialPrice: number;
}>();

const priceValue = ref(props.initialPrice);

const formattedPrice = computed(() => {
    return new Intl.NumberFormat('ru-RU', {
        style: 'decimal',
        minimumFractionDigits: 2,
    }).format(priceValue.value);
});

const updatePrice = () => {
};
</script>

<style scoped>
.slider-container {
    width: 218px;
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.price-display {
    font-size: 13px;
    color: #7b8794;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
}
</style>
