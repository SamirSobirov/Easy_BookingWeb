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

<style lang="scss" scoped></style>
