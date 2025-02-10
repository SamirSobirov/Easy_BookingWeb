<template>
    <div class="time">
        {{ time }}
        <span>{{ date }}</span>
        <span class="Cities">{{ city }}</span>
        <p v-if="showDetails" class="terminal">Класс: <span style="padding-left: 3px;"> B</span></p>
        <p v-if="showDetails" class="terminal">Класс: <span style="padding-left: 3px;"> B</span></p>
    </div>
</template>

<script setup lang="ts">

defineProps<{
    time: string;
    date: string;
    city: string;
    showDetails: boolean;
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

    .terminal {
        font-size: 12px;
        font-family: Mulish, sans-serif;
        color: #81899A;

        span {
            color: black;
        }
    }
}
</style>