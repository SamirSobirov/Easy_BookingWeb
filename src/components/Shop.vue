<template>
  <div class="shop">
    <div class="shop__header">
      <h1>EASYBOOKING Shop</h1>

      <button>
        Все товары
        <img src="/src/assets/icons/arrow-right.svg" alt="" />
      </button>
    </div>

    <div class="Cards">
      <div class="card">
        <img src="/src/assets/images/Shop_bag.svg" alt="" />

        <div class="container">
          <div class="ball">400 балл</div>

          <span class="price">800 000 UZS </span>
          <span>Чехол на чемодан</span>
        </div>
      </div>
      <!-- 2 -->
      <div class="card">
        <img src="/src/assets/images/Shop_pillow.svg" alt="" />

        <div class="container">
            <div class="div">
                <span class="price_ball">1 000 000 UZS </span>
                <span class="ball">400 балл </span>
    </div>

          <span class="price">800 000 UZS </span>
          <span>Подушка для подголовника</span>
        </div>
      </div>
      <!-- 3 -->
      <div class="card">
        <img src="/src/assets/images/Shop_Carryingbag.svg" alt="" />

        <div class="container">
          <div class="ball">400 балл</div>

          <span class="price">800 000 UZS </span>
          <span>Сумка-переноска</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.shop {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 1128px;
  margin: 80px auto 0;

  .shop__header {
    width: 100%;
    display: flex;
    justify-content: space-between;

    h1 {
      text-align: left;
      margin: 0;
    }

    button {
      background-color: #ffffffaa;
      border: 2px solid #ffffffcc;
      border-radius: 50px;
      width: 141px;
      height: 45px;
      color: #00b8d7;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      gap: 10px;
      font-size: 14px;
      white-space: nowrap;
      padding-left: 10px;
    }
  }

  .Cards {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;

    .card {
      width: 365px;
      height: 100%;
      background-color: #ffffff7a;
      border-radius: 20px;
      border: 1px solid white;
      margin: 10px;
      border-radius: 10px;
      padding: 12px 0 0 0px;

      .container {
        padding: 12px 15px;
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 5px;

        .div {
            display: flex;
            align-items: center;
            gap: 6px;

            .price_ball {
            background-color: #FF3A3A1A;
          color: #EB5757;
          text-decoration: line-through;    
          border-radius: 6px;
          font-family: Mulish;

          gap: 20px;
          font-size: 13px;
          padding: 0px 10px;
        }

        .ball {
        background-color: #6A67F81F;
          color: #6A67F8;
          border-radius: 6px;
          font-family: Mulish;

          gap: 20px;
          font-size: 13px;
          padding: 0px 10px;
          
        }
        }

        .ball {
        background-color: #6A67F81F;
          color: #6A67F8;
          border-radius: 6px;
          font-family: Mulish;

          gap: 20px;
          font-size: 13px;
          padding: 5px 10px;
          
        }

    

        span {
          color: #9399a8;
          font-size: 20px;
          align-items: center;
          text-align: center;
          justify-content: center;
          display: flex;
          white-space: nowrap;
          gap: 10px;
          line-height: 28px;
        }

        .price {
          color: #23282d;
          font-weight: 700;
          font-size: 18px;
          line-height: 24px;
        }
      }
    }
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Shop",
});
</script>
