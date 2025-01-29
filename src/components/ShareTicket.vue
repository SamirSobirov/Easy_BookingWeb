<script setup lang="ts">

</script>

<template>
    <div class="icons">
        <div class="icon telegram">
            <img src="/src/assets/images/Telegram.svg" alt="Телеграм">
            <span>Телеграм</span>
        </div>
        <div class="icon instagram">
            <img src="/src/assets/images/Instagram.svg" alt="Инстаграм">
            <span>Инстаграм</span>
        </div>
        <div class="icon facebook">
            <img src="/src/assets/images/Facebook.svg" alt="Фейсбук">
            <span>Фейсбук</span>
        </div>
        <div class="icon twitter">
            <img src="/src/assets/images/Twitter.svg" alt="Твиттер">
            <span>Твиттер</span>
        </div>
        <div class="icon link">
            <img src="/src/assets/images/Link.svg" alt="Ссылка">
            <span>Ссылка</span>
        </div>
    </div>
</template>

<style scoped lang="scss">
.icons {
    display: flex;
    justify-content: space-between;

    .icon {
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
        padding: 10px;
        border-radius: 10px;
        transition: background 0.3s;
        font-family: 'Mulish', sans-serif;
        font-size: 12px;
        font-weight: 500;

        img {
            width: 40px;
            height: 40px;
        }

        span {
            color: #555;
            margin-top: 5px;
        }
    }
}
</style>