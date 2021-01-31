require('./bootstrap');
import { createApp } from 'vue'
import App from './src/App.vue'
import router from './router'

createApp(App).use(router).mount('#app')

// const app = createApp(App)
// app.use(router)
// app.mount('#app')
// window.Vue = require('vue').default;
