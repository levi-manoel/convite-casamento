import App from './App.vue'
import router from './router'

import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import Notifications from '@kyvg/vue3-notification'
import 'element-plus/dist/index.css'
import './assets/element-plus.css'
import VueCountdown from '@chenfengyuan/vue-countdown';

const app = createApp(App)

app.use(router)
app.use(ElementPlus)
app.use(Notifications)

app.component(VueCountdown.name, VueCountdown);

app.mount('#app')
