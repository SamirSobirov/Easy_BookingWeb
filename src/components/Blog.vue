<template>
  <div class="blog">
    <div class="blog__header">
      <h1>Блог</h1>

      <button>
        Все блоги
        <img src="/src/assets/icons/arrow-right.svg" alt="" />
      </button>
    </div>

    <div class="Cards">
      <div class="card">
        <img src="/src/assets/images/Hills.svg" alt="" />

        <div class="container">
          <p>Город на холмах</p>

          <span class="span"
            >За несколько последних лет ОАЭ превратились из пустыни в место, где
            хочется проводить свой долгожданный отпуск вновь и вновь...</span
          >
          <div class="date_box">
            <span class="date">24.07.2023</span>
            <span>#Переплёты</span>
          </div>
        </div>
      </div>
      <!-- 2 -->
      <div class="card">
        <img src="/src/assets/images/mountain.svg" alt="" />

        <div class="container">
          <p>Тайны наскальных рисунков</p>

          <span class="span"
            >За несколько последних лет ОАЭ превратились из пустыни в место, где хочется проводить свой долгожданный отпуск вновь и вновь...</span
          >
          <div class="date_box">
            <span class="date">24.07.2023</span>
            <span>#Переплёты</span>
          </div>
        </div>
      </div>
      <!-- 3 -->
      <div class="card">
        <img src="/src/assets/images/meeting.svg" alt="" />

        <div class="container">
          <p>Город на холмах</p>

          <span class="span"
            >За несколько последних лет ОАЭ превратились из пустыни в место, где
            хочется проводить свой долгожданный отпуск вновь и вновь...</span
          >
          <div class="date_box">
            <span class="date">24.07.2023</span>
            <span>#Переплёты</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Blog",
});
</script>
