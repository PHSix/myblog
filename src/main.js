import { createApp } from "vue";
import VueHighlightJS from "vue3-highlightjs";
import "highlight.js/styles/hybrid.css";
import App from "./App.vue";
import router from "./route";
import store from "./store";

const app = createApp(App);

app.use(store);
app.use(router);
app.use(VueHighlightJS);

app.mount("#app");
