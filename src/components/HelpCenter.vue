<template>
  <div class="HelpCenter_box">
    <div class="HelpCenter__header">
      <h1>Найти ответ в справочном центре</h1>

      <div class="container">
        <div class="box">
          <div class="box_main">
            <img
              class="img"
              src="/src/assets/images/personImg_help.svg"
              alt=""
            />

            <div class="Options">
              <h3>
                Можно ли взять чемодан в самолет?
                <img src="/src/assets/icons/add.svg" alt="" />
              </h3>

              <h3>
                Есть ли скидки на билеты для детей?
                <img src="/src/assets/icons/add.svg" alt="" />
              </h3>

              <h3>
                Какие аэропорты России закрыты сейчас?
                <img src="/src/assets/icons/add.svg" alt="" />
              </h3>

              <h3>
                Как купить билет для багажа на кресле?
                <img src="/src/assets/icons/add.svg" alt="" />
              </h3>

              <h3>
                Как я могу оплатить билет на сайте?
                <img src="/src/assets/icons/add.svg" alt="" />
              </h3>

              <h3>
                Можно ли взять чемодан в самолет?
                <img src="/src/assets/icons/add.svg" alt="" />
              </h3>
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
      background-color: #ffffff59;
      border: 2px solid #ffffffa6;
      border-radius: 24px;
      display: flex;
      align-items: center;
      justify-content: center;

      .box {
        padding: 16px;
        padding-bottom: 80px;
        padding-right: 17px;
        text-align: left;
        width: 1100px;
        height: 446px;
        display: flex;
        align-items: center;
        gap: 20px;

        .box_main {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 15px;
          margin-top: 5px;
          .img {
            width: auto;
            max-width: 400px;
            height: auto;
          }
          .Options {
            display: flex;
            flex-direction: column;
            gap: 18px;

            h3 {
              display: flex;
              align-items: center;
              justify-content: space-between;
              text-align: left;
              font-size: 18px;
              font-weight: 500;
              padding: 18px 16px;
              background-color: #ffffffa6;
              border-radius: 12px;
              width: 684px;

              img {
                width: 20px; 
                height: 20px;
              }
            }
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
