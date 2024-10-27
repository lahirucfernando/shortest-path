/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */


import { registerPlugins } from '@/plugins'
import { createPinia } from 'pinia';
import App from './App.vue'
import { createApp } from 'vue'

const app = createApp(App)
const pinia = createPinia();
app.use(pinia);

registerPlugins(app)

app.mount('#app')
