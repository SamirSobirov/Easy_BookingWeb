import {createApp} from 'vue'
import './assets/scss/style.scss'
import './assets/scss/heroSection.scss'
import './assets/scss/headerMainSearch.scss'
import './assets/scss/offersCard.scss'
import './assets/scss/adventages.scss'
import './assets/scss/Shop.scss'
import './assets/scss/slider.scss'
import './assets/scss/ProfitableOffers.scss'
import './assets/scss/blog.scss'
import './assets/scss/GroundHandling.scss'
import './assets/scss/helperCenter.scss'
import './assets/scss/reviews.scss'
import './assets/scss/footer.scss'
import './assets/scss/registModal.scss'
import './assets/scss/searchForm.scss'
import './components/breadcrumbs/breadCrumb.scss'
import './pages/Result/component/ticketComponents/Card.scss'
import './pages/Result/component/scss/doubleRange.scss'
import './pages/Result/component/scss/price.scss'
import './pages/Result/component/scss/sort.scss'
import './pages/Result/component/scss/travelTime.scss'
import './assets/scss/weatherModal.scss'
import './assets/scss/easyBookingShop.scss'
import router from "./pages/router";
import App from './App.vue'
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import vClickOutside from "click-outside-vue3"

const app = createApp(App);
app.use(vClickOutside)
app.use(router);
app.directive(vClickOutside.directive)
app.component('VueDatePicker', VueDatePicker);
app.mount('#app');

