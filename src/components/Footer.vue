<template>
  <footer class="footer" style="margin-top: 60px; margin-bottom: 43px">
    <div class="footer__container">
      <!-- Логотип и описание -->
      <div class="footer__section">
        <img
          src="/src/assets/images/EasyBooking_logo.svg"
          alt="Easy Booking"
          class="footer__logo"
        />
        <p class="footer__description">
          Ваш проводник в мир ярких путешествий <br> и комфортных поездок
        </p>
        <div class="footer__apps">
          <button class="download">
            <img src="/src/assets/icons/apple.svg" alt="" />
            <div>
              <span style="color: #9399A8;">Доступно в</span>
              <span style="font-size: 13px;">App store</span>
            </div>
          </button>
          <button class="download">
            <img src="/src/assets/icons/GooglePlay.svg" alt="" />
            <div>
              <span style="color: #9399A8;">Доступно в</span>
              <span style="font-size: 13px;">Google Play</span>
            </div>
          </button>
          <button class="download">
            <img src="/src/assets/icons/huawei.svg" alt="" />
            <div>
              <span style="color: #9399A8;">Доступно в</span>
              <span style="font-size: 13px;">App Gallery</span>
            </div>
          </button>
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

<style lang="scss" scoped>
.footer {
  background-color: #f8f9fb;
  padding: 40px 20px;
  color: #9399a8;
  font-family: Mulish, sans-serif;
  width: 1128px;
  margin: 0 auto;
  border-radius: 24px;

  &__container {
    display: flex;
    flex-wrap: wrap;
    max-width: 1128px;
    margin: 0 auto;
  }

  &__section {
    flex: 0;
    min-width: 200px;
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 20px 20px 25px;
    

    & .footer__logo {
      width: 150px;
      margin-bottom: 15px;
    }

    & .footer__description {
      font-size: 14px;
      display: flex;
      white-space: nowrap;
      margin-bottom: 15px;
    }

    & .footer__apps {
      display: flex;
      justify-content: space-between; 
      width: 335px; 
      gap: 10px;

      

      .download {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 110px;
        height: auto;
        border: none;
        background-color: #ffffff;
        padding: 7px 15px;
        border-radius: 4px;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
        cursor: pointer;
        transition: all 0.2s;
        img {
            width: 20px;
          height: 25px;
          margin-right: 10px;
        }

        
        div {
          display: flex;
          flex-direction: column;
          gap: 2px;
          align-items: start;
          text-align: left;

          span {
            font-size: 10px;
            color: #9399a8;
            white-space: nowrap;
          }

          span:last-child {
            font-size: 13px;
            color: black;
          }
        }
      }
    }
  }
  &__title {
    font-size: 16px;
    font-weight: bold;
    color: black;
    margin-bottom: 10px;
  }

  &__list {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 16px;

    & .footer__link {
      display: block;
      color: #00b8d7;
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

    order: 3;

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
    margin-top: 40px;
    border-top: 1px solid #e0e0e0;
    width: 1080px;
    padding: 30px 10px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    &__logos  {
        width: 50px;
        margin-right: 10px;
    }
    
    .footer__logos {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        gap: 18px;

    }
  }

}
.footer__section {
&:nth-child(2) { 
  margin-left: 270px;

}
}


</style>
