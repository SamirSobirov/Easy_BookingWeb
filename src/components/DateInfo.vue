<template>
    <div class="time">
        {{ time }}
        <span>{{ date }}</span>
        <span class="Cities">{{ city }}</span>
        <p v-if="showDetails">Класс: <strong style="padding-left: 3px;"> B</strong></p>
    </div>
</template>

<script setup lang="ts">
import {ref} from "vue";

defineProps<{
    time: string;
    date: string;
    city: string;
}>();

const showDetails = ref(false);

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
}
</style>