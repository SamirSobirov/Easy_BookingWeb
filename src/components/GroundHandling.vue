<template>
    <div class="GroundHandling_box">
        <div class="GroundHandling__header">
            <h1>Наземное обслуживание</h1>
            <p>Мы предоставляем полный спектр услуг наземного обслуживания:</p>
            <div class="container">
                <div v-for="(service, index) in services" :key="index">
                    <img :src="service.icon" :alt="service.alt"/>
                    <p>{{ service.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const services = [
    {
        icon: "/icons/Profile.svg",
        alt: "Индивидуальные и групповые трансферы",
        description: "Индивидуальные и групповые трансферы",
    },
    {
        icon: "/icons/Chat.svg",
        alt: "Экскурсии с русскоговорящими гидами",
        description: "Экскурсии с русскоговорящими гидами",
    },
    {
        icon: "/icons/Security.svg",
        alt: "Аренда автомобилей",
        description: "Аренда автомобилей",
    },
    {
        icon: "/icons/Suitcase.svg",
        alt: "VIP-обслуживание в аэропортах",
        description: "VIP-обслуживание в аэропортах",
    },
    {
        icon: "/icons/Locations.svg",
        alt: "Бронирование ресторанов и развлекательных мероприятий",
        description: "Бронирование ресторанов и развлекательных мероприятий",
    },
];
</script>

<style lang="scss" scoped></style>
