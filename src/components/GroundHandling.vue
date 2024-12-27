<template>
    <div class="GroundHandling_box">
        <div class="GroundHandling__header">
            <h1>Наземное обслуживание</h1>
            <p>Мы предоставляем полный спектр услуг наземного обслуживания:</p>

        </div>
    </div>
</template>


<style lang="scss" scoped>
.GroundHandling_box {
  display: flex;
  flex-direction: column; 
  justify-content: flex-start; 
  align-items: flex-start;
  padding: 20px;
  max-width: 1135px;

  margin: 100px auto ; 
  left: 12px;
  position: relative; 
  top: 50%; 
  transform: translateY(-50%); 
  .GroundHandling__header {
  text-align: left;
  margin: 0; 
  padding: 0; 
  width: 100%; 

  h1 {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 10px;
    color: #333;
  }

  p {
    font-size: 14px;
    // font-family: Mulish;
    line-height: 20px;
    font-weight: 100;
    line-height: 1.5;
    color: #666;
  }
}

}

</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "GroundHandling",
});
</script>
