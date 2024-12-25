<template>
  <div class="advantages">
    <h1>Преимущества компаний</h1>
  </div>
</template>

<style lang="scss" scoped>
.advantages {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
  margin-top: 50px;
  max-width: 1228px;

  h1 {
    font-size: 36px;
    font-weight: 700;
    text-align-last: left;
    justify-content: start;
    align-items: start;
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Advantages",
});
</script>
