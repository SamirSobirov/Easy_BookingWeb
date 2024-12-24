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

        <input type="text" placeholder="Куда" class="input" />
        <input type="date" class="input" />
        <input type="date" class="input" />
        <select class="input">
          <option>1 пассажир</option>
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

<style lang="scss" scoped>
.search-box {
  width: 1128px;
  max-width: 1200px;
  background: rgba(255, 255, 255, 0.555);
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border: 2px solid #ffffff;

  .searchFooter {
    display: flex;
    margin-top: 25px;
    align-items: center;
    text-align: center;
    justify-content: start;
    gap: 25px;

    .switch-container {
      display: flex;
      align-items: center;

      .switch {
        position: relative;
        display: inline-block;
        width: 34px;
        height: 20px;

        input {
          opacity: 0;
          width: 0;
          height: 0;
        }

        .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #ccc;
          transition: 0.4s;
          border-radius: 34px;
          width: 34px;

          &::before {
            position: absolute;
            content: "";
            height: 24px;
            width: 24px;
            left: -2px;
            bottom: -2px;
            background-color: white;
            transition: 0.4s;
            border-radius: 50%;
          }
        }

        input:checked + .slider {
          background-color: #0077ff;
        }

        input:checked + .slider::before {
          transform: translateX(14px);
        }
      }

      .switch-btn {
        background: none;
        border: none;
        border-radius: 4px;
        padding: 0.5rem 1rem;
        font-size: 14px;
        cursor: pointer;
        color: #6d7586;
        transition: background 0.3s;
      }
    }

    .accommodation_button {
      display: flex;
      align-items: center;
      gap: 10px;
      padding-left: 5px;
      background: none;
      color: #6d7586;
      border: none;
      border-radius: 0.5rem;
      font-size: 1rem;
      cursor: pointer;
      transition: background 0.3s;
    }
  }
  .tabs {
  margin-top: 20px;
  border-radius: 12px;
  height: 60px;
  background-color: rgba(255, 255, 255, 0.886);
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  align-items: center;
  white-space: nowrap;

  .tab {
    background-color: #fff;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    gap: 10px;
    height: 50px;
    margin: 0px 5px;
    flex: 1;
    padding: 0.5rem;
    border: none;
    background: transparent;
    font-size: 1rem;
    color: #b5bbc9;
    cursor: pointer;


    img {
      transition: filter 0.3s ease; 
      filter: brightness(0) saturate(100%) invert(56%) sepia(7%) saturate(358%) hue-rotate(160deg) brightness(103%) contrast(98%);
    }

    &:hover {
      color: #80dbeb; 
      font-weight: bold;
      border: 2px solid #80dbeb;
      border-radius: 8px;
    }

    &:hover img {
      filter: invert(33%) sepia(100%) saturate(500%) hue-rotate(190deg) brightness(94%) contrast(92%);
    }

    // &.active {
    //   font-weight: bold;
    //   border: 2px solid #80dbeb;
    //   border-radius: 8px;
    // }
  }
}



  .search-form {
    margin-top: 15px;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;

    .input {
      flex: 1;
      min-width: 150px;
      padding: 0.8rem;
      border: 1px solid #ddd;
      border-radius: 0.5rem;
      font-size: 1rem;
      color: #9399A8;
    }

    .search-button {
      display: flex;
      align-items: center;
      text-align: center;
      justify-content: center;
      gap: 10px;
      padding: 0.8rem 1.5rem;
      background: #00b8d7;
      color: #fff;
      border: none;
      border-radius: 0.5rem;
      font-size: 1rem;
      cursor: pointer;
      transition: background 0.3s;

      &:hover {
        background: #005bb5;
      }
    }
  }
}
</style>
