import { createApp } from 'vue'
import App from './App.vue'
import 'vue3-carousel/dist/carousel.css';
import '@/css/custom.css';
import {GDialog, plugin as dialogPlugin} from 'gitart-vue-dialog';
import 'gitart-vue-dialog/dist/style.css'

const app = createApp(App)
    .component('GDialog', GDialog)
    .use(dialogPlugin)
    .mount('#app');
