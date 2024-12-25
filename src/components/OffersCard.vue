<template>
  <div class="offers-card">
    <div class="offers-card__header">
      <h1>Акции и предложения</h1>

      <div class="offers-card__header-buttons">
        <button>
          <img src="/src/assets/icons/hotel_icon.svg" alt="" />
          Перелеты
        </button>

        <button>
          <img src="/src/assets/icons/tours_icon.svg" alt="" />
          Туры
        </button>
        <button>
          <img src="/src/assets/icons/train_icon.svg" alt="" />
          Ж/Д
        </button>
      </div>
    </div>

    <div class="Cards">
      <div class="card">
        <img src="/src/assets/images/SharmELSheyx.svg" alt="" />

        <div class="container">
          <p>Отдых в Шарм-эль-Шейхе</p>

          <span
            ><img src="/src/assets/icons/Calendar.svg" alt="" /> 12.01.2024 -
            18.02.2024</span
          >
          <span class="price">7 844 000 UZS </span>
        </div>
      </div>

      <!-- 2 -->
      <div class="card">
        <img src="/src/assets/images/SharmELSheyx.svg" alt="" />

        <div class="container">
          <p>Отдых в Шарм-эль-Шейхе</p>

          <span
            ><img src="/src/assets/icons/Calendar.svg" alt="" /> 12.01.2024 -
            18.02.2024</span
          >
          <span class="price">7 844 000 UZS </span>
        </div>
      </div>
      
      <!-- 3 -->
      <div class="card">
        <img src="/src/assets/images/SharmELSheyx.svg" alt="" />

        <div class="container">
          <p>Отдых в Шарм-эль-Шейхе</p>

          <span
            ><img src="/src/assets/icons/Calendar.svg" alt="" /> 12.01.2024 -
            18.02.2024</span
          >
          <span class="price">7 844 000 UZS </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.Cards {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;

  .card {
    width: 365px;
    height: 375px;
    background-color: #ffffffbd;
    border-radius: 20px;
    border: 1px solid white;
    margin: 10px;
    border-radius: 10px;
    padding: 10px;

    .container {
      padding: 12px 15px;
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 5px;

      p {
        color: #23282d;
        font-family: Mulish;
        font-weight: 600;
        font-size: 18px;
      }

      span {
        color: #9399a8;
        font-size: 14px;
        font-family: Mulish;
        align-items: center;
        text-align: center;
        justify-content: center;
        display: flex;
        white-space: nowrap;
        gap: 10px;
      }

      .price {
        padding-top: 15px;
        color: #23282d;
        font-family: Mulish;
        font-weight: 700;
        font-size: 18px;
      }
    }
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "mainCards",
});
</script>
