<template>
    <div class="HelpCenter_box">
        <div class="HelpCenter__header">
            <h1>Найти ответ в справочном центре</h1>

            <div class="container">
                <div class="box">
                    <div class="box_main">
                        <img class="img" src="/src/assets/images/personImg_help.svg" alt="Помощь"/>

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
                                        :src="isActive(index) ? expandedIcon : collapsedIcon"
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
                                <img src="/src/assets/icons/ToKnow.svg" alt="Узнать больше"/>
                                Узнать больше
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref} from "vue";

interface AccordionItem {
    question: string;
    answer: string;
}

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
]);

const activeIndex = ref<number>(0);

const toggle = (index: number) => {
    activeIndex.value = activeIndex.value === index ? -1 : index;
};

const isActive = (index: number) => activeIndex.value === index;

const learnMore = () => {
    alert("Больше информации скоро будет доступно!");
};

const expandedIcon =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOCAxMi45OThINmExIDEgMCAwIDEgMC0yaDEyYTEgMSAwIDAgMSAwIDIiLz48L3N2Zz4=";
const collapsedIcon =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xMSAxM0g2cS0uNDI1IDAtLjcxMi0uMjg4VDUgMTJ0LjI4OC0uNzEyVDYgMTFoNVY2cTAtLjQyNS4yODgtLjcxMlQxMiA1dC43MTMuMjg4VDEzIDZ2NWg1cS40MjUgMCAuNzEzLjI4OFQxOSAxMnQtLjI4OC43MTNUMTggMTNoLTV2NXEwIC40MjUtLjI4OC43MTNUMTIgMTl0LS43MTItLjI4OFQxMSAxOHoiLz48L3N2Zz4=";
</script>
