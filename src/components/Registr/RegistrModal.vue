<template>
    <div class="modal-backdrop" @click.self="close">
      <div class="modal-content">
        <button class="close-button" @click="close">×</button>
        <h1>Sign In</h1>
        <p>Это модальное окно для входа или регистрации.</p>
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
  
  <style scoped>
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
    padding: 20px;
    border-radius: 8px;
    max-width: 400px;
    width: 100%;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
  }
  </style>
  