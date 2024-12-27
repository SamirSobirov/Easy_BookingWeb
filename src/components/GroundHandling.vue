<template>
    <div class="GroundHandling_box">
        <div class="GroundHandling__header">
            <h1>Наземное обслуживание</h1>
            <p>Мы предоставляем полный спектр услуг наземного обслуживания:</p>
            <div class="container">
                <div>
                    
                    <img src="/src/assets/icons/Profile.svg" alt="">
                    <p>Индивидуальные и групповые трансферы</p>
                </div>
                <div>
                    
                    <img src="/src/assets/icons/Chat.svg" alt="">
                    <p>Экскурсии с русскоговорящими гидами</p>
                </div>
                <div>
                    
                    <img src="/src/assets/icons/Security.svg" alt="">
                    <p>Аренда автомобилей</p>
                </div>
                <div>
                    
                    <img src="/src/assets/icons/Suitcase.svg" alt="">
                    <p>VIP-обслуживание в аэропортах</p>
                </div>
                <div>
                    
                    <img src="/src/assets/icons/Locations.svg" alt="">
                    <p>Бронирование ресторанов и развлекательных мероприятий</p>
                </div>
            </div>
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
  margin: 230px auto 0px ; 
  position: relative; 
  top: 50px; 
  transform: translateY(-50%); 
  .GroundHandling__header {
  text-align: left;
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
  .container {
    margin-top: 30px;
      display: flex;
      display: grid;
      margin-left: -24px;
      gap: 20px;
      grid-template-columns: repeat(3, 1fr); 
      div {
        padding: 28px 0 0 28px;
          width: 365px;
          border: 1px solid #FFFFFF59;
          border-radius: 24px;
          height: 176px;
          background: #ffffffc2;
          display: flex;
          flex-direction: column;
          gap: 20px;

          p {
            font-size: 18px;
            color: #000000;
            font-weight: 600;
            line-height: 26px;
          }

          img {
            width: 52px;
            height: 52px;
          }
      }
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
