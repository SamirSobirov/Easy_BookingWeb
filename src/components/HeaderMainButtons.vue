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
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  .image-button {
    width: 80px;
    height: 80px;
    background-size: cover;
    background-position: center;
    border-radius: 50%;
    border: none; 
    position: relative;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: scale(1.1); 
      box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2); 
    }

    &::before {
      content: "";
      position: absolute;
      top: -5px;
      left: -5px;
      right: -5px;
      bottom: -5px;
      border: none; 
      border-radius: 50%;
      z-index: -1; 
    }

    &:not(:first-child) {
      margin-left: -40px;
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
