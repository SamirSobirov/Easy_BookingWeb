<script setup lang="ts">
import {ref, onMounted, watch} from 'vue';
import {useRoute} from 'vue-router';

const route = useRoute();

const colors: string[] = ['violet', 'transparent', 'green', 'pink', 'blue', 'transparent'];
const minHeight: number = 125;
const maxHeight: number = 660;

interface SphereElement {
    size: number;
    className: string;
    position: string[];
}

const elements = ref<SphereElement[]>([]);

function generateSphere(): void {
    elements.value = [];
    for (let i = 0; i < colors.length; i++) {
        const size: number = getRandomNumber(minHeight, maxHeight);
        const position: string[] = getPosition();
        elements.value.push({size, className: colors[i], position});
    }
}

function getPosition(): string[] {
    const x: number = getRandomNumber(200, window.innerWidth);
    const y: number = getRandomNumber(0, window.innerHeight);
    return [
        getPercentage(window.innerWidth, x),
        getPercentage(window.innerHeight, y),
    ];
}

function getPercentage(total: number, val: number): string {
    return Math.ceil((val * 100) / total) + '%';
}

function getRandomNumber(min: number, max: number): number {
    const randomDecimal = Math.random();
    const range = max - min;
    return Math.floor(randomDecimal * range) + min;
}

watch(() => route.path, () => {
    generateSphere();
});

onMounted(() => {
    generateSphere();
});
</script>

<template>
    <div class="dynamic-bg">
        <TransitionGroup name="fade">
            <div
                v-for="el in elements"
                :class="['sphere', el.className]"
                :key="el.size"
                :style="{ width: `${el.size}px`, height: `${el.size}px`, left: el.position[0], top: el.position[1] }"
            ></div>
        </TransitionGroup>
    </div>
</template>


<style scoped lang="scss">
.dynamic-bg {
    position: fixed;
    overflow: hidden;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: #F1F8FD;

    .sphere {
        border-radius: 100%;
        position: absolute;
    }

    .violet {
        box-shadow: 4px -12px 19px 0px #FFFFFF87 inset;
        background: radial-gradient(96.36% 96.84% at 24.63% 38.89%, #FFFFFF 0%, #E6FBFE 0.01%, #709EFF 71.35%, #E4F9FF 100%);
    }

    .transparent {
        background: linear-gradient(180deg, rgba(206, 222, 254, 0.15) 0%, rgba(247, 248, 250, 0.15) 100%);
        border: 1.5px solid;
        border-image-source: linear-gradient(180deg, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0) 100%);
        box-shadow: 54px 0 100px 0 #525ECA1A inset, 2px 3px 84px 0 #0047FF0D;
    }

    .blue {
        background: radial-gradient(92.57% 92.97% at 30.24% 36.1%, #FFFFFF 0.01%, #9BFFFF 0%, #75EFFF 28.56%, #50DDFF 43.72%, #04BAF6 67.5%, #E4F9FF 100%);
        box-shadow: 4px -12px 19px 0px #FFFFFF2E inset;
    }

    .green {
        background: radial-gradient(70.16% 70.52% at 21.88% 28.61%, #40F7D6 0%, #00EFB6 50%, #19DBA1 75%, #00B988 100%);
        box-shadow: 4px -12px 19px 0px #39D2B099 inset, -17px 22px 20.799999237060547px 0px #01F8F86E inset;
    }

    .pink {
        background-image: linear-gradient(to left top, #bf6eb8, #cb75c4, #d77cd0, #e383dc, #ef8ae8, #f494ee, #fa9ef5, #ffa8fb, #ffb7fd, #ffc5fe, #ffd2ff, #ffe0ff);
    }
}
</style>