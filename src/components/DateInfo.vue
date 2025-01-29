<template>
    <div class="time">
        {{ time }}
        <span>{{ date }}</span>
        <span class="Cities">{{ city }}</span>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    time: string;
    date: string;
    city: string;
}>();
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