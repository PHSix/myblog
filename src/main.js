import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'github-markdown-css/github-markdown.css';
import 'highlight.js/styles/github.css';

const app = createApp(App);
app.use(store).use(router);
app.mount('#app');
