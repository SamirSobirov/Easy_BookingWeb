<template>
  <div class="advantages">
    <div class="advantages__header">
      <h1>Преимущества компаний</h1>

      <div class="cards">
        <div>
          <img src="/src/assets/images/bag.svg" alt="" />
          <p>Определились с направлением?</p>
          <span
            >Поиск и бронирование авиабилетов без лишних хлопот и ожиданий</span
          >
        </div>
        <div>
          <img src="/src/assets/images/EasyandPrivate.svg" alt="" />
          <p>Легко и беззаботно</p>
          <span
            >Поиск и бронирование авиабилетов без лишних хлопот и ожиданий</span
          >
        </div>
        <div class="person_img">
          <img class="like_img" src="/src/assets/images/like.svg" alt="">
          <img src="/src/assets/images/person (2).svg" alt=""></div>
        <div>
          <img src="/src/assets/images/baloon.svg" alt="" />
          <p>Легко и беззаботно</p>
          <span
            >Вы платите ту цену, которую видите на экране. Можно спокойно готовиться к поездке</span
          >
        </div>
        <div>
          <img src="/src/assets/images/crown.svg" alt="" />
          <p>Планируйте уверенно</p>
          <span
            >Выгодные предложения, онлайн-страхованние, календарь и карта низких цен</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.advantages {

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 1128px;
  margin: 54px auto 0;

  .advantages__header {
    width: 100%;

    h1 {
      text-align: left;
      margin: 0;
    }

    .cards {
      margin-top: 30px;
      display: grid;
      grid-template-columns: repeat(3, 360px);
      grid-template-rows: 195px 195px;
      gap: 10px;

      div {
        display: flex;
        flex-direction: column;
        background: #ffffffdd;
        text-align: left;
        padding: 10px 28px;
        border-radius: 8px;
        justify-content: flex-start;
        align-items: flex-start;
        width: 360px;
        height: 194px;
        gap: 10px;


        img {
          width: 80px;
          height: 80px;
        }

        p {
          text-align: left;
          font-size: 18px;
          font-family: Mulish, sans-serif;
        }
        span {
          text-align: left;
          color: #9399a8;
          font-size: 14px;
        }
      }

      .person_img {
  grid-row: span 2; 
  height: 408px;
  width: 360px;
  
  border-radius: 8px; 
  overflow: hidden; 

  .like_img {
          width: 100px;
          height: 100px;
          margin: 21px 0 0 21px;
        }

  img {
    width: 100%; 
    height: 100%;
    object-fit: cover; 
  }
}

div:not(.person_img) {
  height: 195px;
  width: 360px;
}

    }
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Advantages",
});
</script>
