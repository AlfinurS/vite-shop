import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";

const Vue = createApp(App);

Vue.config.globalProperties.axios = axios;
axios.defaults.baseURL = import.meta.env.VITE_BASE_API_URL;

Vue.use(router);
Vue.mount("#app");
