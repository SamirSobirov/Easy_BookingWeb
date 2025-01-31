<template>
    <div class="breadcrumb">
        <button class="back-button" @click="goToHome">
            <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xOS41IDEyaC0xNW0wIDBsNS42MjUtNk00LjUgMTJsNS42MjUgNiIvPjwvc3ZnPg=="
                alt="Назад"/>
        </button>
        <nav class="breadcrumb-nav">
            <button class="breadcrumb-item" @click="goToHome">Главная</button>
            <span class="breadcrumb-separator">/</span>
            <span class="breadcrumb-itemSearch active">Поиск</span>
        </nav>
    </div>
</template>

<script setup lang="ts">
import {useRouter} from 'vue-router';

const router = useRouter();
const goToHome = () => {
    router.push('/');
};
</script>

<style scoped lang="scss"></style>
