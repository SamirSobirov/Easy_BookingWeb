<template>
    <article class="ticket-card">
        <header class="ticket-header">
            <div class="header-content">
                <div class="bonus">
                    <img src="/src/assets/icons/Card_logo.svg" alt="logo">
                    <div class="get-bonus">
                        <span>Получите 100 EP</span>
                    </div>
                </div>
                <div class="header-btns">
                    <button>
                        <img src="/src/assets/icons/CardHeartOutline.svg" width="24" height="24" alt="heart-icon">
                    </button>
                    <DropDown>
                        <template #trigger="{ isOpen }">
                            <button class="icon-button" :class="{ active: isOpen }">
                                <Icon icon="solar:share-outline" width="24" height="24"/>
                            </button>
                        </template>

                        <template #default="{ close }">
                            <div class="dropdown-content">
                                <h1>
                                    Поделиться билетом
                                    <button class="trigger-btn" @click="close"><span class="close-icon">×</span>
                                    </button>
                                </h1>
                                <ShareTicket/>
                            </div>
                        </template>
                    </DropDown>
                </div>
            </div>
        </header>

        <section class="flight-info">
            <div class="departure-arrival">
                <DateInfo time="20:10" date="25 мая, чт" city="Ташкент (TAS)"/>
                <RouteLine/>
                <DateInfo time="23:05" date="26 мая, пт" city="Москва (LED)"/>

            </div>

            <section class="fare-details">
                <p>Тариф: <strong>Эконом Базовый</strong></p>
                <DropDown>
                    <template #trigger>
                        <button class="baggage">Багаж 23 кг <img src="/src/assets/icons/cardFareStop.svg" alt="baggage-icon"></button>
                    </template>
                    <template #default="{ close }">
                        <div class="baggage-content">
                            <h1>Разбивка багажа</h1>
                            <button class="trigger-btn" @click="close"><span class="close-icon">×</span></button>
                        </div>
                    </template>
                </DropDown>
                <p class="return">Возвратный <img src="/src/assets/icons/CardCheckCircle.svg" alt="check-icon"></p>
                <p v-if="showDetails">Класс: <strong style="padding-left: 3px;"> B</strong></p>
                <button v-if="showDetails" class="baggage" style="text-decoration: none; white-space: nowrap">Самолет:
                    <strong style="font-weight: 400; color: #23282D; text-decoration: underline">Boeing 787-800</strong>
                    <img style="padding-top: 1px; fill: black" src="/src/assets/icons/cardFareStop.svg" alt="baggage-icon">
                </button>
                <button v-if="showDetails" class="baggage">Погода: <img src="/src/assets/icons/cardFareStop.svg" alt="baggage-icon"></button>
                <p v-if="showDetails">Остаток мест: <strong style="padding-left: 3px;">4</strong></p>
                <button v-if="showDetails" style="color: #00b8d7; font-family: Mulish, sans-serif">Правила тарифа</button>
            </section>

            <footer class="price-info">
                <div class="old-price">2 912 000 UZS</div>
                <div class="new-price">2 728 422 UZS</div>
                <div class="button-container">
                    <button class="buy-btn">Купить</button>
                    <DropDown>
                        <template #trigger>
                            <button class="select-tariff">Выбрать тарифы</button>
                        </template>
                        <template #default="{ close }">
                            <div class="ChoosePlanModal">
                                <div class="ChoosePlanModal-header">
                                    <TarifModalHeader/>
                                    <button class="trigger-btn" @click="close"><span class="close-icon">×</span>
                                    </button>
                                </div>
                                <TarifModalCards/>
                                <div class="ChoosePlanModal-summary">
                                    <div>Итого:</div>
                                    <div class="ChoosePlanModal-total">500 724 UZS</div>
                                    <button class="ChoosePlanModal-select-btn">Выбрать</button>
                                </div>
                            </div>
                        </template>
                    </DropDown>
                </div>
            </footer>
        </section>
        <button class="details-link" @click="toggleDetails">
            {{ showDetails ? 'Скрыть детали' : 'Детали маршрута' }}
            <img :src="showDetails ? '/src/assets/icons/Cardarrow.svg' : '/src/assets/icons/Cardarrow.svg'"
                 alt="arrow-icon">
        </button>

    </article>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import {Icon} from '@iconify/vue';
import DropDown from "../../../../components/DropDown.vue";
import ShareTicket from "../../../../components/ShareTicket.vue";
import RouteLine from "../../../../components/RouteLine.vue";
import DateInfo from "../../../../components/DateInfo.vue";
import TarifModalHeader from "../../../../components/TarifModalHeader.vue";
import TarifModalCards from "../../../../components/TarifModalCards.vue";

const showDetails = ref(false);

function toggleDetails() {
    showDetails.value = !showDetails.value;
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Mulish:wght@400;600&display=swap');

.DropDown button {
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    svg, img {
        transition: fill 0.3s ease, color 0.3s ease;
    }

    &:active, &.active {
        svg, img {
            fill: #00B8D7 !important;
            color: #00B8D7 !important;
        }
    }
}

.icon-button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
}

.icon-button :deep(svg) {
    color: #6D7586;
    transition: color 0.3s ease;
}

.icon-button.active :deep(svg) {
    color: #00B8D7;
}

.dropdown-content {
    position: absolute;
    z-index: 10;
    height: 170px;
    padding: 20px;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;

    h1 {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 18px;
        font-weight: 600;
        font-family: 'Mulish', sans-serif;
        color: black;
        margin-bottom: 15px;

        .trigger-btn {
            background: none;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            border: 1px solid #C9D4E4;
            transition: background 0.3s ease, border 0.3s ease;

            .close-icon {
                font-size: 24px;
                padding-bottom: 3px;
                color: #475569;
                transition: color 0.3s ease;
            }

            &:active, &.active {
                border-color: #00B8D7;

                .close-icon {
                    color: #00B8D7;
                }
            }
        }
    }
}

</style>