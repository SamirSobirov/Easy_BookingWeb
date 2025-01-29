<template>
    <div class="sidebar_item">
        <h3 @click="toggleVisibility('baggage')" style="cursor: pointer;">
            Багаж
            <button class="hideButton" @click="toggleVisibility('baggage')">
                <img :class="{ rotated: !visibility.baggage }" src="/src/assets/icons/arrow_down.svg"
                     alt="arrow_down"/>
            </button>
        </h3>

        <transition name="fade">
            <div class="item_box" v-if="visibility.baggage">


                <label>
                    <input name="toggle" type="checkbox"/>
                    <div class="flex-container">
                        <p>Багаж включён</p>
                        <span class="price">цена</span>
                    </div>
                </label>

                <input type="range" id="slider" min="0" max="100" value="0">
            </div>

        </transition>
    </div>
</template>

<style scoped lang="scss">
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