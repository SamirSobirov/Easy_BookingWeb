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
.sliders_control {
    position: relative;
    width: 225px;
    align-items: center;
    justify-content: center;
    text-align: center;
    display: flex;
    flex-direction: column;

    span {
        font-size: 13px;
        font-weight: 400;
        line-height: 17px;
        color: #9399A8;
        padding-bottom: 12px;
    }

    input[type=range]::-webkit-slider-thumb {
        -webkit-appearance: none;
        pointer-events: all;
        width: 16px;
        height: 16px;
        border: 1px solid #00B8D7;
        background-color: #fff;
        border-radius: 50%;
        box-shadow: 0 0 0 1px #C6C6C6;
        cursor: pointer;
    }


    input[type=range]::-webkit-slider-thumb:active {
        box-shadow: inset 0 0 3px #387bbe, 0 0 9px #387bbe;
        -webkit-box-shadow: inset 0 0 3px #387bbe, 0 0 9px #387bbe;
    }

    input[type="range"] {
        -webkit-appearance: none;
        appearance: none;
        height: 2px;
        border-radius: 5px;
        width: 232px;
        align-items: center;
        justify-content: center;
        text-align: center;
        background-color: #E3E5ED;
        pointer-events: none;
    }

    #fromSlider {
        height: 0;
        z-index: 1;
    }
}
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

