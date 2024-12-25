<template>
  <div class="advantages">
    <div class="advantages__header">
      <h1>Преимущества компаний</h1>

      <div class="cards">
        <div>1</div>
        <div>2</div>
        <div class="person_img">3</div>
        <div>4</div>
        <div>5</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.advantages {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 1128px;
  margin: 54px auto 0;

  .advantages__header {
    width: 100%;

    h1 {
      text-align: left;
      margin: 0;
    }

    .cards {
      margin-top: 30px;
      display: grid;
      grid-template-columns: repeat(3, 360px);
      grid-template-rows: 195px 195px;
      gap: 10px;

      div {
        background: #f0f0f0;
        text-align: center;
        padding: 10px;
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 18px;
        font-weight: bold;
      }

      .person_img {
        grid-row: span 2;
        height: 410px;
        width: 360px;
        background: #cceeff;
      }

      div:not(.person_img) {
        height: 195px;
        width: 360px;
      }
    }
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Advantages",
});
</script>
