<template>
  <footer class="footer" style="margin-top: 60px; margin-bottom: 43px;">
    <div class="footer__container">
      <div class="footer__section">
        <img
          src="/src/assets/images/EasyBooking_logo.svg"
          alt="Easy Booking"
          class="footer__logo"
        />
        <p class="footer__description">
          Ваш проводник в мир ярких путешествий <br />
          и комфортных поездок
        </p>
        <div class="footer__apps">
          <button class="download">
            <img src="/src/assets/icons/apple.svg" alt="" />
            <div>
              <span style="color: #9399a8; font-size: 9px">Доступно в</span>
              <span style="font-size: 12px">App store</span>
            </div>
          </button>
          <button class="download">
            <img src="/src/assets/icons/GooglePlay.svg" alt="" />
            <div>
              <span style="color: #9399a8; font-size: 9px">Доступно в</span>
              <span style="font-size: 12px">Google Play</span>
            </div>
          </button>
          <button class="download">
            <img src="/src/assets/icons/huawei.svg" alt="" />
            <div>
              <span style="color: #9399a8; font-size: 9px">Доступно в</span>
              <span style="font-size: 12px">App Gallery</span>
            </div>
          </button>
        </div>
      </div>

      <div class="footer__section">
        <h3 class="footer__title">Компания</h3>
        <ul class="footer__list">
          <li><a href="#" class="footer__link">О компании</a></li>
          <li><a href="#" class="footer__link">Сотрудничество</a></li>
          <li><a href="#" class="footer__link">Партнёрам</a></li>
        </ul>
      </div>

      <div class="footer__section">
        <h3 class="footer__title">Информация</h3>
        <ul class="footer__list">
          <li><a href="#" class="footer__link">Публичная оферта</a></li>
          <li><a href="#" class="footer__link">Справочный центр</a></li>
        </ul>
      </div>

      <div class="footer__section">
        <h3 class="footer__title">Контакты</h3>
        <address class="footer__contact">
          <a href="mailto:support@easybooking.uz" class="footer__contact"
            >support@easybooking.uz</a
          >
        </address>
        <p class="footer__contact">
          <a href="tel:+998662304400" class="footer__contact"
            >+998 66 230 44 00</a
          >
        </p>
        <p class="footer__contact">
          <a href="tel:+998712030011" class="footer__contact"
            >+998 71 203 00 11</a
          >
        </p>

        <div class="footer__socials">
          <a href="#" class="footer__social-link"
            ><img src="/src/assets/icons/telegram_icon.svg" alt=""
          /></a>
          <a href="#" class="footer__social-link"
            ><img src="/src/assets/icons/instagram_icon.svg" alt=""
          /></a>
          <a href="#" class="footer__social-link"
            ><img src="/src/assets/icons/facebook_icon.svg" alt=""
          /></a>
        </div>
      </div>
    </div>
    <div class="footer__bottom">
      <p>© Easybooking.uz | All rights reserved</p>
      <div class="footer__logos">
        <img src="/src/assets/icons/Iata.svg" alt="IATA" />
        <img src="/src/assets/icons/kp.svg" alt="KP" />
        <img src="/src/assets/icons/kp.svg" alt="TURSAB" />
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

<style lang="scss" scoped></style>
