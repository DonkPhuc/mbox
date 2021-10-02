import {
    createApp
} from 'vue'

import App from './App.vue'
import BootstrapVue3 from 'bootstrap-vue-3'
import router from "./router"
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import store from "./stores/index"

createApp(App)
    .use(router)
    .use(BootstrapVue3)
    .use(store)
    .mount("#app")