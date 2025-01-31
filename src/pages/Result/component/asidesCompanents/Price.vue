<template>
    <div class="sidebar_item">
        <toggle-section @click="toggleVisibility('baggage')">
            <span class="label">Стоимость</span>
            <button class="hideButton" @click.stop="toggleVisibility('baggage')">
                <img :class="{ rotated: !visibility.baggage }" src="/src/assets/icons/arrow_down.svg" alt="arrow_down" />
            </button>
        </toggle-section>


        <transition name="fade">
            <div class="item_box" v-if="visibility.baggage">
                <PriceSlider :initialPrice="1615" />
            </div>
        </transition>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import PriceSlider from "../../../../components/PriceSlider.vue";

const visibility = ref({
    baggage: true
});

const toggleVisibility = (section: keyof typeof visibility.value) => {
    visibility.value[section] = !visibility.value[section];
};
</script>

<style scoped>
.sidebar_item {
    border-radius: 8px;
}

toggle-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 16px 0 0;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    cursor: pointer;
}

.hideButton {
    width: 20px;
    height: 20px;
    background-color: transparent;
    border: none;
    cursor: pointer;

    img {
        rotate: 180deg;
        width: 15px;
        height: 15px;
    }
}


.item_box {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 5px;
}
</style>
