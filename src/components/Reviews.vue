<template>
    <div class="reviews">
        <div class="reviews__header">
            <h1>Последние отзывы</h1>

            <button>
                Все товары
                <img src="/src/assets/icons/arrow-right.svg" alt="Arrow Right" />
            </button>
        </div>

        <div class="container">
            <div class="cards">
                <div v-for="(review, index) in reviews" :key="index" :class="review.cardClass">
                    <div class="card-content">
                        <div class="card-header">
                            <img :src="review.icon" :alt="review.category" />
                            <span class="category">{{ review.category }}</span>
                        </div>
                        <p class="card-text">{{ review.text }}</p>
                        <div class="card-footer">
                            <div class="author">
                                <img :src="review.author.image" :alt="review.author.name" class="author-image" />
                                <div>
                                    <p class="author-name">{{ review.author.name }}</p>
                                    <p class="author-position">{{ review.author.position }}</p>
                                </div>
                            </div>
                            <div class="rating">{{ review.rating }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const reviews = ref([
    {
        cardClass: "cardFirst",
        icon: "/src/assets/icons/hotel_icon.svg",
        category: "Отель",
        text: "Часто заказываем туры через EASYBOOKING, очень хорошее турагентство! Никаких проблем, всегда качественно проконсультируют, быстро оформляют документы. Вообще при заказе тура не переживаешь...",
        author: {
            image: "/src/assets/images/person_dev.svg",
            name: "Сарвар Тулаганов",
            position: "Программист",
        },
        rating: "★★★★★",
    },
    {
        cardClass: "cardSecond",
        icon: "/src/assets/icons/plane-Outline.svg",
        category: "Перелёт",
        text: "Часто заказываем туры через EASYBOOKING, очень хорошее турагентство! Никаких проблем, всегда качественно проконсультируют, быстро оформляют документы. Вообще при заказе тура не переживаешь...",
        author: {
            image: "/src/assets/images/per_dev2.svg",
            name: "Самир Собиров",
            position: "Программист",
        },
        rating: "★★★★☆",
    },
]);
</script>

<style scoped></style>
