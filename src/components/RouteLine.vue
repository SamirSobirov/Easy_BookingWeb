<template>
    <div class="route_line">
        <div>
            <div class="airport-code">TAS</div>
            <div class="route"></div>
            <div class="airport-code">LED</div>
        </div>
        <span class="way">в пути 4ч 35мин</span>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.route_line {
    div {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-top: -15px;
    }

    .route {
        flex-grow: 1;
        width: 165px;
        border-bottom: 2px dashed #838C97;
        margin-top: 2px;
        margin-bottom: 20px;
    }

    span {
        font-size: 12px;
        color: #9399A8;
    }
}
</style>