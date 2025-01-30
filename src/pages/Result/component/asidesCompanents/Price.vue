<template>
    <div class="sidebar_item">
        <h3 @click="toggleVisibility('baggage')" style="cursor: pointer;">
            Стоимость
            <button class="hideButton" @click="toggleVisibility('baggage')">
                <img :class="{ rotated: !visibility.baggage }" src="/src/assets/icons/arrow_down.svg"
                     alt="arrow_down"/>
            </button>
        </h3>

        <transition name="fade">
            <div class="item_box" v-if="visibility.baggage">
                <div class="slider-container">
                    <div class="price-display"><span>Всего</span>  <span> до {{ formattedPrice }} UZS</span></div>
                    <Slider
                        :value="priceValue"
                        @slide="priceValue = $event"
                        :min="0"
                        :max="20000000"
                        :step="1000"
                        :ticks="true"
                        :tooltip="'none'"
                        @input="updatePrice"
                    />
                </div>

           </div>

        </transition>
    </div>
</template>


<script setup lang="ts">
import { ref, computed, defineProps } from "vue";
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
const visibility = ref({
    transfers: true,
    baggage: true
});

const toggleVisibility = (section: keyof typeof visibility.value) => {
    visibility.value[section] = !visibility.value[section];
};
</script>

<style scoped>
.slider-container {
    width: 218px;
}

.price-display {
    font-size: 12px;
    color: #7b8794;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
}

</style>