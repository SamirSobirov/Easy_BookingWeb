<template>
    <div class="slider-container">
        <div class="time-display">
            <span>Всего</span>
            <span>до {{ formattedMaxTime }}</span>
        </div>
        <Slider
            :value="timeValue"
            @slide="timeValue = $event"
            :min="min"
            :max="max"
            :step="1"
            :ticks="true"
            :tooltip="'none'"
        />
    </div>
</template>

<script setup lang="ts">
import {ref, computed, defineProps} from "vue";
import Slider from "@vueform/slider";
import "@vueform/slider/themes/default.css";

const props = defineProps<{
    min: number;
    max: number;
    initialTime?: number;
}>();

const timeValue = ref(props.initialTime ?? props.min);

const formattedMaxTime = computed(() => formatTime(timeValue.value));

function formatTime(minutes: number): string {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}ч ${remainingMinutes}мин`;
}
</script>

<style scoped>
.slider-container {
    width: 100%;
}

.time-display {
    font-size: 14px;
    color: #7b8794;
    margin-bottom: 10px;
}
</style>
