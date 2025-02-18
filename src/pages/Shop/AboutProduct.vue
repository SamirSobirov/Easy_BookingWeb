<template>
    <div>
        <h1>Информация о продукте</h1>
        <p>ID товара: {{ id }}</p>

    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
const id = route.params.id;
</script>
