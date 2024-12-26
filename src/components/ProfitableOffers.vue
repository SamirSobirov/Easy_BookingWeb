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
  align-items: center;
  justify-content: center;
  max-width: 1128px;
  margin: 60px auto 0;
  background: #ffffffaf;
  height: 260px;
  border-radius: 24px;

  .proftableMain {
    display: flex;
    gap: 220px;
    align-items: center;
    justify-content: center;
    text-align: center;

    .boxFirst {
      display: flex;
      flex-direction: column;
      align-items: start;

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
        align-items: center;

        justify-content: center;
        text-align: justify;
      }
      .floating-label-input {
        .input-container {
            
            margin-top: 25px;
          position: relative;
          width: 325px;
          height: 50px;
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
          top: 15px;
          font-size: 12px;
          color: #80dbeb;
        }

        .input-field {

          width: 100%;
          padding: 8px;
          padding-top: 24px; 
            border: none;
          border-radius: 8px;
          font-size: 16px;
          outline: none;
          transition: border-color 0.3s;

          &:focus {
            border-color: #80dbeb;
          }
        }
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

    return {
      email,
      isFocused,
    };
  },
});
</script>
