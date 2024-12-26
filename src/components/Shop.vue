<template>
  <div class="shop">
    <div class="shop__header">
      <h1>EASYBOOKING Shop</h1>

      <button>
        Все товары
        <img src="/src/assets/icons/arrow-right.svg" alt="" />
      </button>
    </div>

    <div class="Cards">
      <div class="card">
        <img src="/src/assets/images/Shop_bag.svg" alt="" />

        <div class="container">
          <div class="ball">400 балл</div>

          <span class="price">800 000 UZS </span>
          <span>Чехол на чемодан</span>
        </div>
      </div>
      <!-- 2 -->
      <div class="card">
        <img src="/src/assets/images/Shop_pillow.svg" alt="" />

        <div class="container">
          <div class="div">
            <span class="price_ball">1 000 000 UZS </span>
            <span class="ball">400 балл </span>
          </div>

          <span class="price">800 000 UZS </span>
          <span>Подушка для подголовника</span>
        </div>
      </div>
      <!-- 3 -->
      <div class="card">
        <img src="/src/assets/images/Shop_Carryingbag.svg" alt="" />

        <div class="container">
          <div class="ball">400 балл</div>

          <span class="price">800 000 UZS </span>
          <span>Сумка-переноска</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Shop",
});
</script>
