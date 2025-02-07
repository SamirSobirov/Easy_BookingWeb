<template>
    <div class="container">
        <img src="/src/assets/images/notFound.svg" alt="NOT FOUND">
        <p>По заданным параметрам поиска не найдено результатов
            <span>Рекомендуем попробовать другие даты для поиска.</span>
        </p>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.container {
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: 170px;

    p {
        color: black;
        font-weight: 700;
        line-height: 24px;
        display: flex;
        flex-direction: column;
        margin-top: 40px;
        font-size: 22px;

        span {
            font-size: 15px;
            font-weight: 400;
            font-family: Arial, sans-serif;
            padding-top: 12px;
            color: #6D7586;
        }
    }
}
</style>