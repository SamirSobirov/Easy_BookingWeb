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
        <button class="tab active">
          <img src="/src/assets/icons/plane_icon.svg" alt="plane" />
          Перелеты
        </button>
        <button class="tab">
          <img src="/src/assets/icons/hotel_icon.svg" alt="hotels" />
          Отели
        </button>
        <button class="tab">
          <img src="/src/assets/icons/train_icon.svg" alt="train" />
          Ж/Д
        </button>
        <button class="tab">
          <img src="/src/assets/icons/transport.svg" alt="transport" />
          Трансферы
        </button>
        <button class="tab">
          <img src="/src/assets/icons/tours_icon.svg" alt="tours" />
          Туры
        </button>
        <button class="tab">
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
            <!-- Adults -->
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
                <button @click="increment('adults')" type="button">+</button>
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
                <button @click="increment('children')" type="button">+</button>
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
                <button @click="increment('infants')" type="button">+</button>
              </div>
            </div>

            <hr style="margin-top: 10px; height: 0.2px" />

            <div class="dropdown-item class-selection">
              <div class="radio-group">
                <label>
                  <input
                    type="radio"
                    value="economy"
                    v-model="travelClass"
                    style="color: #80dbeb"
                  />
                  Эконом-класс
                </label>
                <!-- <label>
                  <input type="radio" value="first" v-model="travelClass" />
                  Первый класс
                </label> -->
                <label>
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
import { ref, reactive, computed, onBeforeUnmount } from "vue";

const isDropdownOpen = ref(false);
const isSwitched = ref(false);

const passengerCount = reactive({
  adults: 1,
  children: 0,
  infants: 0,
});

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
  passengerCount[type]++;
};

const decrement = (type: "adults" | "children" | "infants") => {
  if (passengerCount[type] > 0) passengerCount[type]--;
};

const selectedText = computed(() => {
  const adultsText = `${passengerCount.adults + passengerCount.children + passengerCount.infants} пассажир${passengerCount.adults > 1 ? "а" : ""}`;
 
  return `${adultsText}`;
});
</script>

<style lang="scss" scoped>
.dropdown {
  position: relative;
  display: inline-block;

  .dropdown-button {
    background-color: #ffffff;
    color: #666;
    padding: 5px 10px;
    width: 182px;
    height: 50px;
    border: none;
    font-size: 15px;
    font-weight: 500;
    text-align: left;
    border-radius: 12px;
    cursor: pointer;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:hover {
      box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
    }

    &:after {
      content: "▼";
      font-size: 12px;
      color: #aaa;
    }
  }

  .dropdown-menu {
    position: absolute;
    top: 110%;
    z-index: 10;
    left: 0;
    background: white;
    border: 1px solid #ccc;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    width: 250px;
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;

    .dropdown-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #666;
      font-size: 14px;
      gap: 10px;

      &.class-selection {
        margin-top: 10px;
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 10px;

        .radio-group {
          display: flex;
          flex-direction: column;
          gap: 13px;

          label {
            display: flex;
            align-items: center;
            cursor: pointer;
            color: #555;
            font-size: 15px;
            color: black;
            font-family: sans-serif;
            gap: 10px;

            &:hover {
              color: #80dbeb;
            }

            // // input[type="radio"] {
            // //   margin-right: 10px;
            // //   cursor: pointer;
            // //   width: 20px;
            // //   height: 20px;
            // //   // appearance: none;
            // //   border: 2px solid #ccc;
            // //   border-radius: 50%;
            // //   outline: none;
            // //   background-color: white;
            // //   transition: background-color 0.2s, border-color 0.2s;

            // //   &:hover {
            // //     color: #80dbeb;
            // //     border-color: #80dbeb;
            // //     background-color: #80dbeb;
            // //   }

              
            // }
          }
        }
      }

      .controls {
        display: flex;
        align-items: center;

        button {
          background: rgba(0, 255, 255, 0.126);
          border: none;
          border-radius: 50%;
          width: 25px;
          height: 25px;
          text-align: center;
          cursor: pointer;
          margin: 0 5px;
          font-weight: bold;
          color: black;

          &:disabled {
            background-color: #cccccc72;
            opacity: 0.5;
            cursor: not-allowed;
          }

          &:hover:not(:disabled) {
            background-color: #00bcd4;
            color: white;
          }
        }

        span {
          min-width: 20px;
          text-align: center;
          font-weight: bold;
          font-size: 14px;
          color: #333;
        }
      }
    }
  }
}
</style>
