<template>
  <BreadCrumb :breadcrumbs="[
    { label: 'Главная', path: '/' },
    { label: 'EASYBOOKING Shop'},
]"/>
  <div class="ShopHeader">
    <div class="boxShop">
      <h1>EASYBOOKING Shop</h1>
    </div>
    <div class="boxShop">
      Фундаментальные показатели для Акции и предложенияАкции и <br> предложенияАкции и предложения
    </div>
  </div>

  <div class="shop">
    <div class="shop__header">
      <h1>Все товары</h1>
      <div class="header-buttons">
        <button
          v-for="(button, index) in buttons"
          :key="index"
          :class="['button', { active: activeButton === button.type }]"
          @click="setActiveButton(button.type)"
        >
          {{ button.label }}
        </button>
      </div>
    </div>

    <hr style="height: 1px; width: 100%; margin-top: 16px; border: 1px solid #DADEEE;">

    <div class="Cards">
      <div
        v-for="(product) in displayedProducts"
        :key="product.id"
        class="card"
        @click="goToProduct(product.id)"
      >
        <img :src="product.image" :alt="product.name"/>
        <div class="container">
          <div v-if="product.points" class="ball">{{ product.points }} балл</div>
          <div v-if="product.hasPriceBall" class="div">
            <span class="price_ball">{{ product.priceBall }}</span>
            <span class="ball">{{ product.points }}</span>
          </div>
          <span class="price">{{ product.price }}</span>
          <span>{{ product.name }}</span>
        </div>
      </div>
    </div>

    <div class="cardFooter">
      <button @click="toggleProducts">
        <img src="/src/assets/icons/ToKnow.svg" alt="To Know"/>
        <span>{{ showMoreProducts ? "Скрыть" : "Показать ещё" }}</span>
      </button>
    </div>
  </div>
  <Footer/>
</template>

<script setup lang="ts">
import BreadCrumb from "../../components/breadcrumbs/BreadCrumb.vue";
import Footer from "../../components/Footer.vue";
import {ref, computed} from "vue";
import {useRouter} from 'vue-router';
import {buttons, initialProducts} from "../../constants";

const router = useRouter();

const goToProduct = (id: number) => {
  router.push({name: 'AboutProduct', params: {id}});
};

const activeButton = ref("flights");

const showMoreProducts = ref(false);
const initialCount = 9;

const displayedProducts = computed(() =>
  showMoreProducts.value ? initialProducts : initialProducts.slice(0, initialCount)
);

const toggleProducts = () => {
  showMoreProducts.value = !showMoreProducts.value;
};

const setActiveButton = (type: string) => {
  activeButton.value = type;
};
</script>

<style scoped lang="scss">
.header-buttons {
  user-select: none;
  display: flex;
  justify-content: center;
  gap: 12px;
  align-items: center;
  width: 370px;
  height: 48px;
  background-color: #FFFFFFA8;
  border: 1px solid white;
  border-radius: 12px;
  margin-right: -5px;
  padding: 5px 5px;

  button {
    user-select: none;
    font-family: Mulish, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    width: 120px;
    height: 38px;
    border-radius: 8px;
    background: none;
    backdrop-filter: blur(0);
    border: none;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    padding: 5px 5px;
    transition: background 0.3s;
    color: #abb1bf;
  }
}

.header-buttons .button.active {
  background: white;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  color: #80dbeb;
}

.Cards {
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  gap: 5px;
  display: grid;
  grid-template-columns: repeat(3, 0fr);
  font-family: Mulish, sans-serif;

  .card {
    width: 362px;
    height: 358px;
    background: rgba(255, 255, 255, 0.555);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    border: 1px solid white;
    margin: 10px;
    padding: 10px;

    .container {
      padding: 12px 12px;
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 5px;

      p {
        color: #23282d;
        font-family: sans-serif;
        font-size: 16px;
      }

      span {
        font-family: Mulish, sans-serif;
        color: #9399a8;
        font-size: 20px;
        font-weight: 500;
        align-items: center;
        text-align: center;
        justify-content: center;
        display: flex;
        white-space: nowrap;
      }

      .price {
        color: #23282d;
        font-family: sans-serif;
        font-weight: 550;
        font-size: 18px;
      }
    }
  }
}

.ShopHeader {
  user-select: none;
  padding: 24px 32px;
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  width: 1138px;
  height: 144px;
  background-color: rgba(255, 255, 255, 0.62);
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  gap: 12px;
  font-family: Mulish, sans-serif;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 20px;

  h1 {
    color: #212121;
    font-size: 32px;
    line-height: 40px;
  }

  .boxShop {
    font-size: 14px;
    line-height: 20px;
    color: #81899A;
    user-select: none;
  }
}

.cardFooter {
  align-items: center;
  text-align: center;
  justify-content: center;
  display: flex;
  width: 1138px;
  margin: 10px auto 10px -9.5px;

  button {
    border-radius: 12px;
    gap: 10px;
    align-items: center;
    text-align: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.555);
    backdrop-filter: blur(10px);
    color: #80dbeb;
    border: none;
    margin-top: 20px;
    width: 1138px;
    height: 48px;
    cursor: pointer;

    span {
      padding-left: 10px;
    }
  }
}

.shop {
  margin-top: -50px;
}
</style>