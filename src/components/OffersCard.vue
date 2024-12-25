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
        <img src="/src/assets/images/Georgia.svg" alt="" />

        <div class="container">
          <p>Чудеса Грузи</p>

          <span
            ><img src="/src/assets/icons/Calendar.svg" alt="" /> 12.01.2024 -
            18.02.2024</span
          >
          <span class="price">7 844 000 UZS </span>
        </div>
      </div>

      <!-- 3 -->
      <div class="card">
        <img src="/src/assets/images/Georgia2.svg" alt="" />

        <div class="container">
          <p>Чудеса Грузи</p>

          <span
            ><img src="/src/assets/icons/Calendar.svg" alt="" /> 12.01.2024 -
            18.02.2024</span
          >
          <span class="price">7 844 000 UZS </span>
        </div>
      </div>
    </div>

    <div class="cardFooter">
      <button>
        <img src="/src/assets/icons/ToKnow.svg" alt="" />
        <span>Узнать больще</span>
        
      </button>
    </div>
</div>
</template>

<style lang="scss" scoped>

</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "mainCards",
});
</script>
