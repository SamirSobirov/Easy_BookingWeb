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
          <img class="like_img" src="/src/assets/images/like.svg" alt="" />
          <img src="/src/assets/images/person (2).svg" alt="" />
        </div>
        <div>
          <img src="/src/assets/images/baloon.svg" alt="" />
          <p>Легко и беззаботно</p>
          <span
            >Вы платите ту цену, которую видите на экране. Можно спокойно
            готовиться к поездке</span
          >
        </div>
        <div>
          <img src="/src/assets/images/crown.svg" alt="" />
          <p>Планируйте уверенно</p>
          <span
            >Выгодные предложения, онлайн-страхованние, календарь и карта низких
            цен</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Advantages",
});
</script>
