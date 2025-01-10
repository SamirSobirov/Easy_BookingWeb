    <template>
        <div class="modal">
        <div class="modal-content">
            <h2>Sign In</h2>
            <p>Sign in to your account.</p>
            <button class="close-button" @click="closeModal">Close</button>
        </div>
        </div>
    </template>
    
    <script lang="ts">
    import { defineComponent } from "vue";
    
    export default defineComponent({
        name: "SignIn",
        emits: ["close"], // Объявляем событие для закрытия модального окна
        setup(_, { emit }) {
        const closeModal = () => {
            emit("close"); // Генерируем событие закрытия
        };
    
        return {
            closeModal,
        };
        },
    });
    </script>
    
    <style lang="scss" scoped>
    .modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .modal-content {
        background: white;
        padding: 20px;
        border-radius: 5px;
        text-align: center;
    }
    
    .close-button {
        margin-top: 10px;
    }
    </style>
    