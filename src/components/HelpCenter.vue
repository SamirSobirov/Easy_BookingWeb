<template>
  <div class="HelpCenter_box">
    <div class="HelpCenter__header">
      <h1>Найти ответ в справочном центре</h1>

      <div class="container">
        <div class="box">
          <div class="box_main">
            <img
              class="img"
              src="/src/assets/images/personImg_help.svg"
              alt=""
            />

            <div class="help-center">
    <div 
      class="accordion-item" 
      v-for="(item, index) in accordionItems" 
      :key="index"
    >
      <button 
        class="accordion-header" 
        @click="toggle(index)" 
        :aria-expanded="isActive(index)"
        :aria-controls="`content-${index}`"
        :id="`header-${index}`"
      >
        <span>{{ item.question }}</span>
        <img 
          :src="isActive(index) ? '/src/assets/icons/minus.svg' : '/src/assets/icons/add.svg'" 
          alt="Toggle"
          class="accordion-icon"
        />
      </button>
      <div 
        class="accordion-content" 
        :id="`content-${index}`" 
        role="region" 
        :aria-labelledby="`header-${index}`"
        :class="{ active: isActive(index) }"
      >
        <p>{{ item.answer }}</p>
      </div>
    </div>
    <button class="accordion-button" @click="learnMore">Узнать больше</button>
  </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

interface AccordionItem {
  question: string;
  answer: string;
}

export default defineComponent({
  name: "HelpCenter",
  setup() {
    // Список элементов аккордеона
    const accordionItems = ref<AccordionItem[]>([
      {
        question: "Можно ли взять чемодан в самолет?",
        answer: "Да, обычно пассажиры могут взять чемодан в салон самолета как ручную кладь. Однако существуют ограничения по размерам и весу ручной клади, которые зависят от авиакомпании и класса обслуживания.",
      },
      {
        question: "Есть ли скидки на билеты для детей?",
        answer: "Да, многие авиакомпании предлагают скидки на билеты для детей. Условия и размер скидки могут различаться в зависимости от перевозчика.",
      },
      {
        question: "Какие аэропорты России закрыты сейчас?",
        answer: "На данный момент закрыты следующие аэропорты: ...",
      },
      {
        question: "Как купить билет для багажа на кресле?",
        answer: "Для покупки билета на дополнительный багаж перейдите в раздел 'Багаж' на нашем сайте и следуйте инструкциям.",
      },
      {
        question: "Как я могу оплатить билет на сайте?",
        answer: "Вы можете оплатить билет с помощью кредитной карты, электронных кошельков или банковского перевода.",
      },
      {
        question: "Можно ли взять чемодан в самолет?",
        answer: "Да, обычно пассажиры могут взять чемодан в салон самолета как ручную кладь. Однако существуют ограничения по размерам и весу ручной клади, которые зависят от авиакомпании и класса обслуживания.",
      },
    ]);

    // Индекс активного элемента
    const activeIndex = ref<number | null>(null);

    // Метод для переключения активного элемента
    const toggle = (index: number) => {
      activeIndex.value = activeIndex.value === index ? null : index;
    };

    // Проверка, активен ли элемент
    const isActive = (index: number) => activeIndex.value === index;

    // Обработчик для кнопки "Узнать больше"
    const learnMore = () => {
      // Здесь можно добавить логику, например, переход на другую страницу или открытие модального окна
      alert("Больше информации скоро будет доступно!");
    };

    return {
      accordionItems,
      activeIndex,
      toggle,
      isActive,
      learnMore,
    };
  },
});
</script>

<style lang="scss" scoped>
.help-center {
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 700px;
  margin: 40px auto; // Центрирование аккордеона и отступ сверху

  .accordion-item {
    border-radius: 12px;
    background-color: #ffffffa6;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease;

    .accordion-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 17px;
      font-weight: 500;
      padding: 18px 16px;
      cursor: pointer;
      transition: background-color 0.3s ease;
      width: 100%;
      border: none;
      background: none;

      &:hover {
        background-color: #ffffff;
      }

      .accordion-icon {
        width: 20px;
        height: 20px;
        transition: transform 0.3s ease;
      }
    }

    .accordion-content {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease, padding 0.3s ease;
      padding: 0 16px;
      background-color: #fff;

      p {
        margin: 16px 0;
        font-size: 16px;
        line-height: 1.5;
        color: #333;
      }

      &.active {
        max-height: 500px; 
        padding: 16px;
      }
    }
  }

  // .accordion-button {
  //   padding: 12px 20px;
  //   font-size: 16px;
  //   font-weight: 500;
  //   color: #fff;
  //   background-color: #007bff;
  //   border: none;
  //   border-radius: 8px;
  //   cursor: pointer;
  //   transition: background-color 0.3s ease;
  //   align-self: center;

  //   &:hover {
  //     background-color: #0056b3;
  //   }
  // }
}
</style>
