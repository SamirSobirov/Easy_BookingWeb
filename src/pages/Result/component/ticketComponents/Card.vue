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
                <DateInfo time="23:05" date="25 мая, чт" city="Ташкент (TAS)"/>
            </div>

            <section class="fare-details">
                <p>Тариф: <strong>Эконом Базовый</strong></p>
                <button class="baggage">Багаж 23 кг <img src="/src/assets/icons/cardFareStop.svg" alt="baggage-icon">
                </button>
                <p class="return">Возвратный <img src="/src/assets/icons/CardCheckCircle.svg" alt="check-icon"></p>
            </section>

            <footer class="price-info">
                <div class="old-price">2 912 000 UZS</div>
                <div class="new-price">2 728 422 UZS</div>
                <div class="button-container">
                    <button class="buy-btn">Купить</button>

                    <DropDown>
                        <template  #trigger>
                            <button class="select-tariff">Выбрать тарифы</button>
                        </template>

                        <template  #default="{ close }">
                            <div class="ChoosePlanModal">
                                <div class="ChoosePlanModal-header">
                                    <TarifModalHeader/>
                                    <button class="trigger-btn" @click="close"><span class="close-icon">×</span></button>
                                </div>
                                <TarifModalCards/>

                                <div class="ChoosePlanModal-header">
                                    <TarifModalHeader/>
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
        <DropDown>
            <template #trigger>
                <button class="details-link" style="margin: 5px 0 0 16px">
                    Детали маршрута
                    <img src="/src/assets/icons/Cardarrow.svg" alt="arrow-icon">
                </button>
            </template>

            <template #default="{ close }">
                <ModalTable :close="close"/>
            </template>
        </DropDown>
    </article>
</template>


<script setup lang="ts">
import {Icon} from '@iconify/vue';
import DropDown from "../../../../components/DropDown.vue";
import ShareTicket from "../../../../components/ShareTicket.vue";
import RouteLine from "../../../../components/RouteLine.vue";
import DateInfo from "../../../../components/DateInfo.vue";
import ModalTable from "../../../../components/ModalTable.vue";
import TarifModalHeader from "../../../../components/TarifModalHeader.vue";
import TarifModalCards from "../../../../components/TarifModalCards.vue";
</script>

<style scoped lang="scss">


@import url('https://fonts.googleapis.com/css2?family=Mulish:wght@400;600&display=swap');

.ChoosePlanModal {
    font-family: Mulish, sans-serif;
    position: absolute;
    z-index: 10000;
    left: -130%;
    top: -150%;
    width: 900px;
    backdrop-filter: blur(80px);
    background-color: rgba(237, 237, 237, 0.09);
    border-radius: 12px;
    border: 1px solid #FFFFFF26;
    box-shadow: 0 4px 10px 10px rgba(0, 0, 0, 0.1);
    padding: 30px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 16px;


    .ChoosePlanModal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 12px;
        font-weight: 400;
        color: #81899A;


    }

    .trigger-btn {
        padding: 0 0 3px 1px;
        background: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        border: 1px solid #B5BBC9;
        transition: background 0.3s ease, border 0.3s ease;

        .close-icon {
            font-size: 24px;
            font-family: Mulish, sans-serif;

            color: #81899A;
            transition: color 0.3s ease;
        }
    }


    .ChoosePlanModal-summary {
        font-family: Mulish, sans-serif;
        display: flex;
        align-items: center;
        text-align: right;
        justify-content: right;
        gap: 12px;
        margin-top: 20px;
        font-weight: 600;
        font-size: 16px;
        color: #81899A;

        .ChoosePlanModal-total {
            color: #23282D;
            font-family: Mulish, sans-serif;
            font-size: 16px;
            font-weight: 700;
        }

        .ChoosePlanModal-select-btn {
            margin-left: 10px;
            width: 160px;
            height: 40px;
            background: #00B8D7;
            color: white;
            padding: 10px 30px;
            border-radius: 10px;
            cursor: pointer;
            border: none;
            font-size: 14px;
            font-weight: 400;
            font-family: Mulish, sans-serif;
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