<template>
    <footer class="footer" style="margin-top: 40px;">
        <div class="footer__container">
            <div class="footer__section">
                <img src="/src/assets/images/EasyBooking_logo.svg" alt="Easy Booking" class="footer__logo"/>
                <p class="footer__description">
                    Ваш проводник в мир ярких путешествий <br/>
                    и комфортных поездок
                </p>
                <div class="footer__apps">
                    <button v-for="(app, index) in appStores" :key="index" class="download">
                        <img :src="app.icon" :alt="app.alt"/>
                        <div>
                            <span style="color: #9399a8; font-size: 9px">Доступно в</span>
                            <span style="font-size: 12px">{{ app.name }}</span>
                        </div>
                    </button>
                </div>
            </div>

            <div class="footer__section">
                <h3 class="footer__title">Компания</h3>
                <ul class="footer__list">
                    <li v-for="(link, index) in companyLinks" :key="index">
                        <a :href="link.href" class="footer__link">{{ link.label }}</a>
                    </li>
                </ul>
            </div>

            <div class="footer__section">
                <h3 class="footer__title">Информация</h3>
                <ul class="footer__list">
                    <li v-for="(link, index) in infoLinks" :key="index">
                        <a :href="link.href" class="footer__link">{{ link.label }}</a>
                    </li>
                </ul>
            </div>

            <div class="footer__section">
                <h3 class="footer__title">Контакты</h3>
                <address class="footer__contact">
                    <a href="mailto:support@easybooking.uz" class="footer__contact">support@easybooking.uz</a>
                </address>
                <p class="footer__contact">
                    <a href="tel:+998662304400" class="footer__contact">+998 66 230 44 00</a>
                </p>
                <p class="footer__contact">
                    <a href="tel:+998712030011" class="footer__contact">+998 71 203 00 11</a>
                </p>

                <div class="footer__socials">
                    <a v-for="(social, index) in socialLinks" :key="index" :href="social.href"
                       class="footer__social-link">
                        <img :src="social.icon" :alt="social.alt"/>
                    </a>
                </div>
            </div>
        </div>

        <div class="footer__bottom">
            <p>© Easybooking.uz | All rights reserved</p>
            <div class="footer__logos">
                <img v-for="(logo, index) in footerLogos" :key="index" :src="logo.src" :alt="logo.alt"/>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
const appStores = [
    {icon: "/src/assets/icons/apple.svg", alt: "App Store", name: "App Store"},
    {icon: "/src/assets/icons/GooglePlay.svg", alt: "Google Play", name: "Google Play"},
    {icon: "/src/assets/icons/huawei.svg", alt: "App Gallery", name: "App Gallery"},
];

const companyLinks = [
    {href: "#", label: "О компании"},
    {href: "#", label: "Сотрудничество"},
    {href: "#", label: "Партнёрам"},
];

const infoLinks = [
    {href: "#", label: "Публичная оферта"},
    {href: "#", label: "Справочный центр"},
];

const socialLinks = [
    {href: "#", icon: "/src/assets/icons/telegram_icon.svg", alt: "Telegram"},
    {href: "#", icon: "/src/assets/icons/instagram_icon.svg", alt: "Instagram"},
    {href: "#", icon: "/src/assets/icons/facebook_icon.svg", alt: "Facebook"},
];

const footerLogos = [
    {src: "/src/assets/icons/Iata.svg", alt: "IATA"},
    {src: "/src/assets/icons/kp.svg", alt: "KP"},
    {src: "/src/assets/icons/kp.svg", alt: "TURSAB"},
];
</script>

<style lang="scss" scoped></style>
