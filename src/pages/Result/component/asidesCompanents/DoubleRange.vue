<template>
    <div class="RangeDouble">

        <div class="slider-wrapper">
            <div class="time-display">
                <span>{{ formattedFromTime }}</span>
                <span>{{ formattedToTime }}</span>
            </div>

            <Slider
                :value="rangeValue"
                @slide="rangeValue = $event"
                :min="0"
                :max="196"
                :tooltip="'none'"
                :range="true"
                :step="1"
                :ticks="true"
                :labels="sliderLabels"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import Slider from "@vueform/slider";
import "@vueform/slider/themes/default.css";

const rangeValue = ref<[number, number]>([0, 196]);

const formattedFromTime = computed(() => formatTime(rangeValue.value[0]));
const formattedToTime = computed(() => formatTime(rangeValue.value[1]));

function formatTime(value: number): string {
    const hours = Math.floor(value / 60);
    const minutes = value % 60;
    return `${hours}ч ${minutes}мин`;
}

const sliderLabels = {
    0: '0мин',
    60: '1ч',
    120: '2ч',
    180: '3ч',
    196: '3ч 16мин'
};
</script>

<style lang="scss">

.RangeDouble {
    font-family: Mulish, sans-serif;
}

.slider-wrapper {
    width: 217px;
    padding: 10px 0 0 0;
}

.slider-tooltip {
    display: none !important;
}
.slider-base {
    height: 4px !important;
}

.slider-connect {
    background-color: #00B8D7 !important;
    height: 4px !important;
}

.slider-connect {
    background-color: #00B8D7 !important;
}
.time-display {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: #81899A;
    margin-bottom: 10px;
}
</style>
