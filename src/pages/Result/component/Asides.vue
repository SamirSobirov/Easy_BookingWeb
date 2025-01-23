<template>
    <aside>
        <button class="folowPrice">
            <i class="notification fas fa-bell"></i>
            <span>Следить за ценой</span>
        </button>

        <div class="sidebar">
            <div class="sidebar__item">
                <h3>Пересадки
                    <button>
                        <img src="/src/assets/icons/arrow_down.svg" alt="arrow_down">
                    </button>
                </h3>
                <ul>
                    <input type="checkbox">
                    <span>Без пересадок</span>
                </ul>

                <ul>
                    <input type="checkbox">
                    1 пересадка
                </ul>

                <ul>
                    <input type="checkbox">
                    <span>2 и более</span>
                </ul>

                <ul>
                    <input type="checkbox">
                    <span>Без смены аэропорта</span>
                </ul>


                <div class="sliders_control">
                    <span>{{ formattedTime }}</span>
                    <input
                        id="fromSlider"
                        type="range"
                        v-model="fromValue"
                        :min="min"
                        :max="max"
                        @input="updateFromValue"
                    />
                    <input
                        id="toSlider"
                        type="range"
                        v-model="toValue"
                        :min="min"
                        :max="max"
                        @input="updateToValue"
                    />
                </div>

                <hr>


            </div>

        </div>
    </aside>
</template>

<style scoped lang="scss">

aside {
    width: 267px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 16px;

    .folowPrice {
        padding: 16px;
        width: 100%;
        height: 54px;
        border-radius: 18px;
        border: 1px solid #FFFFFFA6;
        font-size: 14px;
        color: #6D7586;
        display: flex;
        gap: 10px;
        font-family: Arial, sans-serif;
        align-items: center;
        text-align: center;
        justify-content: center;
        background-color: rgba(255, 255, 255, 0.68);
    }


    .sidebar {
        background-color: rgba(255, 255, 255, 0.68);
        width: 100%;
        border-radius: 18px;
        border: 1px solid #FFFFFFA6;
        padding-left: 16px;

        &__item {
            display: flex;
            flex-direction: column;
            gap: 16px;

            h3 {
                display: flex;
                align-items: center;
                justify-content: space-between;
                text-align: center;
                padding: 14px 16px 0 0;
                font-size: 16px;
                font-weight: 400;
                line-height: 20px;

                button {
                    width: 20px;
                    height: 20px;
                    background-color: transparent;
                    border: none;

                    img {
                        rotate: 180deg;
                        width: 15px;
                        height: 15px;
                    }
                }
            }

            ul {
                display: flex;
                gap: 12px;
                font-size: 14px;
                cursor: pointer;
                font-weight: 400;
                line-height: 17px;
                color: #23282D;

            }


            .sliders_control {
                position: relative;
                width: 232px;
                align-items: center;
                justify-content: center;
                text-align: center;
                display: flex;
                flex-direction: column;

                span {
                    font-size: 13px;
                    font-weight: 400;
                    line-height: 17px;
                    color: #9399A8;
                    padding-bottom: 12px;
                }

                input[type=range]::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    pointer-events: all;
                    width: 16px;
                    height: 16px;
                    border: 1px solid #00B8D7;
                    background-color: #fff;
                    border-radius: 50%;
                    box-shadow: 0 0 0 1px #C6C6C6;
                    cursor: pointer;
                }


                input[type=range]::-webkit-slider-thumb:active {
                    box-shadow: inset 0 0 3px #387bbe, 0 0 9px #387bbe;
                    -webkit-box-shadow: inset 0 0 3px #387bbe, 0 0 9px #387bbe;
                }

                input[type="range"] {
                    -webkit-appearance: none;
                    appearance: none;
                    height: 2px;
                    border-radius: 5px;
                    width: 232px;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    background-color: #E3E5ED;
                    pointer-events: none;
                }

                #fromSlider {
                    height: 0;
                    z-index: 1;
                }
            }

            hr {
                width: 235px;
                border: 1px solid #E3E5ED;
            }
        }
    }
}

</style>


<script setup lang="ts">
import { ref, computed } from 'vue';

const min = ref(0);
const max = ref(100);
const fromValue = ref(10);
const toValue = ref(30);

const formattedTime = computed(() => {
    const hours = Math.floor(toValue.value / 60);
    const minutes = toValue.value % 60;
    return `${hours}ч ${minutes}мин`;
});

const updateFromValue = () => {
    if (fromValue.value > toValue.value) {
        fromValue.value = toValue.value;
    }
};

const updateToValue = () => {
    if (toValue.value < fromValue.value) {
        toValue.value = fromValue.value;
    }
};
</script>