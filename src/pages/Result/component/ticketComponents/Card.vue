<template>
    <div class="ticket-card">
        <header class="ticket-header">

            <div class="header-content">

                <div class="Bonus">
                    <img src="/src/assets/icons/Card_logo.svg" alt="">
                    <div class="getBonus">
                        <span>Получите 100 EP</span>
                    </div>
                </div>

                <div class="Header_btns">
                    <button>
                        <img src="/src/assets/icons/CardHeartOutline.svg" width="24" height="24" alt="">
                    </button>
                    <DropDown>
                        <template #trigger>
                            <button
                                class="icon-button"
                                :class="{ active: isActive }"
                                @click="toggleActive"
                            >
                                <Icon icon="solar:share-outline" width="24" height="24" />
                            </button>

                        </template>
                        <div class="Trigger_box">
                            <h1>Поделиться билетом
                                <button class="triggerBtn" style="border: 1px solid #C9D4E4;">
                                    <span class="close-icon">&times;</span>
                                </button>
                            </h1>

                            <div class="icons">
                                <div class="icon telegram">
                                    <img src="/src/assets/images/Telegram.svg" alt="Телеграм">
                                    <span>Телеграм</span>
                                </div>
                                <div class="icon instagram">
                                    <img src="/src/assets/images/Instagram.svg" alt="Инстаграм">
                                    <span>Инстаграм</span>
                                </div>
                                <div class="icon facebook">
                                    <img src="/src/assets/images/Facebook.svg" alt="Фейсбук">
                                    <span>Фейсбук</span>
                                </div>
                                <div class="icon twitter">
                                    <img src="/src/assets/images/Twitter.svg" alt="Твиттер">
                                    <span>Твиттер</span>
                                </div>
                                <div class="icon link">
                                    <img src="/src/assets/images/Link.svg" alt="Ссылка">
                                    <span>Ссылка</span>
                                </div>
                            </div>
                        </div>
                    </DropDown>
                </div>
            </div>
        </header>
        <div class="flight-info">
            <div class="departure-arrival">
                <div class="time">20:10
                    <span>25 мая, чт</span>
                    <span class="Cities">Ташкент (TAS)</span>
                </div>

                <div class="route_line">
                    <div>
                        <div class="airport-code">TAS</div>
                        <div class="route"></div>
                        <div class="airport-code">LED</div>
                    </div>
                    <span class="way">в пути 4ч 35мин</span>
                </div>

                <div class="time">23:05
                    <span>26 мая, пт</span>
                    <span class="Cities">Пулково (LED)</span>
                </div>
            </div>

            <a href="#" class="details-link">Детали маршрута <img src="/src/assets/icons/Cardarrow.svg" alt=""></a>
        </div>

        <div class="fare-details">
            <span>Тариф: <strong>Эконом Базовый</strong></span>
            <span class="baggage">Багаж 23 кг <img src="/src/assets/icons/cardFareStop.svg" alt=""></span>
            <span class="return">Возвратный <img src="/src/assets/icons/CardCheckCircle.svg" alt=""></span>
        </div>

        <div class="price-info">
            <div class="old-price">2 912 000 UZS</div>
            <div class="new-price">2 728 422 UZS</div>
            <div class="button-container">
                <button class="buy-btn">Купить</button>
                <button class="select-tariff">Выбрать тарифы</button>
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">
import {Icon} from '@iconify/vue';
import DropDown from "../../../../components/DropDown.vue";
import { ref } from 'vue';

const isActive = ref<boolean>(false);
const toggleActive = (): void => {
    isActive.value = !isActive.value;
};
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Mulish:wght@400;600&display=swap');
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
.Trigger_box {
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

        .triggerBtn {
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

    .icons {
        display: flex;
        justify-content: space-between;

        .icon {
            display: flex;
            flex-direction: column;
            align-items: center;
            cursor: pointer;
            padding: 10px;
            border-radius: 10px;
            transition: background 0.3s;
            font-family: 'Mulish', sans-serif;
            font-size: 12px;
            font-weight: 500;

            img {
                width: 40px;
                height: 40px;
            }

            span {
                color: #555;
                margin-top: 5px;
            }
        }
    }
}
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


</style>