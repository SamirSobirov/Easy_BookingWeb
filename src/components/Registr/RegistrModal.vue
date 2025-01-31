<template>
    <div class="modal-backdrop" @click.self="close">
        <div class="modal-content">
            <button class="close-button" @click="close">×</button>
            <h1 class="modal-title">Вход</h1>
            <form class="login-form">
                <div class="form-group">
                    <div class="floating-input">
                        <input type="email" id="email" class="form-control" required/>
                        <label for="email">Email</label>
                    </div>
                </div>

                <div class="form-group">
                    <div class="floating-input">
                        <input type="password" id="password" class="form-control" required/>
                        <label for="password">Пароль</label>
                    </div>
                </div>

                <div class="form-footer">
                    <label class="checkbox-label">
                        <input type="checkbox"/>
                        Запомнить меня
                    </label>
                    <a href="#" class="forgot-password">Забыли пароль?</a>
                </div>
                <button type="submit" class="btn-primary">Войти</button>
            </form>
            <div class="modal-footer">
                Нет аккаунта? <a href="#" class="register-link">Регистрация</a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {defineEmits} from 'vue';

const emit = defineEmits(["close"]);
const close = () => {
    emit("close");
};
</script>


<style lang="scss" scoped></style>
