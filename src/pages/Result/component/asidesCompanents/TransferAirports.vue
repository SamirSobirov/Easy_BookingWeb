<template>
    <div class="sidebar_item">
        <h3 @click="toggleVisibility('baggage')" style="cursor: pointer;">
            Аэропорты пересадок
            <button class="hideButton" @click="toggleVisibility('baggage')">
                <img :class="{ rotated: !visibility.baggage }" src="/src/assets/icons/arrow_down.svg"
                     alt="arrow_down"/>
            </button>
        </h3>

        <transition name="fade">
            <div class="item_box" v-if="visibility.baggage">


                <div class="group">
                    <svg viewBox="0 0 24 24" aria-hidden="true" class="icon">
                        <g>
                            <path
                                d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
                            ></path>
                        </g>
                    </svg>
                    <input class="input" type="search" placeholder="Search"/>
                </div>

                <label>
                    <input name="toggle" type="checkbox"/>
                    <p>Выбрать все</p>
                </label>

                <label>
                    <input name="toggle" type="checkbox"/>
                    <div>
                        <p class="country">Москва, <p> Домодедово DME</p></p>

                        <ul>
                            <span class="price">Россия</span>
                            <span> 2,5 млн</span>

                        </ul>
                    </div>
                </label>

                <label>
                    <input name="toggle" type="checkbox"/>
                    <div>
                        <p class="country">Москва, <p>Шереметьево SVO</p></p>

                        <ul>
                            <span class="price">Россия</span>
                            <span> 3,5 млн</span>

                        </ul>
                    </div>
                </label>

                <label>
                    <input name="toggle" type="checkbox"/>
                    <div>
                        <p class="country">Москва, <p> Самарканд SKD</p></p>

                        <ul>
                            <span class="price">Узбекистан</span>
                            <span> 2,5 млн</span>

                        </ul>
                    </div>
                </label>

                <label>
                    <input name="toggle" type="checkbox"/>
                    <div>
                        <p class="country">Ургенч, <p> Ургенч UGC</p></p>

                        <ul>
                            <span class="price">Узбекистан</span>
                            <span> 2,5 млн</span>

                        </ul>
                    </div>
                </label>

            </div>

        </transition>

    </div>
</template>


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

<style scoped lang="scss">
.sidebar_item {
    display: flex;
    flex-direction: column;
    gap: 16px;


    hideButton.rotated {
        transform: rotate(180deg);
        transition: transform 0.3s ease;
    }

    .item_box {
        display: flex;
        flex-direction: column;
        gap: 12px;


        input[type="checkbox"] {
            appearance: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            width: 15px;
            height: 15px;
            border: 1px solid #B5BBC9;
            border-radius: 4px;
            outline: none;
            cursor: pointer;
            background-color: transparent;
            position: relative;
        }

        input[type="checkbox"]:checked {
            border: 1.5px solid #00B8D7;

            &::before {
                content: "";
                display: block;
                width: 4px;
                height: 6px;
                border: solid #00B8D7;
                border-width: 0 1.4px 1.4px 0;
                position: absolute;
                left: 3.5px;
                top: 1.8px;
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
        width: 100%;
        display: flex;
        align-items: center;  // Центрирование по вертикали
        gap: 12px;
        font-size: 14px;
        cursor: pointer;
        font-weight: 400;
        line-height: 17px;
        color: #23282D;

        input {
            align-self: center;  // Центрирование внутри flex-контейнера
        }

        div {
            display: flex;
            flex-direction: column;
            justify-content: center;

            .country {
                display: flex;
                font-size: 14px;
                color: #23282D;
                gap: 8px;

                p {
                    margin: 0;
                    font-weight: 600;
                }

                p:last-child {
                    color: #9299A2;
                    font-weight: 400;
                }
            }

            ul {
                display: flex;
                justify-content: space-between;
                padding: 0;
                margin: 0;
                list-style: none;

                .price {
                    color: #9399A8;
                    font-weight: 400;
                }

                span:last-child {
                    font-weight: 400;
                    font-size: 14px;
                    color: #23282D;
                    padding-left: 60px;
                }
            }
        }
    }



    .group {
        display: flex;
        line-height: 28px;
        align-items: center;
        position: relative;
        max-width: 190px;


        .input {
            width: 245px;
            height: 34px;
            line-height: 28px;
            padding: 0 2rem;
            padding-left: 2.5rem;
            border-radius: 8px;
            outline: none;
            border: 1px solid #47556933;
            background-color: transparent;
            color: #0d0c22;
            transition: 0.3s ease;
        }

        .input::placeholder {
            color: #9e9ea7;
        }

        .icon {
            position: absolute;
            left: 1rem;
            fill: #9e9ea7;
            width: 1rem;
            height: 1rem;
        }
    }
}
</style>