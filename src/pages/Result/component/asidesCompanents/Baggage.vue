<template>
    <div class="sidebar_item">
        <toggle-section @click="toggleVisibility('baggage')">
            <span class="label">Багаж</span>
            <button class="hideButton" @click.stop="toggleVisibility('baggage')">
                <img :class="{ rotated: !visibility.baggage }" src="/src/assets/icons/arrow_down.svg" alt="arrow_down" />
            </button>
        </toggle-section>


        <transition name="fade">
            <div class="item_box" v-if="visibility.baggage">
                <label>
                    <input name="toggle" type="checkbox"/>
                    <div class="flex-container">
                        <p>Багаж включён</p>
                        <span class="price">цена</span>
                    </div>
                </label>

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
        gap: 32px;

        input[type="checkbox"] {
            appearance: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            width: 20px;
            height: 18px;
            border: 1px solid #B5BBC9;
            border-radius: 4px;
            outline: none;
            cursor: pointer;
            background-color: #fff;
            position: relative;
        }

        input[type="checkbox"]:checked {
            border: 1.5px solid #00B8D7;
            background-color: #00B8D7;


            &::before {
                content: "";
                display: block;
                width: 4px;
                height: 9px;
                border: solid white;
                border-width: 0 1.4px 1.4px 0;
                position: absolute;
                left: 5px;
                top: 1px;
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

    toggle-section {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 14px 16px 0 0;
        font-size: 16px;
        font-weight: 400;
        line-height: 20px;
        cursor: pointer;
    }

    .hideButton {
        width: 20px;
        height: 20px;
        background-color: transparent;
        border: none;
        cursor: pointer;

        img {
            rotate: 180deg;
            width: 15px;
            height: 15px;
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

        .price {
            padding-right: 19px;
            font-size: 14px;
            color: #9399A8;
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