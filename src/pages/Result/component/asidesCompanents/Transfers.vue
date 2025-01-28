<template>
    <div class="sidebar_item">
        <h3 @click="toggleVisibility('transfers')" style="cursor: pointer;">
            Пересадки
            <button class="hideButton" @click.stop="toggleVisibility('transfers')">
                <img :class="{ rotated: !visibility.transfers }" src="/src/assets/icons/arrow_down.svg" alt="arrow_down" />
            </button>
        </h3>
        <transition name="fade">
            <div class="item_box" v-if="visibility.transfers">

                <label>
                    <input name="toggle" type="radio"/>
                    <span>Без пересадок</span>
                </label>

                <label>
                    <input name="toggle" type="radio"/>
                    <span>1 пересадка</span>
                </label>
                <label>
                    <input name="toggle" type="radio"/>
                    <span>2 и более</span>
                </label>
                <label>
                    <input name="toggle" type="radio"/>
                    <span>Без смены аэропорта</span>
                </label>
                <DoubleRange/>

            </div>
        </transition>
    </div>
</template>

<style scoped lang="scss">
.sidebar_item {
    display: flex;
    flex-direction: column;
    gap: 16px;


    .item_box {
        display: flex;
        flex-direction: column;
        gap: 16px;

        span {

            font-size: 14px;
            font-weight: 400;
            line-height: 17px;
            color: #23282D;
        }

        input[type="radio"] {
            appearance: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            width: 15px;
            height: 15px;
            border: 1px solid #B5BBC9;
            border-radius: 4px;
            outline: none;
            cursor: pointer;
            background-color: #fff;
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
    }

    img.rotated {
        transform: rotate(180deg);
        transition: transform 0.3s ease;
    }


    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.3s ease;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
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
            text-align: center;
            padding-top: 2px;
            background-color: transparent;
            border: none;
            cursor: pointer;

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


        p {
            display: flex;
            text-align: center;
            justify-content: space-between;

            .price {
                padding-left: 75px;
                font-size: 14px;
                color: #9399A8;
            }
        }
    }
}
</style>

<script setup lang="ts">

import DoubleRange from "./DoubleRange.vue";
import {ref} from "vue";

const visibility = ref({
    transfers: true,
    baggage: true
});

const toggleVisibility = (section: keyof typeof visibility.value) => {
    visibility.value[section] = !visibility.value[section];
};
</script>
