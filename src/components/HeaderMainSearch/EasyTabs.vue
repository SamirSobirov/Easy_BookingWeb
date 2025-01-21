<template>
    <div class="container">
        <button :class="{ active: activeButton === 'avia' }" @click="activeButton = 'avia'">
            <img src="/src/assets/icons/plane_icon.svg" alt="plane"/>
            <span>Авиабилеты</span>
        </button>

        <button :class="{ active: activeButton === 'tours' }" @click="activeButton = 'tours'">
            <img src="/src/assets/icons/tours_icon.svg" alt="tours"/>
            <span>Туры</span>
        </button>
    </div>
</template>

<script setup lang="ts">
import {ref} from "vue";

const activeButton = ref('avia');

</script>

<style scoped lang="scss">
.container {
    width: 100%;
    height: 60px;
    background-color: rgba(223, 223, 223, 0.31);
    border-radius: 10px;
    display: flex;

    padding: 5px 5px;

    button {
        border: none;
        background-color: transparent;
        width: 100%;
        height: 50px;
        border-radius: 10px;
        display: flex;
        gap: 10px;
        align-items: center;
        text-align: center;
        justify-content: center;
        cursor: pointer;
        span {
            font-size: 16px;
            color: rgba(170, 170, 170, 0.66);
        }
        img {
            filter: brightness(0) invert(56%);
        }
    }

    .active {
        background-color: white;
        border: 1px solid #80dbeb;
        span {
            color: #80dbeb;
        }
        img {
            filter: brightness(0) saturate(100%) invert(90%) sepia(17%) saturate(1411%) hue-rotate(162deg) brightness(98%) contrast(89%);
        }
    }
}
</style>
