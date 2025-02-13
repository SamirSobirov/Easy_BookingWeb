<template>
    <div class="blog">
        <div class="blog__header">
            <h1>Блог</h1>
            <button>
                Все блоги
                <img src="/src/assets/icons/arrow-right.svg" alt="" />
            </button>
        </div>

        <div class="Cards">
            <div v-for="(card, index) in cards" :key="index" class="card">
                <img :src="card.image" :alt="card.alt" />
                <div class="container">
                    <p>{{ card.title }}</p>
                    <span class="span">{{ card.description }}</span>
                    <div class="date_box">
                        <span class="date">{{ card.date }}</span>
                        <span>{{ card.tag }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const cards = [
    {
        image: "/public/images/Hills.svg",
        alt: "Hills",
        title: "Город на холмах",
        description: "За несколько последних лет ОАЭ превратились из пустыни в место, где хочется проводить свой долгожданный отпуск вновь и вновь...",
        date: "24.07.2023",
        tag: "#Переплёты",
    },
    {
        image: "/public/images/mountain.svg",
        alt: "Mountain",
        title: "Тайны наскальных рисунков",
        description: "За несколько последних лет ОАЭ превратились из пустыни в место, где хочется проводить свой долгожданный отпуск вновь и вновь...",
        date: "24.07.2023",
        tag: "#Отел",
    },
    {
        image: "/public/images/meeting.svg",
        alt: "Meeting",
        title: "Город на холмах",
        description: "За несколько последних лет ОАЭ превратились из пустыни в место, где хочется проводить свой долгожданный отпуск вновь и вновь...",
        date: "24.07.2023",
        tag: "#Тур",
    },
];
</script>

<style lang="scss" scoped></style>
