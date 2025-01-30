<template>
    <div class="sidebar_item">
        <h3 @click="toggleVisibility('baggage')" style="cursor: pointer;">
            Время в пути
            <button class="hideButton" @click="toggleVisibility('baggage')">
                <img :class="{ rotated: !visibility.baggage }" src="/src/assets/icons/arrow_down.svg"
                     alt="arrow_down"/>
            </button>
        </h3>

        <transition name="fade">
            <div class="item_box" v-if="visibility.baggage">

              <PriceSlider />
            </div>

        </transition>
    </div>
</template>


<script setup lang="ts">
import { ref} from 'vue';
import PriceSlider from "../../../../components/PriceSlider.vue";

const visibility = ref({
    transfers: true,
    baggage: true
});

const toggleVisibility = (section: keyof typeof visibility.value) => {
    visibility.value[section] = !visibility.value[section];
};




</script>


<style scoped lang="scss">

</style>