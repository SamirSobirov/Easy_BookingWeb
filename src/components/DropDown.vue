<script setup lang="ts">
import {ref} from "vue";

const isOpen = ref(false)

const close = () => isOpen.value = false;
</script>

<template>
<div class="container">
    <div  @click="isOpen = !isOpen ">
        <slot name="trigger"  />
    </div>

    <div class="share-container" v-if="isOpen" v-click-outside="close">
        <slot :close="close"/>


    </div>

</div>
</template>

<style scoped lang="scss">
.container {
    position: relative;


.share-container {
    position: absolute;
    top: 38px;
    border-radius: 16px;
    right: -15px;
    width: 412px;
    height: 170px;
    background-color: transparent;
}
}
</style>