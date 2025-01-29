<template>
    <div class="sidebar_item">
        <h3 @click="toggleVisibility('baggage')" style="cursor: pointer;">
            Альянсы
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
                        <p>Star Alliance</p>
                        <span class="price">цена</span>
                    </div>
                </label>

                <label>
                    <input name="toggle" type="checkbox"/>
                    <div class="flex-container">
                        <p>SkyTeam</p>
                        <span class="price">цена</span>
                    </div>
                </label>

                <label>
                    <input name="toggle" type="checkbox"/>
                    <div class="flex-container">
                        <p>One world</p>
                        <span class="price">цена</span>
                    </div>
                </label>

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