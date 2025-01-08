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

        <!-- Модальное окно -->
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
              src="/src/assets/images/russFlag_icon.svg"
              alt="Russian Flag"
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
        flag: "/src/assets/images/russFlag_icon.svg",
      },
      {
        code: "UZB",
        name: "O'zbekcha",
        flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG5SURBVHgBnVQxSyNBFP7ezF7wGokc1xwIue6623R3zZG0VyXHlQenpYWdjb/CQsRS/QOuFtaJhRCwSEpBxEUE2wgGJTszz/c2iZggqPvBsDNv5vvmmzf7hvASNpMaCP8RWL+VcbQHoh7YH2L178EshaZG20kFjndgqAZjZdZIGy9hlhYA5yXGKSzVsdJMJ1Qz6fw+OolFpFv9vFBDVMJI6Nk+2tdYKZ+TDdHFVhJPOxIn82S7dzDlkjV4CIxXoQ6zrI8IVXWWO/rI1Pr15VPZyq7xwjzeBHVoTTlPhQ7j9Y3G3P0woShCEbB3iC/P63R7cbETMS9Za1EEzjl4Y3YxGAy63nsuihACi8al5ig2xqAoaHSzleIKM1ChVOyhKMbcXjS8uTmWo1aigrcm+YWT0qG1f3Ht7JttmQ/FTumzgIc528wztbj/o0WR1Jeld4mwZ5Dj9OpP52tuQ/jLcKGP96RKKoSEYwh1HeZCabOTGgp1ZL4P/3qdqRMMfV85yn0SGomd9gxRVWon5aFY08Vh2oHGOJOO47auVc5k+sWkLCY/G1LdDQJ9F+rkqUjl32uL9t51s9Oe5TwC9JXxyFex1b4AAAAASUVORK5CYII=",
      },
      {
        code: "ENG",
        name: "English",
        flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALbSURBVHgBpVRLSFRRGP7uuefeGSWvUouctBkNLSksI2xMDBGsTRa1UUoraCGku9wJbVoIQW2CDFok9jCyIovahFRm5qiIQgniCx2hhYmPsWbua87t3BuOjg618IMD53999/yP+wMJsLv4euHE6OS93iPlgU/b84zPO/KifSWnP4x/H7+9/2STP1EMjZN8jR6I+sOwKpZLUjLSUhSoRHRMbkkqcyWllM3Na9eQ3RBAMq3CyM3gaihZvaQdaCyAaHwFkcsFIkOiEgRBwJqjAJFyUuIGRFcRIqzbiVlPtLCw4O1ur+2oqy7JSktJxv8gUxn1NSXenpe1HcFgcFcsNcbYs705Ht/dGz5cOHMId1p6ExKIREBRfgYa60tRWJAJFjV9Kysrrdx0QpidnfUrihLgJxagqiZEZmKqogaRb6OOLjk/D1lvH4MRCrd7rbScCLquH6WSZVUlUQpL12NGF0/YMs241zAWBeXkAiVxvjIhiOj6FSHA25pKpTKyrrA2LB6oTQXBItrfYrpdcOdmb0rXsiwshkJ9Qtf2fVGFUIItIMSLxQkEhi1CgEWonJU56FYUvz0nG6FOTIOpqnMnSS64sn0QSPzjGSxoptFF97x7NJSaovhlSYpzsAs6VnER6siYI7tzspHzphWCLMf5GaaBpcXFIcLzajEsxh2k2NGYgCj/NTZ+3dbZtvW+Ku+uRWk78Xg8/ZqmdfJZQDTK0DsYRGXdUz7t4U2p/pz/hUsNL9AzMOPIdoxhGIH09PQ+Z7LC4fDlufnfPc1PhrPuPx+Csk3mc2MhET72T+N97ySqT+Xj6vmDMxme1Cpb7xB5vd4faQWN55ZCxmsIkpePGf6F5VAYzW1fZtpe9Z1dGmlyNkCsCEvDTcNcPA6mBSymw7Rzt6y47tg6brc70QkjUsxJhlft8ftoytkvx3bmNvm1yEplyDQOq8wstWdNXQ4NSlp4iIrkAaZuDWx85R+OLTKc21+ZcgAAAABJRU5ErkJggg==",
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
        closeModal();
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
      closeModal,
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

<style lang="scss" scoped>
.language-selector {
  margin-right: 30px;
  position: relative;

  .header__nav-button {
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
    width: 210px;
    z-index: 1000;

    .toogle_box {
      display: flex;
      gap: 2px;
      align-items: center;
      justify-content: center;
      text-align: center;
      .toogle_btn {
        // padding: 5px;
        width: 90px;
        height: 35px;
        border-radius: 10px;
        font-weight: 500;
        background-color: #fff;
        color: #9399a8;
        // color: #80dbeb;
        // background-color:#80dbeb1d;
        border: none;
        &.active {
          background-color: #80dbeb1d;
          color: #80dbeb;
          border: none;
          border-radius: 8px;
        }
      }
    }
    span {
      color: #9399a8;
      font-family: Mulish, sans-serif;
      font-size: 14px;
    }

    .dropdown-item {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px;
      cursor: pointer;
      transition: background-color 0.2s;

      &.active {
        background-color: #80dbeb1d;
        color: #80dbeb;
        border: none;
        border-radius: 8px;
      }

      &:hover {
        background-color: #80dbeb1d;
        border-radius: 12px;
      }

      .flag-icon {
        width: 20px;
        height: 14px;
      }

      input[type="radio"] {
        appearance: none;
        width: 20px;
        height: 20px;
        margin-right: 10px;
        border: 2px solid #ccc;
        border-radius: 50%;
        background-color: white;
        position: relative;
        outline: none;
        margin-left: auto;
        cursor: pointer;

        &::before {
          content: "";
          display: block;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: transparent;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          transition: background-color 0.2s, transform 0.2s;
        }

        &:checked {
          border: 1.5px solid #80dbeb;
          border-color: #80dbeb;
          background-color: #80dbeb1d;

          &::before {
            background-color: #80dbeb;
            transform: translate(-50%, -50%) scale(1);
          }
        }
      }
    }
  }
}
</style>
