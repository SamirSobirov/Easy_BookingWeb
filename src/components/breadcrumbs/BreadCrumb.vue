<template>
    <div class="breadcrumb">
        <button class="back-button" @click="goBack">
            <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xOS41IDEyaC0xNW0wIDBsNS42MjUtNk00LjUgMTJsNS42MjUgNiIvPjwvc3ZnPg=="
                alt="Назад"
            />
        </button>
        <nav class="breadcrumb-nav">
            <template v-for="(item, index) in breadcrumbs" :key="index">
                <button v-if="item.path" class="breadcrumb-item" @click="goTo(item.path)">
                    {{ item.label }}
                </button>
                <span v-else class="breadcrumb-item active">{{ item.label }}</span>
                <span v-if="index < breadcrumbs.length - 1" class="breadcrumb-separator">/</span>
            </template>
        </nav>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

defineProps<{
    breadcrumbs: { label: string; path?: string }[];
}>();

const goTo = (path: string) => {
    router.push(path);
};

const goBack = () => {
    router.back();
};
</script>

<style scoped lang="scss">

.breadcrumb-item.active {
    font-weight: 500;
    font-family: Mulish, sans-serif;
    color: #6D7586;

    &::hover {
        background-color: transparent;
    }
}

.breadcrumb-separator {
    margin: 0 5px;
    color: #7a7a7a;

}
</style>
