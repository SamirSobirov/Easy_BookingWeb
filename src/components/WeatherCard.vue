<template>
    <div class="cardGradus">
        <p>{{ day }}</p>
        <img :src="icon" :alt="altText" />
        <span>{{ temperature }}°C</span>
    </div>
</template>

<script  setup lang="ts">
import { defineProps } from "vue";

defineProps({
    day: { type: String, default: "Сегодня" },
    icon: { type: String, required: true },
    altText: { type: String, default: "Погода" },
    temperature: { type: Number, required: true }
});
</script>


<style scoped lang="scss">
.cardGradus {
    user-select: none;
    display: flex;
    flex-direction: column;
    width: 55px;
    height: 81px;
    border-radius: 8px;
    background-color: white;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 4px;

    p {
        font-size: 12px;
        font-family: Mulish, sans-serif;
        font-weight: 600;
        color: #6D7586;
    }

    img {
        width: 30px;
        height: 30px;
    }

    span {
        font-size: 14px;
        color: #23282D;
    }
}
</style>