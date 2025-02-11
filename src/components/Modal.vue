<template>
    <div class="container">
        <div @click="isOpen = !isOpen">
            <slot name="trigger" :isOpen="isOpen" />
        </div>

        <div v-if="isOpen" class="modal-overlay" @click="close"></div>

        <div class="share-container" v-if="isOpen" v-click-outside="close">
            <slot :close="close" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isOpen = ref(false);
const close = () => (isOpen.value = false);
</script>

<style scoped lang="scss">
.container {
    position: relative;

    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100%;
        background: #47556959;
        backdrop-filter: blur(1px);
        z-index: 9;
    }


    .share-container {
        position: absolute;
        top: 38px;
        border-radius: 16px;
        right: -15px;
        width: 412px;
        height: 170px;
        z-index: 10;
    }
}
</style>
