<template>
  <header class="header">
    <div class="header__container">
      <div class="header__logo">
        <img
          src="/src/assets/images/EasyBooking_logo.svg"
          alt="EasyBooking Logo"
        />
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
          <img
            src="/src/assets/images/russFlag_icon.svg"
            alt="Russian Flag"
            class="flag-icon"
          />
          <span>RUS</span>
          <i class="fas fa-chevron-down"></i>
        </button>

        <button class="header__nav-button header__nav-button--notification">
          <i class="header__nav-button--notification__icon fas fa-bell"></i>
          <span
            class="header__nav-button--notification__badge"
            v-if="hasNotifications"
          >
            {{ notificationCount }}
          </span>
        </button>

        <button class="accountButton">
          <img src="/src/assets/images/notification_icon.svg" alt="" />
        </button>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "@fortawesome/fontawesome-free/css/all.css";

export default defineComponent({
  name: "NotificationButton",
  data() {
    return {
      hasNotifications: true,
      notificationCount: 32,
    };
  },
});
</script>

<style lang="scss" scoped></style>
