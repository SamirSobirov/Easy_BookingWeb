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
.proftable {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  max-width: 1128px;
  margin: 60px auto 0;
  background: #ffffffaf;
  height: 256px;
  border-radius: 24px;
  padding: 20px;

  .proftableMain {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    gap: 80px;

    .boxFirst {
      padding: 30px 30px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      text-align: left;

      h1 {
        font-size: 24px;
        line-height: 32px;
        color: #000000;
        margin-bottom: 10px;
        font-weight: 700;
      }

      p {
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        color: #9399a8;
        text-align: left;
        margin-bottom: 20px;
      }

      .floating-label-input {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 12px;
        margin-bottom: 20px;

        .input-container {
          display: flex;
          align-items: center;
          gap: 10px;
          position: relative;
          width: 100%;
          max-width: 400px;
        }

        .input-wrapper {
          flex: 1;
          position: relative;
        }

        label {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 16px;
          color: #707070;
          transition: all 0.3s ease;
          pointer-events: none;
        }

        label.active {
          top: 8px;
          font-size: 12px;
          color: #80dbeb;
        }

        .input-field {
          width: 325px;
          height: 48px;
          padding: 8px 16px;
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          font-size: 16px;
          outline: none;
          transition: border-color 0.3s;

          &:focus {
            border-color: #80dbeb;
          }
        }

        .submit-button {
          height: 48px;
          padding: 12px 24px;
          background-color: #00b8d7;
          color: #ffffff;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          cursor: pointer;
          transition: background-color 0.3s;

          &:hover {
            background-color: #008fb3;
          }
        }
      }

      .agreements {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 8px;
        margin-top: 10px;

        input[type="checkbox"] {
          width: 16px;
          height: 16px;
          cursor: pointer;
        }

        label {
          font-size: 14px;
          color: #333;
          cursor: pointer;

          a {
            color: #007bff;
            text-decoration:underline;

            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }

    .boxSecond {
      img {
        max-width: 100%;
        height: auto;
      }
    }
  }
}
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
