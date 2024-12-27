<template>
  <div class="HelpCenter_box">
    <div class="HelpCenter__header">
      <h1>Найти ответ в справочном центре</h1>

      <div class="container">
        <div class="box">
            
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.HelpCenter_box {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px;
  max-width: 1182px;
  margin: 0 auto 0px;
  position: relative;
  top: 380px;
  transform: translateY(-50%);

  .HelpCenter__header {
    text-align: left;
    width: 100%;

    h1 {
      font-size: 28px;
      font-weight: 700;
      margin-left: 10px;
      color: #333;
    }

    .container {
      margin-top: 40px;
      width: 1128px;
      height: 478px;
      background-color: #FFFFFF59;
      border: 2px solid #FFFFFFA6;
      border-radius: 24px;
      display: flex; // Используем Flexbox для центрирования содержимого
      align-items: center; // Центрирование по вертикали
      justify-content: center; // Центрирование по горизонтали

      .box {
        padding: 16px 16px;
        text-align: center;
        width: 1090px;
        height: 446px;
        border: 1px solid black;
        margin-bottom: 60px;
      }
    }
  }
}

</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HelpCenter",
});
</script>
