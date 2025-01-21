<script setup lang="ts">
import {useRoute} from "vue-router";
import {computed} from "vue";

const route = useRoute();
const hideContent = computed(() => route.path === '/result');
</script>

<template>
    <div :class="{'full-width-header': hideContent}" class="hero-content" v-if="!hideContent">
        <img
            src="/src/assets/images/Hero.svg"
            alt="Hero Image"
            class="hero-image"
        />
        <div class="text-content">
            <h1 class="hero-title">Путешествуй с нами и ощути магию мира</h1>
            <p class="hero-subtitle">Простое бронирование — лёгкая экономия</p>
        </div>
    </div>
</template>

<style scoped lang="scss"></style>