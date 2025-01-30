<template>
    <div class="sidebar_item">
        <h3 @click="toggleVisibility('baggage')" style="cursor: pointer;">
            Время в пути
            <button class="hideButton" @click.stop="toggleVisibility('baggage')">
                <img :class="{ rotated: !visibility.baggage }" src="/src/assets/icons/arrow_down.svg" alt="arrow_down" />
            </button>
        </h3>

        <transition name="fade">
            <div class="item_box" v-if="visibility.baggage">
                <TimerSlider :min="0" :max="1615" :initialTime="1615" />
            </div>
        </transition>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import TimerSlider from "../../../../components/TimerSlider.vue";

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

h3 {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.hideButton img {
    transition: transform 0.3s ease;
}

.hideButton img.rotated {
    transform: rotate(180deg);
}

.item_box {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 5px;
}
</style>
