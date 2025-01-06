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
                    :src="
                      isActive(index)
                        ? '/src/assets/icons/minus.svg'
                        : '/src/assets/icons/add.svg'
                    "
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
              <button class="accordion-button" @click="learnMore">
                <img src="/src/assets/icons/ToKnow.svg" alt="" />
                Узнать больше
              </button>
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
    const accordionItems = ref<AccordionItem[]>([
      {
        question: "Можно ли взять чемодан в самолет?",
        answer:
          "Да, обычно пассажиры могут взять чемодан в салон самолета как ручную кладь. Однако существуют ограничения по размерам и весу ручной клади, которые зависят от авиакомпании и класса обслуживания.",
      },
      {
        question: "Есть ли скидки на билеты для детей?",
        answer:
          "Да, многие авиакомпании предлагают скидки на билеты для детей. Условия и размер скидки могут различаться в зависимости от перевозчика.",
      },
      {
        question: "Какие аэропорты России закрыты сейчас?",
        answer: "На данный момент закрыты следующие аэропорты: ...",
      },
      {
        question: "Как купить билет для багажа на кресле?",
        answer:
          "Для покупки билета на дополнительный багаж перейдите в раздел 'Багаж' на нашем сайте и следуйте инструкциям.",
      },
      {
        question: "Как я могу оплатить билет на сайте?",
        answer:
          "Вы можете оплатить билет с помощью кредитной карты, электронных кошельков или банковского перевода.",
      },
      {
        question: "Можно ли взять чемодан в самолет?",
        answer:
          "Да, обычно пассажиры могут взять чемодан в салон самолета как ручную кладь. Однако существуют ограничения по размерам и весу ручной клади, которые зависят от авиакомпании и класса обслуживания.",
      },
    ]);

    const activeIndex = ref<number | null>(null);

    const toggle = (index: number) => {
      activeIndex.value = activeIndex.value === index ? null : index;
    };

    const isActive = (index: number) => activeIndex.value === index;

    const learnMore = () => {
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

</style>
