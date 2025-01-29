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
                    <input name="toggle" type="checkbox"/>
                    <span>Без пересадок</span>
                </label>

                <label>
                    <input name="toggle" type="checkbox"/>
                    <span>1 пересадка</span>
                </label>
                <label>
                    <input name="toggle" type="checkbox"/>
                    <span>2 и более</span>
                </label>
                <label>
                    <input name="toggle" type="checkbox"/>
                    <span>Без смены аэропорта</span>
                </label>
                <DoubleRange/>

            </div>
        </transition>
    </div>
</template>

<style scoped lang="scss">

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
