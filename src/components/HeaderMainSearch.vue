<template>
  <section class="hero-section">
    <div class="hero-content">
      <img
        src="/src/assets/images/Hero.svg"
        alt="Hero Image"
        class="hero-image"
      />
      <div class="text-content">
        <h1 class="hero-title">Путешествуй с нами и ощути магию мира</h1>
        <p class="hero-subtitle">Простое бронирование — лёгкая экономия</p>
      </div>
    </div>

    <div class="search-box">
      <nav class="tabs">
        <button class="tab active">
          <img src="/src/assets/icons/plane_icon.svg" alt="plane" />
          Перелеты
        </button>
        <button class="tab">
          <img src="/src/assets/icons/hotel_icon.svg" alt="hotels" />
          Отели
        </button>
        <button class="tab">
          <img src="/src/assets/icons/train_icon.svg" alt="train" />
          Ж/Д
        </button>
        <button class="tab">
          <img src="/src/assets/icons/transport.svg" alt="transport" />
          Трансферы
        </button>
        <button class="tab">
          <img src="/src/assets/icons/tours_icon.svg" alt="tours" />
          Туры
        </button>
        <button class="tab">
          <img src="/src/assets/icons/insurance_icon.svg" alt="insurance" />
          Страхование
        </button>
      </nav>

      <form class="search-form">
        <input type="text" placeholder="Откуда" class="input" />
        <img src="/src/assets/icons/Swap_inputs.svg" alt="" />
        <input type="text" placeholder="Куда" class="input" />
        <input
          type="text"
          class="input_date"
          placeholder="Когда"
          onfocus="(this.type='date')"
          onblur="(this.type='text')"
        />
        <input
          type="text"
          class="input_date"
          placeholder="Обратно"
          onfocus="(this.type='date')"
          onblur="(this.type='text')"
        />

        <select class="input_select">
          <option style="height: 130px">1 пассажир</option>
          <option>2 пассажира</option>
          <option>3 пассажира</option>
        </select>

        <button type="submit" class="search-button">
          <img src="/src/assets/icons/search_icon.svg" alt="" />
          Поиск
        </button>
      </form>

      <div class="searchFooter">
        <button class="accommodation_button">
          <img src="/src/assets/icons/accommodation_icon.svg" alt="" />
          <p>Сложный маршрут</p>
        </button>

        <div class="switch-container">
          <label class="switch">
            <input type="checkbox" v-model="isSwitched" />
            <span class="slider"></span>
          </label>
          <button class="switch-btn">± 1 день</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const isSwitched = ref(false);
</script>

<style lang="scss" scoped></style>
