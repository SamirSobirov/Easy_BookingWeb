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

    <div class="search_box"></div>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
  .search_box {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    width: 90%;
    background-color: #FFFFFF59;
  }
</style>
