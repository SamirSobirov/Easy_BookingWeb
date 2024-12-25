<template>
  <div class="container">
    <div class="box">
      <div class="box1">
        <h1>Скачайте приложение EASYBOOKING</h1>
        <p>
          Уведомления о лучших ценах, данные пассажиров и информация по заказам
          у вас под рукой
        </p>

        <div class="elem">
          <div class="item1">
            <p>
              +120K
              <span>Скачать в App Store</span>
            </p>

            <button>App store</button>
          </div>

          <div class="item1">
            <p>
              +170K
              <span>Скачать в Google Play</span>
            </p>

            <button>App store</button>
          </div>

          <div class="item1">
            <p>
              +34K
              <span>Скачать в AppGallery</span>
            </p>

            <button>App store</button>
          </div>
        </div>
      </div>

      <div>
        <img src="/src/assets/images/telephone.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center; /* Выравнивание по центру горизонтально */
  justify-content: center; /* Выравнивание по центру вертикально */
  max-width: 1128px;
  margin: 60px auto 0;
  background: #ffffffaf;
  height: 380px;
  border-radius: 24px;

  .box {
    display: flex;
    gap: 75px;
    align-items: center; /* Центрирование по вертикали */
    justify-content: center; /* Центрирование по горизонтали */
    text-align: center;

    .box1 {
        padding-left: 30px;
      width: 562px;
      height: 260px;
      display: flex;
      flex-direction: column;
      justify-content: center; /* Центрирование по вертикали */
      align-items: center; /* Центрирование по горизонтали */
      text-align: center;
      gap: 20px;

      .elem {
        display: flex;
        align-items: center; /* Центрирование содержимого */
        justify-content: center; /* Центрирование по горизонтали */
        gap: 15px;

        .item1 {
          padding: 30px 16px;
          border-radius: 16px;
          width: 180px;
          background-color: #ffffffa6;
          border: 2px solid #ffffffbf;
          display: flex;
          flex-direction: column;
          align-items: center; /* Центрирование текста */
          justify-content: center;
          gap: 18px;

          p {
            color: black;
            font-size: 24px;
            font-weight: bold;
            margin: 0;
            display: flex;
            flex-direction: column;
            align-items: center; /* Центрирование текста */
            text-align: center;
            gap: 10px;

            span {
              font-size: 12px;
              color: #9399a8;
              line-height: 16px;
              font-weight: 500;
              margin: 0;
            }
          }

          button {
            width: 160px;
            height: 48px;
            background: white;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
          }
        }
      }

      h1 {
        font-size: 28px;
        font-weight: bold;
        margin: 0;
        text-align: center; /* Центрирование заголовка */
      }

      p {
        line-height: 20px;
        font-size: 14px;
        color: #9399a8;
        margin: 0;
        text-align: center; /* Центрирование текста */
      }
    }
  }
}

</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DownloadApp",
});
</script>
