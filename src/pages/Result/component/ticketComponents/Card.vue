<script setup lang="ts">

</script>

<template>
    <div class="ticket-card">
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

<!--            <div class="fare-details">-->
<!--                <span>Тариф: <strong>Эконом Базовый</strong></span>-->
<!--                <span class="baggage">Багаж 23 кг</span>-->
<!--                <span class="return">Возвратный &#10004;</span>-->
<!--            </div>-->
            <a href="#" class="details-link">Детали маршрута ▼</a>
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
    background-color: rgba(255, 255, 255, 0.68);
    border: 1px solid #FFFFFFA6;
    width: 860px;
    display: flex;
    justify-content: space-between;
    gap: 10px;
    align-items: center;

    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
    font-family: Arial, sans-serif;

    .flight-info {
        display: flex;
        flex-direction: column;
        gap: 8px;

        .departure-arrival {
            display: flex;
            align-items: center;
            gap: 20px;

            .time {
                margin-top: 20px;
                display: flex;
                flex-direction: column;
                text-align: left;
                gap: 10px;
                font-size: 24px;
                font-weight: 400;
                color: #23282D;

                span {
                    font-size: 12px;
                    color: #9399A8;
                    font-weight: 400;
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
                }
                .route {
                    flex-grow: 1;
                    width: 165px;
                    border-bottom: 2px dashed #838C97;
                    margin-top: 10px;
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

        .fare-details {
            font-size: 14px;
            color: #6c757d;
            display: flex;
            gap: 10px;
            align-items: center;

            .baggage {
                font-weight: bold;
            }

            .return {
                color: #6c757d;
                font-size: 12px;
            }
        }

        .details-link {
            font-size: 15px;

            color: #00B8D7;
            text-align: left;
            margin-top: 60px;
            cursor: pointer;
            text-decoration: none;

            &:hover {
                text-decoration: underline;
            }
        }
    }

    .price-info {
        width: 191px;
        text-align: center;

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