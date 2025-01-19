import { createApp } from 'vue'
import './style.css'
import './assets/scss/heroSection.scss'
import './assets/scss/headerMainButton.scss'
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
import App from './App.vue'

import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

const app = createApp(App);

app.component('VueDatePicker', VueDatePicker);
app.mount('#app');

