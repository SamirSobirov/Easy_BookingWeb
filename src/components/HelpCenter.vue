<template>
  <div class="HelpCenter_box">
    <div class="HelpCenter__header">
      <h1>Найти ответ в справочном центре</h1>

      <div class="container">
        <div class="box">

            <div class="box_main">
            
                <img class="img" src="/src/assets/images/personImg_help.svg" alt="">

                <div class="inputs_box">
                    <p>Lorem, ipsum dolor.</p>

                </div>
        </div>
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
  padding: 16px;
  height: 475px;
  background-color: #FFFFFF59;
  border: 2px solid #FFFFFFA6;
  border-radius: 24px;
  display: flex; 
  align-items: center;
  justify-content: center; 

  .box {
    padding: 16px;
    text-align: left; // Текст и элементы внутри будут начинаться с левого края
    width: 1090px;
    height: 446px;
    border: 1px solid black;
    display: flex; // Используем Flexbox для правильного размещения
    align-items: center; // Центрируем по вертикали
    gap: 20px; // Расстояние между изображением и другими элементами

    .box_main {
      display: flex;
      align-items: center; 
      justify-content: flex-start; 
      gap: 15px;
      .img {
        width: auto; // Отключаем ширину 400%
        max-width: 400px; // Устанавливаем разумный лимит ширины
        height: auto; // Автоматическая пропорциональная высота
      }

      .inputs_box {
        display: flex;
        flex-direction: column;
      }
    }
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
