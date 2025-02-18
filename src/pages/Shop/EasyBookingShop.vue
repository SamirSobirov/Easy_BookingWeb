<template>
    <BreadCrumb currentPage="EASYBOOKING Shop"/>
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
                v-for="(product, index) in displayedProducts"
                :key="index"
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
                <span>{{ isExpanded ? "Скрыть" : "Показать ещё" }}</span>
            </button>
        </div>
    </div>
    <Footer/>
</template>

<script setup lang="ts">
import BreadCrumb from "../../components/breadcrumbs/BreadCrumb.vue";
import Footer from "../../components/Footer.vue";
import {ref, computed} from "vue";
import { useRouter } from 'vue-router';

const router = useRouter();

const goToProduct = (id: number) => {
    router.push({ name: 'AboutProduct', params: { id } });
};

const activeButton = ref("flights");
const isExpanded = ref(false);
const addedCount = ref(0);

const buttons = [
    {type: "flights", label: "Все товары"},
    {type: "tours", label: "Новые"},
    {type: "train", label: "Скидки"},
];

const initialProducts = [
    {image: "/images/Shop_bag.svg", name: "Чехол на чемодан", price: "800 000 UZS", points: "400", id: 1, hasPriceBall: false},
    {
        image: "/images/Shop_pillow.svg",
        name: "Подушка для подголовника",
        price: "800 000 UZS",
        priceBall: "1 000 000 UZS",
        points: "400",
        id: 2,
        hasPriceBall: false
    },
    {
        image: "/images/Shop_Carryingbag.svg",
        name: "Сумка-переноска",
        price: "800 000 UZS",
        points: "400",
        id: 3,
        hasPriceBall: false
    },
    {
        image: "/images/bagShop4.svg",
        name: "Сумка-переноска",
        price: "800 000 UZS",
        points: "400",
        id: 4,
        hasPriceBall: false
    },
    {image: "/images/bagShop5.svg", name: "Чехол на чемодан", price: "800 000 UZS", points: "400",id: 5, hasPriceBall: false},
    {
        image: "/images/bagShop6.svg",
        name: "Подушка для подголовника",
        price: "800 000 UZS",
        priceBall: "1 000 000 UZS",
        points: "400",
        id: 6,
        hasPriceBall: false
    },
    {
        image: "/images/bagShop7.svg",
        name: "Сумка-переноска",
        price: "800 000 UZS",
        points: "400",
        id: 7,
        hasPriceBall: false
    },
    {
        image: "/images/bagShop8.svg",
        name: "Сумка-переноска",
        price: "800 000 UZS",
        points: "400",
        id: 8,
        hasPriceBall: false
    },
    {
        image: "/images/bagShop9.svg",
        name: "Сумка-переноска",
        price: "800 000 UZS",
        points: "400",
        id: 9,
        hasPriceBall: false
    },
];

const newProducts = [
    {
        image: "/images/Shop_bag.svg",
        name: "Подушка для подголовника",
        price: "800 000 UZS",
        priceBall: "1 000 000 UZS",
        points: "400",
        id: 10,
        hasPriceBall: false
    },
    {
        image: "/images/bagShop5.svg",
        name: "Сумка-переноска",
        price: "800 000 UZS",
        points: "400",
        id: 11,
        hasPriceBall: false
    },
    {
        image: "/images/Shop_Carryingbag.svg",
        name: "Сумка-переноска",
        price: "800 000 UZS",
        points: "400",
        id: 12,
        hasPriceBall: false
    },
    {
        image: "/images/Shop_pillow.svg",
        name: "Сумка-переноска",
        price: "800 000 UZS",
        points: "400",
        id: 13,
        hasPriceBall: false
    },
];

const displayedProducts = computed(() => {
    return isExpanded.value ? [...initialProducts, ...newProducts.slice(0, addedCount.value)] : initialProducts;
});

const toggleProducts = () => {
    if (isExpanded.value) {
        isExpanded.value = false;
        addedCount.value = 0;
    } else {
        addedCount.value += 4;
        if (addedCount.value >= newProducts.length) {
            isExpanded.value = true;
        }
    }
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
</style>