<template>
  <header>
    <div class="Header">
      <div class="logo">
        <img src="/src/assets/EasyBooking_logo.svg" alt="EasyBooking Logo" />
      </div>
      <nav class="nav-links">
        <a href="#">Агентствам</a>
        <a href="#">Корпоративным клиентам</a>
        <a href="#">О нас</a>

        <button class="btn_tel">
          <i class="fas fa-phone-alt"></i>
          <span>1240</span>
        </button>

        <button class="btn_lang">
          <span>RUS</span>
        </button>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "@fortawesome/fontawesome-free/css/all.css";

export default defineComponent({
  name: "PhoneButton",
});
</script>

<style lang="scss" scoped>
header {
  width: 90%;
  margin: 24px auto;
  padding: 10px;
  background-color: #ffffff;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.Header {
  width: 100%;
  height: 52px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: inherit;
}

.logo img {
  width: 100px;
  height: auto;
}

.nav-links {
  display: flex;
  gap: 30px;
  white-space: nowrap;

  .btn_tel {
    display: flex;
    gap: 6px;
    padding: 8px 8px;
    border-radius: 8px;
    background-color: #e7f2fc;
    color: #6d7586;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.3s;
    border: none;

    .fas {
      rotate: 90deg;
    }
  }

  :hover {
    color: #007bff;
  }
}

.nav-links a {
  padding-top: 5px;
  font-size: 16px;
  text-decoration: none;
  color: #9399a8;
  font-weight: 500;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: #007bff;
}
</style>
