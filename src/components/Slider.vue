<template>
  <div class="box">
    <div class="slider__box">
      <div class="slider">
        <div class="slider__content" :style="sliderStyle">
          <div class="slider__item" v-for="(item, index) in items" :key="index">
            <img :src="item.image" :alt="'Slide ' + index" />
          </div>
        </div>
      </div>
      <div class="slider__controls">
        <button @click="prevSlide" class="slider__button prev">
          <i class="fa fa-arrow-left"></i>
        </button>
        <button @click="nextSlide" class="slider__button next">
          <i class="fa fa-arrow-right"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";

interface SliderItem {
  image: string;
}

export default defineComponent({
  name: "Slider",
  data() {
    return {
      currentIndex: 0,
      items: [
        {
          image:
            "https://www.atorus.ru/sites/default/files/styles/head_carousel/public/2022-02/533e52.jpg.webp?itok=raXt4I0y",
        },
        { image: "https://via.placeholder.com/600x300?text=Slide+2" },
        { image: "https://via.placeholder.com/600x300?text=Slide+3" },
        { image: "https://via.placeholder.com/600x300?text=Slide+4" },
      ] as SliderItem[],
    };
  },
  computed: {
    sliderStyle() {
      return {
        transform: `translateX(-${this.currentIndex * 100}%)`,
        transition: "transform 0.5s ease",
      };
    },
  },
  methods: {
    nextSlide() {
      if (this.currentIndex < this.items.length - 1) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0;
      }
    },
    prevSlide() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      } else {
        this.currentIndex = this.items.length - 1;
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.box {
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;

  .slider__box {
    border-radius: 32px;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;
    width: 1128px;
    overflow: hidden;
  }

  .slider {
    display: flex;
    transition: transform 0.5s ease;
  }

  .slider__content {
    display: flex;
  }

  .slider__item {
    min-width: 100%;
    height: 300px;
    background-color: #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .slider__item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .slider__controls {
    position: absolute;
    top: 50%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    transform: translateY(-50%);
  }

  .slider__button {
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border: 0.5px solid white;
    border-radius: 50%;
    margin: 0px 20px;
    padding: 10px;

    cursor: pointer;
  }

  .slider__button:hover {
    background: rgba(0, 0, 0, 0.8);
  }
}
</style>
