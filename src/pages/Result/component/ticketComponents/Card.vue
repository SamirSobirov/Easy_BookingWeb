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
                <button class="baggage">Без багажа <img src="/src/assets/icons/cardFareStop.svg" alt="baggage-icon">
                </button>
                <p class="return">Возвратный <img src="/src/assets/icons/CardCheckCircle.svg" alt="check-icon"></p>
            </section>

            <footer class="price-info">
                <div class="old-price">2 912 000 UZS</div>
                <div class="new-price">2 728 422 UZS</div>
                <div class="button-container">
                    <button class="buy-btn">Купить</button>
                    <button class="select-tariff">Выбрать тарифы</button>
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
                <div class="details-box">
                    <div class="headerbtns">
                        <div class="modal-header">Детализация цен</div>
                        <button class="trigger-btn" @click="close"><span class="close-icon">×</span></button>
                    </div>
                    <table class="price-table">
                        <thead>
                        <tr>
                            <th>Пассажиры</th>
                            <th>Общая стоимость за одного пассажира</th>
                            <th>Общая стоимость</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>3 Взрослых</td>
                            <td>1 500 000 UZS</td>
                            <td>4 500 000 UZS</td>
                        </tr>
                        <tr>
                            <td>1 ребенок</td>
                            <td>1 150 000 UZS</td>
                            <td>1 150 000 UZS</td>
                        </tr>
                        </tbody>
                    </table>
                    <div class="total">Всего: <span>100 000.77 UZS</span></div>
                </div>
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

.details-box {
    font-family: Mulish, sans-serif;
    margin-top: -235px;
    margin-left: -680px;
    width: 1000px;
    height: 308px;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    display: flex;
    flex-direction: column;
    padding: 20px 24px;

    .headerbtns {
        display: flex;
        align-items: center;
        text-align: left;
        justify-content: space-between;
        font-family: Mulish, sans-serif;

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

            &:active, &.active {
                border-color: #00B8D7;

                .close-icon {
                    color: #00B8D7;
                }
            }
        }
    }

    .modal-header {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 10px;
        text-align: left;
    }

    .price-table {
        border: 1px solid #B5BBC9;
        border-collapse: collapse;
        margin-top: 15px;
        width: 100%;
        margin-bottom: 20px;
    }

    .price-table th,
    .price-table td {

        padding: 10px;
        border: 1px solid #dcdcdc;
        text-align: left;
    }

    .price-table th {

        width: 317px;
        height: 56px;
        background-color: #f4f4f4;
        color: #6D7586;
        font-size: 15px;
        font-family: Mulish, sans-serif;
        font-weight: 400;
    }

    .price-table td {
        width: 317px;
        height: 56px;
        font-size: 16px;
        font-family: Mulish, sans-serif;
        color: #212121;
        font-weight: 600;
    }

    .total {
        font-size: 20px;
        font-weight: 500;
        text-align: right;
        color: #00B8D7;
    }

    .total span {
        font-size: 20px;
        font-weight: 700;
        color: #00B8D7;
    }
}

</style>