<template>
    <div>
      <h1>Привет из BaseComponent!</h1>
    </div>
  </template>
  
  <style lang="scss" scoped>
  h1 {
    color: #80dbeb;
  }
  </style>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'mainCards',
  });
  </script>
  