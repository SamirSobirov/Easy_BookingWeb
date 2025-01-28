<template>
    <div class="sidebar_item">
        <h3 @click="toggleVisibility('baggage')" style="cursor: pointer;">
            Cортировка
            <button class="hideButton" @click="toggleVisibility('baggage')">
                <img :class="{ rotated: !visibility.baggage }" src="/src/assets/icons/arrow_down.svg"
                     alt="arrow_down"/>
            </button>
        </h3>

        <transition name="fade">
            <div class="item_box" v-if="visibility.baggage">

                <label>
                    <input name="toggle" type="radio"/>
                    <div class="flex-container">
                        <p>Сначала рекомендуемые</p>

                    </div>
                </label>

                <label>
                    <input name="toggle" type="radio"/>
                    <div class="flex-container">
                        <p>Сначала дешёвые</p>

                    </div>
                </label>

                <label>
                    <input name="toggle" type="radio"/>
                    <div class="flex-container">
                        <p>Время вылета</p>

                    </div>
                </label>


                <label>
                    <input name="toggle" type="radio"/>
                    <div class="flex-container">
                        <p>Время прибытия</p>

                    </div>
                </label>


                <label>
                    <input name="toggle" type="radio"/>
                    <div class="flex-container">
                        <p>Длительность пересадок</p>

                    </div>
                </label>


                <label>
                    <input name="toggle" type="radio"/>
                    <div class="flex-container">
                        <p>Длительность поездки</p>

                    </div>
                </label>
            </div>

        </transition>
    </div>
</template>

<style scoped lang="scss">
.sidebar_item {
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;

    .item_box {
        display: flex;
        flex-direction: column;
        gap: 16px;
        margin-bottom: 20px;


        input[type="radio"] {
            appearance: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            width: 16px;
            height: 15px;
            border: 1px solid #B5BBC9;
            border-radius: 4px;
            outline: none;
            cursor: pointer;
            background-color: transparent;
            position: relative;
        }

        input[type="radio"]:checked {
            border: 1px solid #00B8D7;

            &::before {
                content: "";
                display: block;
                width: 2px;
                height: 7px;
                border: solid #00B8D7;
                border-width: 0 3px 3px 0;
                position: absolute;
                left: 4.7px;
                top: 1.5px;
                transform: rotate(45deg);

            }
        }

        .slider-full {
            background: linear-gradient(to right, #00B8D7 100%, #E3E5ED 0%);
        }

    }

    img.rotated {
        transform: rotate(180deg);
        transition: transform 0.3s ease;
    }

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

    label {
        display: flex;
        gap: 12px;
        font-size: 14px;
        cursor: pointer;
        font-weight: 400;
        line-height: 17px;
        color: #23282D;

        .flex-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
        }
    }
}

</style>

<script setup lang="ts">
import {ref} from 'vue';


const visibility = ref({
    transfers: true,
    baggage: true
});

const toggleVisibility = (section: keyof typeof visibility.value) => {
    visibility.value[section] = !visibility.value[section];
};
</script>