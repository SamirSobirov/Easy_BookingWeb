<template>
    <div class="time">
        {{ time }}
        <span>{{ date }}</span>
        <span class="Cities">{{ city }}</span>

        <p v-if="showDetails" class="terminal">Класс: <span style="padding-left: 3px;">{{ terminal }}</span></p>
        <p v-if="showDetails" class="terminal">
            <img :src="imgSrc" alt="weather-icon" style="width: 20px; height: 20px;">
            <span style="padding-left: 3px; color: #81899A">{{ degrees }}</span>
        </p>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import cloudIcon from '/public/icons/cloudly.svg';

// Деструктурируем пропсы через defineProps
const props = defineProps<{
    time: string;
    date: string;
    city: string;
    showDetails: boolean;
    terminal: string;
    degrees: string;
    img?: string;
}>();

const imgSrc = computed(() => props.img || cloudIcon);
</script>

<style scoped lang="scss">
.time {
    display: flex;
    flex-direction: column;
    text-align: left;
    gap: 8px;
    font-size: 24px;
    font-weight: 100;
    color: #23282D;
    white-space: nowrap;

    span {
        font-size: 13px;
        color: #9399A8;
        font-weight: 100;
        text-align: left;
    }

    .terminal {
        display: flex;
        font-size: 12px;
        font-family: Mulish, sans-serif;
        color: #81899A;
        text-align: left;
        align-items: center;

        span {
            color: black;
        }
    }
}
</style>