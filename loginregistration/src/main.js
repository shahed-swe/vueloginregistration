import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import { BootstrapVue} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

const app = createApp(App)

// app.use(BootstrapVue)

app.use(VueSweetalert2)
app.use(router)

app.mount('#app')
