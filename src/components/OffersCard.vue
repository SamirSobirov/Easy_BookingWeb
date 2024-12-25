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
  </div>
</template>

<style lang="scss" scoped>
.offers-card {
  margin-top: 60px;

  .offers-card__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1128px;
    margin: 0 auto;

    h1 {
      margin: 0;
    }

    .offers-card__header-buttons {
      display: flex;
      justify-content: center;
      gap: 12px;
      align-items: center;
      width: 367px;
      height: 48px;
      background: #ffffff59;
      border: 1px solid white;
      border-radius: 12px;

      button {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
        width: 97px;
        height: 40px;
        border-radius: 8px;
        background: none;
        border: none;
        cursor: pointer;
        font-size: 14px;
        font-weight: 500;
        color: #000;
        transition: background 0.3s;
        color: #abb1bf;

        img {
          width: 15px;
          height: 15px;
        }
        &:hover img {
          filter: brightness(0) saturate(100%) invert(50%) sepia(100%)
            saturate(1000%) hue-rotate(190deg) brightness(100%) contrast(95%);
        }

        &:hover {
          background: white;
          border: 1px solid #80dbeb;
          color: #80dbeb;
        }
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
