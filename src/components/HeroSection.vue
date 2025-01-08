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

        <div class="tel_modal-container">
          <div :class="['modal', { visible: isModalVisible }]">
            <div class="modal-content">
              <p>
                Для связи с нами позвоните по <br />
                короткому номеру <a href="">1240</a>
              </p>
            </div>
          </div>
        </div>

        <div class="language-selector">
    <!-- Кнопка для открытия окна -->
    <button
      class="header__nav-button header__nav-button--language"
      @click="toggleDropdown"
    >
      <img
        src="/src/assets/images/russFlag_icon.svg"
        alt="Russian Flag"
        class="flag-icon"
      />
      <span>{{ selectedLanguage.code }}</span>
      <i class="fas fa-chevron-down"></i>
    </button>

    <!-- Выпадающее окно -->
    <div v-if="isDropdownOpen" class="dropdown-menu">
      <div
        v-for="language in languages"
        :key="language.code"
        class="dropdown-item"
        @click="selectLanguage(language)"
      >
        <img :src="language.flag" :alt="`${language.name} Flag`" class="flag-icon" />
        <span>{{ language.name }}</span>
        <input
          type="radio"
          :checked="selectedLanguage.code === language.code"
          :name="'language'"
        />
      </div>
    </div>
  </div>

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

    const isDropdownOpen = ref(false);
    const selectedLanguage = ref({
      code: "RUS",
      name: "Русский",
      flag: "/src/assets/images/russFlag_icon.svg",
    });

    const languages = ref([
      {
        code: "RUS",
        name: "Русский",
        flag: "/src/assets/images/russFlag_icon.svg",
      },
      {
        code: "UZB",
        name: "O'zbekcha",
        flag: "/src/assets/images/uzbFlag_icon.svg",
      },
      {
        code: "ENG",
        name: "English",
        flag: "/src/assets/images/engFlag_icon.svg",
      },
    ]);

    const toggleDropdown = () => {
      isDropdownOpen.value = !isDropdownOpen.value;
    };

    const closeDropdown = () => {
      isDropdownOpen.value = false;
    };

    const selectLanguage = (language: { code: string; name: string; flag: string }) => {
      selectedLanguage.value = language;
      closeDropdown();
    };

    const handleWindowClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (!target.closest(".modal") && !target.closest(".header__nav-phone")) {
        closeModal();
      }

      if (!target.closest(".dropdown-menu") && !target.closest(".header__nav-button--language")) {
        closeDropdown();
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

      isDropdownOpen,
      selectedLanguage,
      languages,
      toggleDropdown,
      closeDropdown,
      selectLanguage,
    };
  },
});
</script>



<style lang="scss" scoped>
.language-selector {
  position: relative;

  .header__nav-button {
    display: flex;
    align-items: center;
    gap: 8px;
    background-color: white;
    border: none;
    border-radius: 8px;
    padding: 8px 12px;
    cursor: pointer;
    font-family: "Mulish", sans-serif;

    .flag-icon {
      width: 25px;
      height: 20px;
    }
  }

  .dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    margin-top: 18px;
    background: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 10px;
    width: 250px;
    z-index: 1000;

    .dropdown-item {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px;
      cursor: pointer;
      transition: background-color 0.2s;

      &:hover {
        background-color: #f0f0f0;
      }

      .flag-icon {
        width: 20px;
        height: 14px;
      }

      input[type="radio"] {
        margin-left: auto;
        accent-color: #007bff;
      }
    }
  }
}

</style>
