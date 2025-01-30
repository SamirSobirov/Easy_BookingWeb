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

                <label>
                    <p>Всего
                        <span class="time" id="time">до {{ timeDisplay || 0 }}ч</span>
                    </p>
                </label>

                <input :class="{'slider-full': timeDisplay === 23}" type="range" id="slider" min="0" max="23" value="0" @input="updateTime">
            </div>

        </transition>
    </div>
</template>


<script setup lang="ts">
import { ref} from 'vue';

const timeDisplay = ref(0);
const visibility = ref({
    transfers: true,
    baggage: true
});

const toggleVisibility = (section: keyof typeof visibility.value) => {
    visibility.value[section] = !visibility.value[section];
};

const updateTime = (e:any) => {
        const hours = e?.target?.value;
    if ( hours) {
        timeDisplay.value = hours;
    }
    console.log()
};


</script>


<style scoped lang="scss">

</style>