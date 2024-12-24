<template>
    <div class="slider-container">
      <vue-slider 
        v-model="value" 
        :min="min" 
        :max="max" 
        :step="step" 
        :tooltip="true"
        :dotSize="10"
      ></vue-slider>
      <div class="slider-buttons">
        <button @click="decrease">-</button>
        <button @click="increase">+</button>
      </div>
      <div class="value-display">Value: {{ value }}</div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import VueSlider from 'vue-slider-component';
  import 'vue-slider-component/theme/default.css';
  
  export default defineComponent({
    name: 'Slider',
    components: {
      VueSlider
    },
    setup() {
      const value = ref(50);
      const min = 0;
      const max = 100;
      const step = 1;
  
      const increase = () => {
        if (value.value < max) value.value += step;
      };
  
      const decrease = () => {
        if (value.value > min) value.value -= step;
      };
  
      return {
        value,
        min,
        max,
        step,
        increase,
        decrease
      };
    }
  });
  </script>
  
  <style lang="scss" scoped>
  .slider-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
  }
  
  .slider-buttons {
    display: flex;
    gap: 10px;
    margin-top: 10px;
  }
  
  button {
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  .value-display {
    margin-top: 10px;
    font-size: 16px;
  }
  </style>
  