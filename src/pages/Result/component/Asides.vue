<template>
    <aside>
        <DropDown>
            <template #trigger>
                <button class="folowPrice">
                    <i class="notification fas fa-bell"></i>
                    <span>Следить за ценой</span>
                </button>

            </template>
            <template #default="{close}">
                <div class="price">
                    <h1>Следить за ценой
                        <button class="triggerBtn" style="border: 1px solid #C9D4E4;" @click="close">
                            <span class="close-icon">&times;</span>
                        </button>

                    </h1>
                    <div  class="subscription-box">
                        <input type="email" placeholder="Электронная почта" />
                        <button>Подписаться</button>
                    </div>
                </div>
            </template>
        </DropDown>


        <div class="sidebar">
            <Transfers/>
            <hr>
            <Baggage/>
            <hr>
            <TravelTime/>
            <hr>
            <TransferAirports/>
            <hr>
            <Alliances/>
            <hr>
            <Price/>
            <hr>
            <Airlines/>
            <hr>
            <Sort style="margin-bottom: 15px;"/>
        </div>
    </aside>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Baggage from "./asidesCompanents/Baggage.vue";
import Transfers from "./asidesCompanents/Transfers.vue";
import TravelTime from "./asidesCompanents/TravelTime.vue";
import TransferAirports from "./asidesCompanents/TransferAirports.vue";
import Alliances from "./asidesCompanents/Alliances.vue";
import Price from "./asidesCompanents/Price.vue";
import Airlines from "./asidesCompanents/Airlines.vue";
import Sort from "./asidesCompanents/Sort.vue";

import DropDown from "../../../components/DropDown.vue";
</script>




<style scoped lang="scss">
.price {
    left: 50px;
    top: 25px;
    position: relative;
    z-index: 1;
    height: 134px;
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

    .subscription-box {
        display: flex;
        align-items: center;
        border: none;
        border-radius: 5px;
        overflow: hidden;
        max-width: 400px;
        gap: 8px;

        input {
            border: 1px solid #E3E5ED;
            width: 250px;
            padding: 10px;
            height: 44px;
            border-radius: 12px;
            outline: none;
            font-size: 14px;
            color: #333;

            &::placeholder {
                color: #aaa;
                font-family: Mulish, sans-serif;
            }
        }

        button {
            background-color: #00bcd4;
            color: white;
            padding: 10px 15px;
            border: none;
            cursor: pointer;
            font-size: 14px;
            font-weight: 400;
            font-family: Mulish, sans-serif;
            height: 44px;
            width: 140px;
            border-radius: 12px;

            &:hover {
                background-color: #0097a7;
            }
        }
    }

}

aside {
    margin-top: 11px;
    width: 265px;
    height: 100%;
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
    gap: 14px;

    .folowPrice {
        backdrop-filter: blur(10px);
        padding: 16px;
        width: 267px;
        height: 54px;
        border-radius: 18px;
        border: 1px solid #FFFFFFA6;
        font-size: 14px;
        color: #6D7586;
        display: flex;
        gap: 10px;
        font-family: Mulish, sans-serif;
        align-items: center;
        text-align: center;
        justify-content: center;
        background-color: #FFFFFFA6;
    }

    .sidebar {
        backdrop-filter: blur(10px);
        padding: 2px 15px 5px 15px;
        background-color: #FFFFFFA6;
        width: 267px;
        border-radius: 18px;
        border: 1px solid #FFFFFFA6;
        hr {
            margin-top: 10px;
            width: 225px;
            border: 1px solid #E3E5ED;
        }
    }
}
</style>
