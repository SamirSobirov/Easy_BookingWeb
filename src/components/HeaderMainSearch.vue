<template>
    <section class="hero-section">
      <div class="hero-content">
        <img src="/src/assets/images/Hero.svg" alt="Hero Image" class="hero-image" />
        <div class="text-content">
          <h1 class="hero-title">Путешествуй с нами и ощути магию мира</h1>
          <p class="hero-subtitle">Простое бронирование — лёгкая экономия</p>
        </div>
      </div>
    </section>
  </template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.hero-section {
  display: flex;
  justify-content: center;
  align-items: center;
  .hero-content {
    display: flex;
    align-items: center;
    gap: 20px;

    .hero-image {
      width: 250px;
      height: auto;
    }

    .text-content {
      text-align: left;


      .hero-title {
        font-size: 46px;
        font-weight: bold;
        color: #333;
        margin: 0;
      }

      .hero-subtitle {
        font-size: 20px;
        color: #666;
        padding-left: 150px;
        margin-top: 32px;
      }
    }
  }
}
</style>