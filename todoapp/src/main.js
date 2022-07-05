import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import store from './store'

const app = createApp(App)
app.config.productionTip = false

app.use(VueSweetalert2)


app.use(router)
app.use(store)


app.mount('#app')
