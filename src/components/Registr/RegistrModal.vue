<template>
  <div class="modal-backdrop" @click.self="close">
    <div class="modal-content">
      <button class="close-button" @click="close">×</button>
      <h1 class="modal-title">Вход</h1>
      <form class="login-form">
        <div class="form-group">
  <div class="floating-input">
    <input type="email" id="email" class="form-control" required />
    <label for="email">Email</label>
  </div>
</div>

<div class="form-group">
  <div class="floating-input">
    <input type="password" id="password" class="form-control" required />
    <label for="password">Пароль</label>
  </div>
</div>

        <div class="form-footer">
          <label class="checkbox-label">
            <input type="checkbox" />
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

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SignModal",
  emits: ["close"],
  setup(_, { emit }) {
    const close = () => {
      emit("close");
    };

    return {
      close,
    };
  },
});
</script>

<style lang="scss" scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 30px 20px;
  border-radius: 30px;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  position: relative;

  .modal-title {
    font-size: 24px;
    font-weight: 200;
    text-align: center;

    color: #7a7a7a;
  }

  .login-form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
    .form-group {
  margin-bottom: 20px;

  .floating-input {
    position: relative;

    .form-control {
      width: 100%;
      padding: 12px 14px;
      border: 1px solid #d9d9d9;
      border-radius: 8px;
      font-size: 16px;
      outline: none;
      background: transparent;
      position: relative;
      z-index: 1;

      &:focus {
        border-color: #00b8d7;
        box-shadow: 0 0 5px rgba(0, 184, 215, 0.5);
      }

      &:focus + label {
        transform: translateY(-20px);
        font-size: 10px;
        color: #00b8d7;
      }
    }

    label {
      position: absolute;
      top: 50%;
      left: 14px;
      transform: translateY(-50%);
      font-size: 16px;
      color: #9e9e9e;
      pointer-events: none;
      transition: all 0.2s ease;
    }
  }
}



    .form-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .checkbox-label {
        font-size: 14px;
        color: #000000;
        display: flex;
        font-family: Mulish, sans-serif;
        align-items: center;
        gap: 8px;

        input[type="checkbox"] {
          appearance: none;
          width: 18px;
          height: 18px;

          border: 1px solid #d9d9d9;
          border-radius: 4px;
          cursor: pointer;
          position: relative;

          &:hover {
            border: 1px solid #00b8d7;
            background-color: #00b7d723;
          }

          &:checked {
            background-color: #00b8d7;
            border-color: #00b8d7;

            &::after {
              content: "";
              position: absolute;
              top: 38%;
              left: 50%;
              transform: translate(-50%, -50%) rotate(45deg);
              width: 6px;
              height: 12px;
              border: 1px solid white;
              border-width: 0 2px 2px 0;
              border-radius: 2px;
            }
          }
        }
      }

      .forgot-password {
        font-size: 14px;
        color: #7a7a7a;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    .btn-primary {
      background-color: #00b7d7b0;
      color: white;
      border: none;
      padding: 15px;
      border-radius: 8px;
      width: 100%;
      font-size: 16px;
      cursor: pointer;

      &:hover {
        background-color: #00b8d7;
      }
    }
  }

  .modal-footer {
    text-align: center;
    margin-top: 10px;
    font-size: 14px;
    color: #7a7a7a;

    .register-link {
      color: #00b8d7;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}

.close-button {
  position: absolute;
  top: 15px;
  right: 20px;
  background: none;
  border: 1px solid #7a7a7a;
  border-radius: 9999px;
  width: 25px;
  height: 25px;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0px 2px 25px 3px;
  font-size: 24px;

  font-weight: 100;
  cursor: pointer;
  color: #7a7a7a;
}
</style>
