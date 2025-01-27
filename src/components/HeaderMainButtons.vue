<template>
    <div class="image-buttons" v-if="route.path === '/'">

            <img
                v-for="(image, index) in images"
                :key="index"
                class="image-button"
                @click="onButtonClick(index)"
                :src="image.url" alt="">

    </div>
</template>

<script setup lang="ts">
import {defineProps, defineEmits} from "vue";
import {useRoute} from "vue-router";

const route = useRoute();

const {images} = defineProps<{
    images: { url: string }[];
}>();

const emit = defineEmits(["button-click"]);

const onButtonClick = (index: number) => {
    console.log(images[index]);
    emit("button-click", index);
};
</script>

<style lang="scss" scoped>
.image-buttons {
    margin-top: 63px;
    display: flex;
    justify-content: center;
    align-items: center;

    .image-button {
        width: 50px;
        height: 50px;
        background-size: cover;
        background-position: center;
        border-radius: 50%;
        position: relative;
        cursor: pointer;
        transition: transform 0.3s ease;
        box-shadow: none;
        border: none;

        &:hover {
            z-index: 1;
            transform: scale(1.1);
        }

        &::before {
            content: none;
        }

        &:not(:first-child) {
            margin-left: -20px;

        }

        .overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            border-radius: 50%;

        }
    }
}
</style>
