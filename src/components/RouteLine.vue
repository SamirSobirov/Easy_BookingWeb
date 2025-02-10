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
    margin-top: 10px;
    div {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        gap: 10px;
    }

    .route {
        width: 165px;
        border-bottom: 2px dashed #838C97;
    }

    span {
        font-size: 12px;
        color: #9399A8;
    }
}
</style>