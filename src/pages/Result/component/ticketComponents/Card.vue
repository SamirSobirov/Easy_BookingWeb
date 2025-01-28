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
                        <Icon icon="mdi-light:heart" width="24" height="24" style="color: #6D7586"/>
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
                    <span>в пути 4ч 35мин</span>
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
            <span class="baggage">Багаж 23 кг</span>
            <span class="return">Возвратный &#10004;</span>
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
.ticket-card {
    position: relative;
    background-color: #FFFFFF59;
    border: 1px solid #FFFFFFA6;
    width: 855px;
    display: flex;
    gap: 10px;
    align-items: center;
    border-radius: 20px;
    padding: 20px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
    font-family: Arial, sans-serif;
    overflow: hidden;
    //z-index: -1;
    backdrop-filter: blur(10px);

    .ticket-header {
        width: 855px;
        margin-left: -20px;
        height: 40px;
        position: absolute;
        top: 0;
        color: #FFFFFF;
        font-size: 14px;
        font-weight: bold;

        //border-radius: 20px;
        padding: 8px 16px;

        background-color: #FFFFFFA6;

        .header-content {
            height: 20px;
            display: flex;

            text-align: center;
            justify-content: space-between;
            align-items: center;
            gap: 10px;

            div {
                display: flex;
                gap: 10px;
            }

            .Header_btns {
                display: flex;
                gap: 0;
                padding-top: 8px;

                button {
                    background: transparent;
                    border: none;
                    border-radius: 50%;
                    padding: 8px;
                    cursor: pointer;
                }
            }

            .getBonus {
                width: 98px;
                height: 20px;
                padding: 3px 8px;
                background-color: #7879F1;
                border-radius: 50px;
                font-size: 10px;
                font-family: Mulish, sans-serif;
                font-weight: 400;

            }
        }
    }

    .flight-info {
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-top: 36px;

        .departure-arrival {
            display: flex;
            align-items: center;
            gap: 10px;

            .time {
                display: flex;
                flex-direction: column;
                text-align: left;
                gap: 8px;
                font-size: 24px;
                font-weight: 100;
                color: #23282D;
                white-space: nowrap;

                span {
                    font-size: 13px;
                    color: #9399A8;
                    font-weight: 100;
                }
            }

            .airport-code {
                font-size: 10px;
                color: #23282D;
                font-weight: 400;
            }

            .route_line {
                div {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    margin-top: -15px;
                }

                .route {
                    flex-grow: 1;
                    width: 165px;
                    border-bottom: 2px dashed #838C97;
                    margin-top: -5px;
                    margin-bottom: 10px;
                }

                span {
                    font-size: 12px;
                    color: #9399A8;
                }
            }

            .duration {
                font-size: 14px;
                color: #6c757d;
            }
        }

        .details-link {
            font-size: 14px;
            line-height: 18px;
            color: #00B8D7;
            display: flex;
            gap: 5px;
            text-align: left;
            cursor: pointer;
            text-decoration: none;
            //margin-top: auto;
            padding-top: 60px;

            &:hover {
                text-decoration: underline;
            }
        }
    }

    .fare-details {
        font-size: 14px;
        color: #6c757d;
        display: flex;
        text-align: left;
        flex-direction: column;
        gap: 4px;
        align-items: flex-start;
        align-self: flex-start;
        justify-content: flex-start;
        margin-top: 36px;
        margin-left: 10px;
        font-family: Mulish, sans-serif;
        white-space: nowrap;

    }

    span {

        strong {
            color: #23282D;
            font-weight: 400;
        }
    }


    .fare-details .baggage {
        font-weight: 400;
        font-size: 13px;

        text-decoration: underline;
        color: #9399A8;
    }

    .fare-details .return {
        color: #6c757d;
        font-size: 12px;
    }


    .price-info {
        width: 191px;
        text-align: center;
        font-family: Mulish, sans-serif;
        margin-top: 28px;
        margin-left: 14px;

        .old-price {
            line-height: 19px;
            font-size: 15px;
            color: #EB5757;
            text-decoration: line-through;
        }

        .new-price {
            font-size: 20px;
            font-weight: 700;
            color: #23282D;
        }

        .button-container {
            margin-top: 16px;
            width: 191px;
            display: flex;
            flex-direction: column;
            gap: 1px;

            .buy-btn {
                background: #00B8D7;
                color: #FFFFFF;
                font-family: Mulish, sans-serif;
                font-size: 14px;
                font-weight: 400;
                border: none;
                border-radius: 12px;
                padding: 12px 30px;
                cursor: pointer;
                width: 191px;
            }

            .select-tariff {
                width: 191px;
                background: #fff;
                color: #9399A8;
                border: 1px solid #E3E5ED;
                font-size: 14px;
                font-weight: 400;
                border-radius: 12px;
                padding: 12px 30px;
                cursor: pointer;
                margin-top: 8px;

                &:hover {
                    background: #e3f5ff;
                }
            }
        }
    }
}

</style>