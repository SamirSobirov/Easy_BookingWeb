<template>
    <footer class="footer" style="margin-top: 60px; margin-bottom: 43px;">
      <div class="footer__container">
        <!-- Логотип и описание -->
        <div class="footer__section">
          <img src="/src/assets/images/EasyBooking_logo.svg" alt="Easy Booking" class="footer__logo" />
          <p class="footer__description">
            Ваш проводник в мир ярких путешествий и комфортных поездок
          </p>
          <div class="footer__apps">
            <img src="" alt="App Store" />
            <img src="" alt="Google Play" />
            <img src="" alt="AppGallery" />
          </div>
        </div>
  
        <!-- Ссылки на компании -->
        <div class="footer__section">
          <h3 class="footer__title">Компания</h3>
          <ul class="footer__list">
            <li><a href="#" class="footer__link">О компании</a></li>
            <li><a href="#" class="footer__link">Сотрудничество</a></li>
            <li><a href="#" class="footer__link">Партнёрам</a></li>
          </ul>
        </div>
  
        <!-- Ссылки на информацию -->
        <div class="footer__section">
          <h3 class="footer__title">Информация</h3>
          <ul class="footer__list">
            <li><a href="#" class="footer__link">Публичная оферта</a></li>
            <li><a href="#" class="footer__link">Справочный центр</a></li>
          </ul>
        </div>
  
        <!-- Контактные данные -->
        <div class="footer__section">
          <h3 class="footer__title">Контакты</h3>
          <p class="footer__contact">support@easybooking.uz</p>
          <p class="footer__contact">+998 66 230 44 00</p>
          <p class="footer__contact">+998 71 203 00 11</p>
          <div class="footer__socials">
            <a href="#" class="footer__social-link">Telegram</a>
            <a href="#" class="footer__social-link">Instagram</a>
            <a href="#" class="footer__social-link">Facebook</a>
          </div>
        </div>
      </div>
      <div class="footer__bottom">
        <p>© Easybooking.uz | All rights reserved</p>
        <div class="footer__logos">
          <img src="" alt="IATA" />
          <img src="" alt="KP" />
          <img src="" alt="TURSAB" />
        </div>
      </div>
    </footer>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  
  export default defineComponent({
    name: "Footer",
  });
  </script>
  
  <style lang="scss" scoped>
  .footer {
  background-color: #f8f9fb;
  padding: 40px 20px;
  color: #9399a8;
  font-family: Mulish, sans-serif;
  width: 1128px;
  margin: 0 auto;

  &__container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
    max-width: 1128px;
    margin: 0 auto;
  }
  
    &__section {
      flex: 1;
      min-width: 200px;
  
      & .footer__logo {
        width: 150px;
        margin-bottom: 15px;
      }
  
      & .footer__description {
        font-size: 14px;
        margin-bottom: 15px;
      }
  
      & .footer__apps img {
        width: 100px;
        margin-right: 10px;
      }
    }
  
    &__title {
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 10px;
    }
  
    &__list {
      list-style: none;
      padding: 0;
  
      & .footer__link {
        display: block;
        color: #0066cc;
        text-decoration: none;
        font-size: 14px;
        margin-bottom: 8px;
  
        &:hover {
          text-decoration: underline;
        }
      }
    }
  
    &__contact {
      font-size: 14px;
      margin-bottom: 8px;
    }
  
    &__socials {
      display: flex;
      gap: 10px;
  
      & .footer__social-link {
        color: #0066cc;
        font-size: 14px;
        text-decoration: none;
  
        &:hover {
          text-decoration: underline;
        }
      }
    }
  
    &__bottom {
      border-top: 1px solid #e0e0e0;
      margin-top: 20px;
      padding-top: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
  
      &__logos img {
        width: 50px;
        margin-right: 10px;
      }
    }
  }
  </style>
  