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
  display: flex;
  justify-content: center;
  align-items: center;

  .image-button {
    width: 80px;
    height: 80px;
    background-size: cover;
    background-position: center;
    border-radius: 50%;
    border: 3px solid #00aaff;
    cursor: pointer;
    position: relative;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
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
