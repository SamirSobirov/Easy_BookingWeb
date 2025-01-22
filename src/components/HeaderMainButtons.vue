<template>
    <div class="image-buttons">
        <div
            v-for="(image, index) in images"
            :key="index"
            class="image-button"
            :style="{ backgroundImage: `url(${image.url})` }"
            @click="onButtonClick(index)"
        >
            <div class="overlay"></div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "HeaderMainButtons",
    props: {
        images: {
            type: Array as () => { url: string }[],
            required: true,
        },
    },
    emits: ["button-click"],
    methods: {
        onButtonClick(index: number) {
            this.$emit("button-click", index);
        },
    },
});
</script>

<style lang="scss" scoped>
.image-buttons {
    margin-top: 63px;
    display: flex;
    justify-content: center;
    align-items: center;

    .image-button {
        width: 40px;
        height: 40px;
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
            margin-left: -12px;

        }

        .overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            border-radius: 50%;
            background-color: rgba(0, 0, 0, 0.2);
        }
    }
}
</style>
