<template>
    <div class="container">
        <div class="box">
            <div class="box1">
                <h1>Скачайте приложение EASYBOOKING</h1>
                <p style="text-align: left; font-family: sans-serif; font-size: 14px;">
                    Уведомления о лучших ценах, данные пассажиров и информация по заказам у вас под рукой
                </p>
                <div class="elem">
                    <div v-for="(item, index) in appStores" :key="index" class="item1">
                        <p>
                            {{ item.downloads }}
                            <span>{{ item.storeName }}</span>
                        </p>

                        <button>
                            <img :src="item.icon" :alt="item.alt" />
                            <div>
                                <span>Доступно в</span>
                                <span class="App">{{ item.storeLabel }}</span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            <div>
                <img src="/src/assets/images/telephone.svg" alt="telephone" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const appStores = [
    {
        downloads: "+120K",
        storeName: "Скачать в App Store",
        icon: "/icons/apple.svg",
        alt: "App Store",
        storeLabel: "App Store",
    },
    {
        downloads: "+170K",
        storeName: "Скачать в Google Play",
        icon: "/icons/GooglePlay.svg",
        alt: "Google Play",
        storeLabel: "Google Play",
    },
    {
        downloads: "+34K",
        storeName: "Скачать в AppGallery",
        icon: "/icons/huawei.svg",
        alt: "AppGallery",
        storeLabel: "AppGallery",
    },
];
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 1138px;
    margin: 60px auto 0;
    background: rgba(255, 255, 255, 0.555);
    backdrop-filter: blur(10px);
    height: 360px;
    width: 1140px;
    border-radius: 24px;

    .box {
        display: flex;
        gap: 75px;
        align-items: center;
        justify-content: center;
        text-align: center;
        margin-top: -30px;
        padding: 43px 40px 13px 50px;

        .box1 {
            padding-left: 30px;
            width: 562px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            gap: 20px;

            .elem {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 15px;

                .item1 {
                    padding: 30px 16px;
                    border-radius: 16px;
                    width: 180px;
                    height: 140px;
                    background-color: #ffffffa6;
                    border: 2px solid #ffffffbf;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 18px;

                    p {
                        color: black;
                        font-size: 16px;
                        font-weight: bold;
                        margin: 0;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        text-align: center;
                        gap: 10px;

                        span {
                            font-size: 12px;
                            color: #9399a8;
                            line-height: 16px;
                            font-weight: 500;
                            margin: 0;
                        }
                    }

                    button {
                        display: flex;
                        align-items: center;
                        text-align: center;
                        justify-content: center;
                        gap: 10px;
                        width: 140px;
                        height: 48px;
                        padding: 12px;
                        background: white;
                        border: none;
                        border-radius: 8px;
                        cursor: pointer;
                        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

                        img {
                            width: 25px;
                            height: 25px;
                        }

                        div {
                            display: flex;
                            flex-direction: column;
                            align-items: start;
                            justify-content: left;

                            span {
                                font-size: 8px;
                                color: #9399a8;
                                line-height: 16px;
                                font-weight: 500;
                                margin: 0;
                            }

                            .App {
                                font-size: 12px;
                                color: black;
                                line-height: 16px;
                                font-weight: 500;
                                margin: 0;
                            }
                        }
                    }
                }
            }

            h1 {
                font-size: 28px;
                font-weight: bold;
                margin: 0;
                text-align: center;
            }

            p {
                line-height: 20px;
                font-size: 14px;
                color: #9399a8;
                margin: 0;
                text-align: center;
            }
        }
    }
}
</style>