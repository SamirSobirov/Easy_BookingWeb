<script setup lang="ts">
import {Icon} from '@iconify/vue';
</script>

<template>
    <div class="ticket-card">
        <header class="ticket-header">

            <div class="header-content">

                <div>
                    <img src="/src/assets/icons/Card_logo.svg" alt="">
                    <div class="getBonus">
                        <span>Получите 100 EP</span>
                    </div>
                </div>

                <div class="Header_btns">
                    <button>
                        <img src="/src/assets/icons/CardHeartOutline.svg" width="24" height="24" alt="">
                    </button>
                    <button>
                        <Icon icon="solar:share-outline" width="24" height="24" style="color: #6D7586"/>
                    </button>
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

<style scoped lang="scss">
</style>