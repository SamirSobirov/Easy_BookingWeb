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
import { defineComponent } from "vue";

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
          image: "http://b2c-api2.globaltravel.space/files/new_b2c_bnr_2.png",
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
