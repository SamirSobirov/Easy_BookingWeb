<template>
  <div class="reviews">
    <div class="reviews__header">
      <h1>Последние отзывы</h1>

      <button>
        Все товары
        <img src="/src/assets/icons/arrow-right.svg" alt="" />
      </button>
    </div>

    <div class="container">
      <div class="cards">
        <div class="cardFirst">
          <div class="card-content">
            <div class="card-header">
              <img src="/src/assets/icons/hotel_icon.svg" alt="" />
              <span class="category">Отель</span>
            </div>
            <p class="card-text">
              Часто заказываем туры через EASYBOOKING, очень хорошее
              турагентство! Никаких проблем, всегда качественно
              проконсультируют, быстро оформляют документы. Вообще при заказе
              тура не переживаешь...
            </p>
            <div class="card-footer">
              <div class="author">
                <img
                  src="/src/assets/images/person_dev.svg"
                  alt="Сарвар Тулаганов"
                  class="author-image"
                />
                <div>
                  <p class="author-name">Сарвар Тулаганов</p>
                  <p class="author-position">Программист</p>
                </div>
              </div>
              <div class="rating">★★★★★</div>
            </div>
          </div>
        </div>
        <div class="cardSecond">
          <div class="card-content">
            <div class="card-header">
              <img src="/src/assets/icons/plane-Outline.svg" alt="" />
              <span class="category">Перелёт</span>
            </div>
            <p class="card-text">
              Часто заказываем туры через EASYBOOKING, очень хорошее
              турагентство! Никаких проблем, всегда качественно
              проконсультируют, быстро оформляют документы. Вообще при заказе
              тура не переживаешь...
            </p>
            <div class="card-footer">
              <div class="author">
                <img
                  src="/src/assets/images/person_dev.svg"
                  alt="Сарвар Тулаганов"
                  class="author-image"
                />
                <div>
                  <p class="author-name">Сарвар Тулаганов</p>
                  <p class="author-position">Программист</p>
                </div>
              </div>
              <div class="rating">★★★★☆</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Reviews",
});
</script>
