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
            <span class="breadcrumb-item active">Поиск</span>
        </nav>
    </div>
</template>

<style scoped lang="scss">
.breadcrumb {
    display: flex;
    align-items: center;
    justify-content: start;
    margin: 0 auto -70px;
    width: 1128px;
    max-width: 1200px;
    height: 60px;
    background: rgba(255, 255, 255, 0.555);
    border: 2px solid #ffffff;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 0 20px;
    font-family: Arial, sans-serif;
}

.back-button {
    border: none;
    background: #F2F3F7;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    cursor: pointer;
    padding: 4px 4px 4px 2px;

    img {
        width: 25px;
        height: 20px;
    }
}

.breadcrumb-nav {
    display: flex;
    align-items: center;
    font-size: 18px;
    color: #666;
    margin-left: 18px;
}

.breadcrumb-item {
    font-weight: 500;
    font-size: 14px;
    color: #9399A8;
    border: none;
    background-color: transparent;
}

.breadcrumb-separator {
    margin: 0 5px 0 12px;
    color: #999;
}

.breadcrumb-item.active {
    font-size: 14px;
    margin-left: 5px;
    color: #6D7586;
    font-weight: 500;
}
</style>

<script setup lang="ts">
import {useRouter} from 'vue-router';

const router = useRouter();
const goToHome = () => {
    router.push('/');
};
</script>
