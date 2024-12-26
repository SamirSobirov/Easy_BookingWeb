<template>
  <div class="blog">
    <div class="blog__header">
      <h1>Блог</h1>

      <button>
        Все блоги
        <img src="/src/assets/icons/arrow-right.svg" alt="" />
      </button>
    </div>

    <div class="Cards">
      <div class="card">
        <img src="/src/assets/images/Hills.svg" alt="" />

        <div class="container">
          <p>Город на холмах</p>

          <span class="span"
            >За несколько последних лет ОАЭ превратились из пустыни в место, где
            хочется проводить свой долгожданный отпуск вновь и вновь...</span
          >
          <div class="date_box">
            <span class="date">24.07.2023</span>
            <span>#Переплёты</span>
          </div>
        </div>
      </div>
      <!-- 2 -->
      <div class="card">
        <img src="/src/assets/images/mountain.svg" alt="" />

        <div class="container">
          <p>Тайны наскальных рисунков</p>

          <span class="span"
            >За несколько последних лет ОАЭ превратились из пустыни в место, где хочется проводить свой долгожданный отпуск вновь и вновь...</span
          >
          <div class="date_box">
            <span class="date">24.07.2023</span>
            <span>#Переплёты</span>
          </div>
        </div>
      </div>
      <!-- 3 -->
      <div class="card">
        <img src="/src/assets/images/meeting.svg" alt="" />

        <div class="container">
          <p>Город на холмах</p>

          <span class="span"
            >За несколько последних лет ОАЭ превратились из пустыни в место, где
            хочется проводить свой долгожданный отпуск вновь и вновь...</span
          >
          <div class="date_box">
            <span class="date">24.07.2023</span>
            <span>#Переплёты</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.blog {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 1128px;
  margin: 80px auto 0;

  .blog__header {
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
      height: 338px;
      background-color: #ffffffbd;
      border-radius: 20px;
      border: 1px solid white;
      margin: 10px;
      border-radius: 10px;
      padding: 10px;
      .container {
        padding: 12px 15px;

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 5px;
        max-width: 100%;
        overflow: hidden;

        p {
          color: #23282d;
          font-family: Mulish;
          font-weight: 600;
          font-size: 18px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          max-width: 100%;
        }

        .span {
          color: #9399a8;
          font-size: 14px;
  
          align-items: center;
          text-align: left;
          justify-content: flex-start;
          display: flex;
          white-space: normal;
          font-weight: 100;
          overflow-wrap: break-word;
          max-width: 100%;
          line-height: 20px;
        }

        .date_box {
          margin-top: 2px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 5px 0;

          span {
            border: none;
            background-color: #edeff5;
            padding: 4px 8px;
            border-radius: 8px;
            display: block;
            color: #9399a8;
            font-family: Mulish;
            font-size: 14px;
            font-weight: 200;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }

          .date {
            font-weight: 200;
            font-size: 14px;
            border: none;
            background-color: #ffffffaa;
          }
        }
      }
    }
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Blog",
});
</script>
