<template>
    <div class="modal-backdrop" @click.self="close">
      <div class="modal-content">
        <button class="close-button" @click="close">×</button>
        <h1 class="modal-title">Вход</h1>
        <form class="login-form">
          <div class="form-group">
            <input type="email" placeholder="Email" class="form-control" />
          </div>
          <div class="form-group password-group">
            <input type="password" placeholder="Пароль" class="form-control" />
            <button type="button" class="toggle-password">
            </button>
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
    border-radius: 16px;
    max-width: 400px;
    width: 100%;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    position: relative;
  
    .modal-title {
      font-size: 24px;
      font-weight: bold;
      text-align: center;
      margin-bottom: 20px;
    }
  
    .login-form {
      .form-group {
        margin-bottom: 15px;
        position: relative;
  
        .form-control {
          width: 100%;
          padding: 10px 14px;
          border: 1px solid #d9d9d9;
          border-radius: 8px;
          font-size: 16px;
          outline: none;
  
          &:focus {
            border-color:#00b8d7;
            box-shadow: 0 0 5px rgba(0, 153, 255, 0.5);
          }
        }
  
        .password-group {
          display: flex;
          align-items: center;
  
          .toggle-password {
            background: none;
            border: none;
            cursor: pointer;
            position: absolute;
            right: 10px;
            top: 50%;
            transform: translateY(-50%);
            font-size: 16px;
            color: #7a7a7a;
          }
        }
      }
  
      .form-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
  
        .checkbox-label {
          font-size: 14px;
          color: #7a7a7a;
          display: flex;
          align-items: center;
  
          input {
            margin-right: 8px;
          }
        }
  
        .forgot-password {
          font-size: 14px;
          color: #00b8d7;
          text-decoration: none;
  
          &:hover {
            text-decoration: underline;
          }
        }
      }
  
      .btn-primary {
        background-color: #00b8d7;
        color: white;
        border: none;
        padding: 10px;
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
    border: 1px solid black;
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
  
    &:hover {
      color: #ff0000;
    }
  }
  </style>
  