<template>
  <div class="proftable">
    <div class="proftableMain">
      <div class="boxFirst">
        <h1>Рассылка с выгодными предложениями</h1>
        <p>
          Эксклюзивные акции, лучшие лайфхаки, заботливые рекомендации от
          экспертов <br />
          EasyBooking Можно спокойно готовиться.
        </p>

        <div class="floating-label-input">
          <div class="input-container">
            <div class="input-wrapper">
              <label :class="{ active: isFocused || email }" for="email"
                >Электронная почта</label
              >
              <input
                id="email"
                type="email"
                v-model="email"
                @focus="isFocused = true"
                @blur="isFocused = false"
                class="input-field"
              />
            </div>
            <button class="submit-button" @click="subscribe">
              Подписаться
            </button>
          </div>
        </div>

        <div class="agreements">
          <input type="checkbox" id="agreement-checkbox" />
          <label for="agreement-checkbox">
            Я принимаю <a href="#">условия</a> пользовательского соглашения и
            обработку персональных данных
          </label>
        </div>
      </div>

      <div class="boxSecond">
        <img src="/src/assets/images/people2.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// #agreement-checkbox {
//   background-color: #fff;
// }
</style>    

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "proftable",
  setup() {
    const email = ref("");
    const isFocused = ref(false);

    const subscribe = () => {
      if (email.value) {
      } else {
        alert("Введите корректный email");
      }
    };

    return {
      email,
      isFocused,
      subscribe,
    };
  },
});
</script>
