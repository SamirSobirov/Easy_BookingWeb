<template>
    <div class="route-container">
        <div class="box">
            <span class="airport">TAS</span>
            <img src="/src/assets/icons/Modal_Flight_takeoff.svg" alt="">
            <span class="airport">UGC</span>
        </div>
        <div class="line"></div>
    </div>

    <div class="Tarifs_Header">
        <div class="passenger">
            <p>Пассажиры:</p>

            <label class="radio_box">
                <input type="radio" name="passenger"/>
                <span>Взрослый</span>
            </label>

            <label class="radio_box">
                <input type="radio" name="passenger"/>
                <span>Ребенок</span>
            </label>
        </div>

        <div class="tarifs">
            <div class="passenger">
                <p>Код тарифа: <span>SRT</span></p>
                <p>Тип класса: <span>Эконом</span></p>
            </div>
        </div>
    </div>

    <hr>

    <div class="help-center">
        <div
            class="accordion-item"
            v-for="(item, index) in accordionItems"
            :key="index"
        >
            <hr v-if="index !== 0" />
            <button
                class="accordion-header"
                @click="toggle(index)"
                :aria-expanded="isActive(index)"
                :aria-controls="`content-${index}`"
                :id="`header-${index}`"
            >
                <span :class="{ activeText: isActive(index) }">
                    {{ item.question }}
                </span>
                <Icon
                    :icon="isActive(index) ? expandedIcon : collapsedIcon"
                    width="24"
                    height="24"
                    class="accordion-icon"
                    :class="{ activeIcon: isActive(index) }"
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
    </div>
</template>


<script setup lang="ts">
import {ref} from "vue";
import {Icon} from "@iconify/vue";

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
    {
        question: "Как купить билет для багажа на кресле?",
        answer:
            "Для покупки билета на дополнительный багаж перейдите в раздел 'Багаж' на нашем сайте и следуйте инструкциям.",
    }
]);

const activeIndex = ref<number>(0);
const toggle = (index: number) => {
    activeIndex.value = activeIndex.value === index ? -1 : index;
};
const isActive = (index: number) => activeIndex.value === index;

const expandedIcon = "ep:arrow-up";
const collapsedIcon = "ep:arrow-down";
</script>

<style scoped lang="scss">
.route-container {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 120px;
    flex-direction: column;

    .box {
        font-family: Mulish, sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        gap: 8px;
        font-size: 14px;
        font-weight: 500;
        line-height: 17px;
        width: 100%;
        cursor: pointer;

        img {
            width: 14px;
            height: 14px;
        }
    }

    .line {
        border-top-right-radius: 100px;
        border-top-left-radius: 100px;
        width: 100%;
        height: 4px;
        background-color: #00b8d7;
    }
}

.Tarifs_Header {
    margin-top: 19px;
    display: flex;
    justify-content: space-between;

    .passenger {
        display: flex;
        gap: 12px;

        p {
            cursor: pointer;
            font-size: 14px;
            font-family: Mulish, sans-serif;
            color: #81899A;
            display: flex;
            gap: 4px;
        }

        span {
            color: black;
            font-size: 14px;
        }

        .radio_box {
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;

            span {
                color: #B5BBC9;
                transition: color 0.2s;
            }

            input[type="radio"] {
                appearance: none;
                width: 13px;
                height: 13px;
                margin-right: 10px;
                border: 1px solid #ccc;
                border-radius: 50%;
                background-color: white;
                position: relative;
                outline: none;
                margin-left: auto;

                &::before {
                    content: "";
                    display: block;
                    width: 7px;
                    height: 7px;
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
                    background-color: #80dbeb1d;

                    &::before {
                        background-color: #80dbeb;
                        transform: translate(-50%, -50%) scale(1);
                    }
                }
            }
        }

        .radio_box input[type="radio"]:checked + span {
            color: black;
        }
    }
}

hr {
    margin-top: 15px;
    height: 1px;
    background-color: #e3e3e3;
    border: none;
}

.help-center {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;

    .accordion-item {
        border-radius: 12px;
        background-color: rgba(255, 255, 255, 0.75);
        overflow: hidden;
        //box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        transition: background-color 0.3s ease;

        .accordion-header {
            font-family: Mulish, sans-serif;
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 17px;
            font-weight: 500;
            padding: 15px 16px;
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
            padding: 0 12px;
            background-color: #E3E5ED;
            text-align: left;

            p {
                margin: 16px 0;
                font-size: 16px;
                line-height: 1.5;
                color: black;
                font-family: Mulish, sans-serif;
            }

            &.active {
                border-radius: 12px;
                background-color: #E3E5ED;
                max-height: 500px;
                padding: 16px 16px;
            }
        }
    }

    .accordion-button {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 14px 20px;
        font-size: 16px;
        font-weight: 500;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        transition: background-color 0.3s ease;
        gap: 10px;
        background-color: #ffffff;
        color: #80dbeb;
        margin: 0 auto;
        width: 100%;
    }

    .accordion-content.active {
        display: block;
    }

    .activeText {
        color: #00B8D7;
    }

    .activeIcon {
        color: #00B8D7;
    }
}
</style>

