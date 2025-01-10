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
          <button
            class="header__nav-button header__nav-button--language"
            @click="toggleDropdown"
          >
            <img
              :src="selectedLanguage.flag"
              :alt="selectedLanguage.name + ' Flag'"
              class="flag-icon"
            />
            <span>{{ selectedLanguage.code }}</span>
            <i class="fas fa-chevron-down"></i>
          </button>
          <div v-if="isDropdownOpen" class="dropdown-menu">
            <div class="toogle_box" style="margin-bottom: 10px">
              <button
                class="toogle_btn"
                @click="currentSection = 'language'"
                :class="{ active: currentSection === 'language' }"
              >
                Язык
              </button>
              <button
                class="toogle_btn"
                @click="currentSection = 'currency'"
                :class="{ active: currentSection === 'currency' }"
              >
                Валюта
              </button>
            </div>

            <div v-if="currentSection === 'language'">
              <div
                v-for="language in languages"
                :key="language.code"
                class="dropdown-item"
                :class="{ active: selectedLanguage.code === language.code }"
                @click="selectLanguage(language)"
              >
                <img
                  :src="language.flag"
                  :alt="`${language.name} Flag`"
                  class="flag-icon"
                />
                <span>{{ language.name }}</span>
                <input
                  type="radio"
                  :checked="selectedLanguage.code === language.code"
                  :name="'language'"
                />
              </div>
            </div>

            <div v-if="currentSection === 'currency'">
              <div
                v-for="currency in currencies"
                :key="currency.code"
                class="dropdown-item"
                :class="{ active: selectedCurrency.code === currency.code }"
                @click="selectCurrency(currency)"
              >
                <span>{{ currency.name }}</span>
                <input
                  type="radio"
                  :checked="selectedCurrency.code === currency.code"
                  :name="'currency'"
                />
              </div>
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

        <button class="header__nav-button account-button" @click="toggleRegisterModal">
          <img src="/src/assets/images/acc_img.svg" alt="Account" />
        </button>
      </nav>
    </div>
    
    <RegistrModal 
      v-if="isRegisterModalVisible" 
      @close="toggleRegisterModal" 
      class="register-modal"
    />
  </header>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from "vue";
import RegistrModal from "./Registr/RegistrModal.vue";
import "@fortawesome/fontawesome-free/css/all.css";

export default defineComponent({
  name: "HeroSection",
  components: {
    RegistrModal,
  },
  setup() {
    const hasNotifications = ref(true);
    const notificationCount = ref(32);
    const isModalVisible = ref(false);
    const isRegisterModalVisible = ref(false);

    const toggleModal = () => {
      isModalVisible.value = !isModalVisible.value;
    };

    const toggleRegisterModal = () => {
      isRegisterModalVisible.value = !isRegisterModalVisible.value;
    };

    const isDropdownOpen = ref(false);
    const currentSection = ref("language");
    const selectedLanguage = ref({
      code: "RUS",
      name: "Русский",
      flag: "/src/assets/images/russFlag_icon.svg",
    });
    const selectedCurrency = ref({
      code: "UZS",
      name: "UZS",
    });

    const languages = ref([
      {
        code: "RUS",
        name: "Русский",
        flag: "data:image/png;base64,...",
      },
      {
        code: "UZB",
        name: "O'zbekcha",
        flag: "data:image/png;base64,...",
      },
      {
        code: "ENG",
        name: "English",
        flag: "data:image/png;base64,...",
      },
    ]);

    const currencies = ref([
      { code: "UZS", name: "UZS" },
      { code: "USD", name: "USD" },
      { code: "RUB", name: "RUB" },
      { code: "EUR", name: "EUR" },
      { code: "KZT", name: "KZT" },
      { code: "KGS", name: "KGS" },
      { code: "TRY", name: "TRY" },
      { code: "AZN", name: "AZN" },
    ]);

    const toggleDropdown = () => {
      isDropdownOpen.value = !isDropdownOpen.value;
    };

    const closeDropdown = () => {
      isDropdownOpen.value = false;
    };

    const selectLanguage = (language: {
      code: string;
      name: string;
      flag: string;
    }) => {
      selectedLanguage.value = language;
      closeDropdown();
    };

    const selectCurrency = (currency: { code: string; name: string }) => {
      selectedCurrency.value = currency;
      closeDropdown();
    };

    const handleWindowClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (
        !target.closest(".tel_modal-container") &&
        !target.closest(".header__nav-phone") &&
        isModalVisible.value
      ) {
        toggleModal();
      }

      if (
        !target.closest(".dropdown-menu") &&
        !target.closest(".header__nav-button--language") &&
        isDropdownOpen.value
      ) {
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
      isRegisterModalVisible,
      toggleRegisterModal,
      isDropdownOpen,
      currentSection,
      selectedLanguage,
      selectedCurrency,
      languages,
      currencies,
      toggleDropdown,
      closeDropdown,
      selectLanguage,
      selectCurrency,
    };
  },
});
</script>

<style scoped>
.account-button {
  background: none;
  border: none;
  cursor: pointer;
}

.register-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}
</style>
