<template>
     <div id="app">
       <HeroSection msg="Welcome to EasyBooking!" />
       <HeaderMainButtons 
         :images="imageList" 
         @button-click="handleButtonClick" 
       />
       <HeaderMainSearch />
     </div>
   </template>
   
   <script setup lang="ts">
   import HeroSection from './components/HeroSection.vue';
   import HeaderMainButtons from './components/HeaderMainButtons.vue';
   import HeaderMainSearch from './components/HeaderMainSearch.vue';
   
   const imageList = [
        { url: new URL('./assets/images/DubaiCountry.svg', import.meta.url).href },
        { url: new URL('./assets/images/BaliCountry.svg', import.meta.url).href },
        { url: new URL('./assets/images/SochiCountry.svg', import.meta.url).href },
     { url: new URL('./assets/images/SaintPetersburgCountry.svg', import.meta.url).href },
     { url: new URL('./assets/images/AstanaCountry.svg', import.meta.url).href },
   ];
   const handleButtonClick = (index: number) => {
     console.log("Button clicked at index:", index);
   };
   </script>
   
   <style lang="scss" scoped>

   </style>
   