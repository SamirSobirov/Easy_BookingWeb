<template>
  <header class="header">
    <div class="header__container">
      <div class="header__logo">
        <img src="/src/assets/EasyBooking_logo.svg" alt="EasyBooking Logo" />
      </div>
      <nav class="header__nav">
        <a href="#" class="header__nav-link">Агентствам</a>
        <a href="#" class="header__nav-link">Корпоративным клиентам</a>
        <a href="#" class="header__nav-link">О нас</a>

        <button class="header__nav-button header__nav-button--phone">
          <i class="fas fa-phone-alt"></i>
          <span>1240</span>
        </button>

        <button class="header__nav-button header__nav-button--language">
          <img src="/src/assets/russFlag_icon.svg" alt="Russian Flag" class="flag-icon" />
          <span>RUS</span>
          <i class="fas fa-chevron-down"></i>
        </button>
      </nav>
    </div>
  </header>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import "@fortawesome/fontawesome-free/css/all.css";

export default defineComponent({
  name: "LanguageButton",
});
</script>

<style lang="scss" scoped>
.header {
  width: 90%;
  margin: 24px auto;
  padding: 10px;
  background-color: #ffffff;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  &__container {
    width: 100%;
    height: 52px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: inherit;
  }

  &__logo {
    img {
      width: 100px;
      height: auto;
    }
  }

  &__nav {
    display: flex;
    gap: 30px;
    white-space: nowrap;

    &-link {
      padding-top: 5px;
      font-size: 16px;
      text-decoration: none;
      color: #9399a8;
      font-weight: 500;
      transition: color 0.3s;

      &:hover {
        color: #007bff;
      }
    }

    &-button {
      &--phone {
        display: flex;
        gap: 6px;
        padding: 8px;
        border-radius: 8px;
        background-color: #e7f2fc;
        color: #6d7586;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        transition: background-color 0.3s;
        border: none;

        i {
          transform: rotate(90deg);
        }

        &:hover {
          background-color: #d4e9f9;
        }
      }

      &--language {
        display: flex;
        align-items: center;
        padding: 8px 12px;
        border: none;
        background-color: transparent;
        font-size: 14px;
        color: #6d7586;
        cursor: pointer;

        .flag-icon {
          width: 18px;
          height: auto;
        }

        i {
          font-size: 1.2em;
        }
      }
    }
  }
}
</style>
