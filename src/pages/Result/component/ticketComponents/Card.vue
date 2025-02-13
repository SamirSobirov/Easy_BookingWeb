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
                <DateInfo
                    :show-details="showDetails"
                    time="20:10"
                    date="26 мая, чт"
                    city="Ташкент(TAS)"
                    terminal="A"
                    degrees="17°C"
                    img="/icons/sun.svg"
                />
                <RouteLine/>
                <DateInfo
                    :show-details="showDetails"
                    time="23:05"
                    date="26 мая, пт"
                    city="Москва (LED)"
                    terminal="B"
                    degrees="-12°C"
                    img="/icons/cloudly.svg"
                />
            </div>

            <section class="fare-details">
                <p>Тариф: <strong>Эконом Базовый</strong></p>
                <DropDown>
                    <template #trigger>
                        <button class="baggage">Багаж 23 кг
                            <img src="/src/assets/icons/cardFareStop.svg" alt="baggage-icon"></button>
                    </template>
                    <template #default="{ close }">
                        <div class="baggage-content">
                            <h1>
                                Разбивка багажа
                                <button class="trigger-btn" @click="close"><span class="close-icon">×</span></button>
                            </h1>

                            <div class="passenger-section">
                                <h2>Взрослый</h2>
                                <div class="baggage-card">
                                    <div class="baggage-card__details">
                                        <h3>Багаж</h3>
                                        <p class="weight">Вес: 1 PC</p>
                                        <p class="size">130 x 100 x 30</p>
                                    </div>

                                    <div class="baggage-card__icon">
                                        <img src="/src/assets/images/baggage_dropdown.svg" alt="Багаж">
                                    </div>
                                </div>

                                <div class="baggage-card">
                                    <div class="baggage-card__details">
                                        <h3>Ручная кладь</h3>
                                        <p class="weight">Вес: 10 кг</p>
                                        <p class="size">50 x 60 x 20</p>
                                    </div>
                                    <div class="baggage-card__icon">
                                        <img src="/src/assets/images/baggage_dropdown2.svg" alt="Багаж">
                                    </div>
                                </div>

                                <h2>Ребенок</h2>
                                <div class="baggage-card">
                                    <div class="baggage-card__details">
                                        <h3>Багаж</h3>
                                        <p class="weight">Вес: 1 PC</p>
                                        <p class="size">130 x 100 x 30</p>
                                    </div>
                                    <div class="baggage-card__icon">
                                        <img src="/src/assets/images/baggage_dropdown2.svg" alt="Багаж">
                                    </div>
                                </div>

                                <div class="baggage-card">
                                    <div class="baggage-card__details">
                                        <h3>Багаж</h3>
                                        <p class="weight">Вес: 1 PC</p>
                                        <p class="size">130 x 100 x 30</p>
                                    </div>
                                    <div class="baggage-card__icon">
                                        <img src="/src/assets/images/baggage_dropdown.svg" alt="Багаж">
                                    </div>
                                </div>

                                <div class="baggage-card">
                                    <div class="baggage-card__details">
                                        <h3>Ручная кладь</h3>
                                        <p class="weight">Вес: 8 кг</p>
                                        <p class="size">50 x 60 x 20</p>
                                    </div>

                                    <div class="baggage-card__icon">
                                        <img src="/src/assets/images/baggage_dropdown2.svg" alt="Багаж">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                </DropDown>
                <p class="return">Возвратный <img src="/src/assets/icons/CardCheckCircle.svg" alt="check-icon"></p>
                <p v-if="showDetails">Класс: <strong style="padding-left: 3px;"> B</strong></p>


                <DropDown>
                    <template #trigger>
                        <button v-if="showDetails" class="baggage" style="text-decoration: none; white-space: nowrap">
                            Самолет:
                            <strong style="font-weight: 400; color: #23282D; text-decoration: underline">Boeing
                                787-800</strong>
                            <img style="padding-top: 1px; fill: black" src="/src/assets/icons/cardFareStop.svg"
                                 alt="baggage-icon">
                        </button>
                    </template>
                    <template #default="{ close }">
                        <div class="plane-content">
                            <h1>
                                Boeing 787-800
                                <button class="trigger-btn" @click="close"><span class="close-icon">×</span></button>
                            </h1>
                            <div class="plane-section">

                                <div class="boxPlane">
                                    <p>Расстояние между кресел:</p>
                                    <img style=" " src="/src/assets/images/planeChairs.svg" alt="">
                                </div>

                                <div class="boxPlane">
                                    <p>Схема кресел:</p>
                                    <img style="margin-top: 10px" src="/src/assets/images/schemeChairs.svg" alt="">
                                </div>
                            </div>
                        </div>
                    </template>
                </DropDown>


                <Modal>
                    <template #trigger>
                        <button v-if="showDetails" class="baggage">Погода: <img src="/src/assets/icons/cardFareStop.svg"
                                                                                alt="baggage-icon"></button>
                    </template>
                    <template #default="{ close }">
                        <div class="Weather-content">
                            <h1>
                                Погода
                                <button class="trigger-btn" @click="close"><span class="close-icon">×</span></button>
                            </h1>
                            <WeatherModal/>
                        </div>
                    </template>
                </Modal>

                <p v-if="showDetails">Остаток мест: <strong style="padding-left: 3px;">4</strong></p>

                <Modal>
                    <template #trigger>
                        <button v-if="showDetails" style="color: #00b8d7; font-family: Mulish, sans-serif">Правила
                            тарифа
                        </button>
                    </template>
                    <template #default="{ close }">
                        <div class="PricingPlanRules-content">
                            <h1>
                                Просмотр правил тарифа
                                <button class="trigger-btn" @click="close"><span class="close-icon">×</span></button>
                            </h1>
                            <PricingPlanRules/>
                        </div>
                    </template>
                </Modal>
            </section>

            <footer class="price-info">
                <div class="old-price">2 912 000 UZS</div>
                <div class="new-price">2 728 422 UZS</div>
                <div class="button-container">
                    <button class="buy-btn">Купить</button>
                    <Modal>
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
                                <TarifModalHeader/>
                                <TarifModalCards/>
                                <div class="ChoosePlanModal-summary">
                                    <div>Итого:</div>
                                    <div class="ChoosePlanModal-total">500 724 UZS</div>
                                    <button class="ChoosePlanModal-select-btn">Выбрать</button>
                                </div>
                            </div>
                        </template>
                    </Modal>
                </div>
            </footer>
        </section>
        <button class="details-link" @click="toggleDetails">
            {{ showDetails ? 'Скрыть детали' : 'Детали маршрута' }}
            <img :src="showDetails ? '/icons/Cardarrow.svg' : '/icons/Cardarrow.svg'"
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
import PricingPlanRules from "../../../../components/PricingPlanRules.vue";
import Modal from "../../../../components/Modal.vue";
import WeatherModal from "../../../../components/WeatherModal.vue";


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

.PricingPlanRules-content {
    position: fixed;
    z-index: 11;
    height: 700px;
    padding: 20px;
    background: #fff;
    border-radius: 28px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    width: 933px;
    text-align: center;
    display: flex;
    flex-direction: column;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);


    h1 {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 18px;
        font-weight: 600;
        font-family: 'Mulish', sans-serif;
        color: black;
        margin-bottom: 15px;
        line-height: 23px;

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
                color: #81899A;
                padding: 0 0 0 1px;
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

.Weather-content {
    position: fixed;
    z-index: 11;
    height: 640px;
    padding: 24px 24px;
    background: #FFFFFFCC;

    border-radius: 28px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    width: 680px;
    text-align: center;
    display: flex;
    flex-direction: column;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);


    h1 {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 20px;
        font-weight: 600;
        font-family: 'Mulish', sans-serif;
        color: black;
        margin-bottom: 15px;
        line-height: 23px;

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
                color: #81899A;
                padding: 0 0 0 1px;
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