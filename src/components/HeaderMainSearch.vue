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
          <img src="/src/assets/icons/plane_icon.svg" alt="plane">
          Перелеты
        </button>
        <button class="tab">
          <img src="/src/assets/icons/hotel_icon.svg" alt="hotels">
          Отели</button>
        <button class="tab">
          <img src="/src/assets/icons/train_icon.svg" alt="train">
          Ж/Д</button>
        <button class="tab">
          <img src="/src/assets/icons/transport.svg" alt="transport">
          Трансферы</button>
        <button class="tab">
          <img src="/src/assets/icons/tours_icon.svg" alt="tours">
          Туры</button>
        <button class="tab">
          <img src="/src/assets/icons/insurance_icon.svg" alt="insurance">
          Страхование</button>
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
          <img src="/src/assets/icons/search_icon.svg" alt="">
          Поиск</button>
      </form>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
  .search-box {
    margin-top: 2rem;
    width: 1128px;
    max-width: 1200px;
    background: rgba(255, 255, 255, 0.555);
    border-radius: 1rem;
    padding: 1rem;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

    .tabs {
      margin-top: 20px;
      border-radius: 12px;
      height: 65px;
      background-color: #fff;
      display: flex;
      justify-content: space-between;
      margin-bottom: 1rem;
      align-items: center;
      justify-content: center;
      white-space: nowrap;

      .tab {
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
        gap: 10px;
        height: 50px;
        margin: 0px 5px;
        flex: 1;
        text-align: center;
        padding: 0.5rem;
        border: none;
        background: transparent;
        font-size: 1rem;
        color: #B5BBC9;
        cursor: pointer;
        // &.active {
        //   font-weight: bold;
        //   border: 2px solid #80DBEB;
        //   border-radius: 8px;
        // }

        &:hover {
          color: #80DBEB;
          border: 2px solid #80DBEB;
          border-radius: 8px;
          font-weight: bold;
        }
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
        color: #333;
      }

      .search-button {
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
        gap: 10px;
        padding: 0.8rem 1.5rem;
        background: #00B8D7;
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
