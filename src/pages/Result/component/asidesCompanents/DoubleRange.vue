<template>
    <div class="sliders_control">
        <span>{{ formattedTime }}</span>
        <input
            id="fromSlider"
            type="range"
            v-model="fromValue"
            :min="min"
            :max="max"
            @input="updateFromValue"
        />
        <input
            id="toSlider"
            type="range"
            v-model="toValue"
            :min="min"
            :max="max"
            @input="updateToValue"
        />
    </div>
</template>

<style scoped lang="scss">

</style>

<script setup lang="ts">
import {computed, ref} from "vue";

const fromValue = ref(0);
const toValue = ref(30);

const min = ref(0);
const max = ref(100);


const formattedTime = computed(() => {
    const hours = Math.floor(toValue.value / 60);
    const minutes = toValue.value % 60;
    return `${hours}ч ${minutes}мин`;
});

const updateFromValue = () => {
    if (fromValue.value > toValue.value) {
        fromValue.value = toValue.value;
    }
};

const updateToValue = () => {
    if (toValue.value < fromValue.value) {
        toValue.value = fromValue.value;
    }
};
</script>

