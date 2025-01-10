<template>
  <section class="hero-section">
    <div class="hero-content">
      <img
        src="/src/assets/images/Hero.svg"
        alt="Hero Image"
        class="hero-image"
      />
      <div class="text-content">
        <h1 class="hero-title">Путешествуй с нами и ощути магию мира</h1>
        <p class="hero-subtitle">Простое бронирование — лёгкая экономия</p>
      </div>
    </div>

    <div class="search-box">
      <nav class="tabs">
        <button class="tab active" data-tab="flights">
          <img src="/src/assets/icons/plane_icon.svg" alt="plane" />
          Перелеты
        </button>
        <button class="tab" data-tab="hotels">
          <img src="/src/assets/icons/hotel_icon.svg" alt="hotels" />
          Отели
        </button>
        <button class="tab" data-tab="train">
          <img src="/src/assets/icons/train_icon.svg" alt="train" />
          Ж/Д
        </button>
        <button class="tab" data-tab="transfers">
          <img src="/src/assets/icons/transport.svg" alt="transport" />
          Трансферы
        </button>
        <button class="tab" data-tab="tours">
          <img src="/src/assets/icons/tours_icon.svg" alt="tours" />
          Туры
        </button>
        <button class="tab" data-tab="insurance">
          <img src="/src/assets/icons/insurance_icon.svg" alt="insurance" />
          Страхование
        </button>
      </nav>

      <form class="search-form">
        <input type="text" placeholder="Откуда" class="input" />
        <img src="/src/assets/icons/Swap_inputs.svg" alt="" />
        <input type="text" placeholder="Куда" class="input" />
        <input
          type="text"
          class="input_date"
          placeholder="Когда"
          onfocus="(this.type='date')"
          onblur="(this.type='text')"
        />
        <input
          type="text"
          class="input_date"
          placeholder="Обратно"
          onfocus="(this.type='date')"
          onblur="(this.type='text')"
        />

        <div class="dropdown">
          <button class="dropdown-button" @click="toggleDropdown" type="button">
            {{ selectedText }}
          </button>
          <div v-if="isDropdownOpen" class="dropdown-menu">
            <div class="dropdown-item">
              <span>Взрослые</span>
              <div class="controls">
                <button
                  @click="decrement('adults')"
                  :disabled="passengerCount.adults <= 1"
                  type="button"
                >
                  -
                </button>
                <span>{{ passengerCount.adults }}</span>
                <button
                  @click="increment('adults')"
                  :disabled="totalPassengers >= maxPassengers"
                  type="button"
                >
                  +
                </button>
              </div>
            </div>

            <div class="dropdown-item">
              <span>Дети</span>
              <div class="controls">
                <button
                  @click="decrement('children')"
                  :disabled="passengerCount.children <= 0"
                  type="button"
                >
                  -
                </button>
                <span>{{ passengerCount.children }}</span>
                <button
                  @click="increment('children')"
                  :disabled="totalPassengers >= maxPassengers"
                  type="button"
                >
                  +
                </button>
              </div>
            </div>

            <div class="dropdown-item">
              <span>Младенцы</span>
              <div class="controls">
                <button
                  @click="decrement('infants')"
                  :disabled="passengerCount.infants <= 0"
                  type="button"
                >
                  -
                </button>
                <span>{{ passengerCount.infants }}</span>
                <button
                  @click="increment('infants')"
                  :disabled="totalPassengers >= maxPassengers"
                  type="button"
                >
                  +
                </button>
              </div>
            </div>
            <hr style="margin-top: 10px; height: 0.2px" />

            <div class="dropdown-item class-selection">
              <div class="radio-group">
                <label class="radio-wrapper">
                  <input type="radio" value="economy" v-model="travelClass" />
                  Эконом-класс
                </label>

                <label class="radio-wrapper">
                  <input type="radio" value="business" v-model="travelClass" />
                  Бизнес-класс
                </label>
              </div>
            </div>
          </div>
        </div>

        <button type="submit" class="search-button">
          <img src="/src/assets/icons/search_icon.svg" alt="" />
          Поиск
        </button>
      </form>

      <div class="searchFooter">
        <button class="accommodation_button">
          <img src="/src/assets/icons/accommodation_icon.svg" alt="" />
          <p>Сложный маршрут</p>
        </button>

        <div class="switch-container">
          <label class="switch">
            <input type="checkbox" v-model="isSwitched" />
            <span class="slider"></span>
          </label>
          <button class="switch-btn">± 1 день</button>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { ref, reactive, computed, onBeforeUnmount, onMounted } from "vue";

const isDropdownOpen = ref(false);
const isSwitched = ref(false);

const passengerCount = reactive({
  adults: 1,
  children: 0,
  infants: 0,
});

const maxPassengers = 9;

const travelClass = ref("economy");

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;

  if (isDropdownOpen.value) {
    window.addEventListener("click", handleOutsideClick);
  }
};

const handleOutsideClick = (event: MouseEvent) => {
  const dropdown = document.querySelector(".dropdown");
  if (!dropdown || !dropdown.contains(event.target as Node)) {
    isDropdownOpen.value = false;
    window.removeEventListener("click", handleOutsideClick);
  }
};

onBeforeUnmount(() => {
  window.removeEventListener("click", handleOutsideClick);
});

const increment = (type: "adults" | "children" | "infants") => {
  if (totalPassengers.value < maxPassengers) {
    passengerCount[type]++;
  }
};

const decrement = (type: "adults" | "children" | "infants") => {
  if (passengerCount[type] > 0) passengerCount[type]--;
};

const totalPassengers = computed(() => {
  return (
    passengerCount.adults + passengerCount.children + passengerCount.infants
  );
});

const selectedText = computed(() => {
  const passengerWord =
    totalPassengers.value === 1
      ? "пассажир"
      : totalPassengers.value <= 4
      ? "пассажира"
      : "пассажиров";

  return `${totalPassengers.value} ${passengerWord}`;
});

onMounted(() => {
  const tabs = document.querySelectorAll(".tab");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((item) => item.classList.remove("active"));

      tab.classList.add("active");
    });
  });
});
</script>

<style lang="scss" scoped></style>
