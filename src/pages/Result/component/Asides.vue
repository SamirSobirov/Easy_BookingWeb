<template>
    <aside>
        <button class="folowPrice">
            <i class="notification fas fa-bell"></i>
            <span>Следить за ценой</span>
        </button>

        <div class="sidebar">
            <div class="sidebar__item">
                <h3>
                    Пересадки
                    <button class="hideButton" @click="toggleVisibility">
                        <img :class="{ rotated: !isVisible }" src="/src/assets/icons/arrow_down.svg" alt="arrow_down"/>
                    </button>
                </h3>
                <transition name="fade">
                    <div class="box_item" v-show="isVisible">
                        <ul>
                            <input type="checkbox"/>
                            <span>Без пересадок</span>
                        </ul>
                        <ul>
                            <input type="checkbox"/>
                            <span>1 пересадка</span>
                        </ul>
                        <ul>
                            <input type="checkbox"/>
                            <span>2 и более</span>
                        </ul>
                        <ul>
                            <input type="checkbox"/>
                            <span>Без смены аэропорта</span>
                        </ul>
                        <DoubleRange/>

                    </div>
                </transition>
            </div>

            <hr>


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

            .box_item {
                display: flex;
                flex-direction: column;
                gap: 16px;

                span {
                    font-size: 14px;
                    font-weight: 400;
                    line-height: 17px;
                    color: #23282D;
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


        }

        hr {
            margin: 25px 0;
            width: 235px;
            border: 1px solid #E3E5ED;
        }
    }
}

</style>
<script setup lang="ts">
import {ref} from 'vue';
import DoubleRange from "./DoubleRange.vue";

const isVisible = ref(true);

const toggleVisibility = () => {
    isVisible.value = !isVisible.value;
};

</script>