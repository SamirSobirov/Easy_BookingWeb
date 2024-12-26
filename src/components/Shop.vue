<template>
    <div class="shop">
        <div class="shop__header">
            <h1>
                EASYBOOKING Shop
            </h1>

            <button>Все товары  
                <img src="/src/assets/icons/arrow-right.svg" alt="">
            </button>
        </div>

    </div>
</template>


<style lang="scss" scoped>
.shop {
display: flex;
flex-direction: column;
align-items: flex-start;
width: 100%;
max-width: 1128px;
margin: 80px auto 0;

.shop__header {
  width: 100%;
  display: flex;
  justify-content: space-between;

  h1 {
    text-align: left;
    margin: 0;
  }

  button {
    background-color: #ffffffaa;
    border: 2px solid #FFFFFFCC;
    border-radius: 50px;
    width: 141px;
    height: 45px;
    color: #00B8D7;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 10px;
    font-size: 14px;
    white-space: nowrap;
    padding-left: 10px;


    img {
    // width: 20px;
    // height: 20px;
    border: 1px solid white;
    background-color: #FFFFFFA6;
    border-radius: 50%;
    padding: 5px 5px;
    }
  }
  
}
}
  </style>


<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Shop",
});
</script>
