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

        <button @click="toggleModal" class="header__nav-phone">
          <i class="fas fa-phone-alt"></i>
          <span>1240</span>
        </button>

        <div v-if="isModalVisible" class="modal">
          <div class="modal-content">
            <p>
              Для связи с нами позвоните по <br />
              короткому номеру <a href="">1240</a>
            </p>
          </div>
        </div>

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
import { defineComponent, ref, onMounted, onUnmounted } from "vue";
import "@fortawesome/fontawesome-free/css/all.css";

export default defineComponent({
  name: "HeroSection",
  setup() {
    const hasNotifications = ref(true);
    const notificationCount = ref(32);

    const isModalVisible = ref(false);

    const toggleModal = () => {
      isModalVisible.value = !isModalVisible.value;
    };

    const closeModal = () => {
      isModalVisible.value = false;
    };

    const handleWindowClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (!target.closest(".modal") && !target.closest(".header__nav-phone")) {
        closeModal();
      }
    };

    onMounted(() => {
      window.addEventListener("click", handleWindowClick);
    });

    onUnmounted(() => {
      window.removeEventListener("click", handleWindowClick);
    });

    return {
      hasNotifications,
      notificationCount,
      isModalVisible,
      toggleModal,
      closeModal,
    };
  },
});
</script>

<style lang="scss" scoped>
.header__nav-phone {
  display: flex;
  gap: 6px;
  padding: 8px;
  border-radius: 8px;
  background-color: #ffffff;
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
    background-color: #e4e4e457;
    color: #00b8d7;
  }

  i {
    margin-right: 5px;
  }
}

.modal {
  position: fixed;
  top: 100px;
  // bottom: 80%;
  left: 70%;
  transform: translateX(-50%);
  background-color: #ffffff85;
  border-radius: 15px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 10px;
  z-index: 1000;
  animation: slide-up 0.3s ease-in-out;

  &-content {
    align-items: center;
    justify-content: center;
    width: 260px;
    height: 60px;
    border-radius: 15px;
    border: 2px solid white;
    background-color: #ffff;
    padding: 10px 15px;
    font-weight: thin;
    font-size: 16px;
    text-align: left;
    word-spacing: 2px;
    font-family: Mulish;

    a {
      text-decoration: none;
      color: black;
      font-weight: 600;
    }
  }
}

@keyframes slide-up {
  from {
    transform: translateX(-50%) translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateX(-50%) translateY(0);
    opacity: 1;
  }
}
</style>
