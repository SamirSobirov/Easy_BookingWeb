<template>
     <div id="app">
       <HeroSection msg="Welcome to EasyBooking!" />
       <HeaderMainButtons 
         :images="imageList" 
         @button-click="handleButtonClick" 
       />
     </div>
   </template>
   
   <script setup lang="ts">
   import HeroSection from './components/HeroSection.vue';
   import HeaderMainButtons from './components/HeaderMainButtons.vue';
   
   const imageList = [
     { url: "https://example.com/image1.jpg" },
     { url: "https://example.com/image2.jpg" },
     { url: "https://example.com/image3.jpg" },
     { url: "https://example.com/image4.jpg" },
     { url: "https://example.com/image5.jpg" },
   ];
   
   const handleButtonClick = (index: number) => {
     console.log("Button clicked at index:", index);
   };
   </script>
   
   <style lang="scss" scoped>

   </style>
   