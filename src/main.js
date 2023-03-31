import { createApp } from "vue";
import App from "./App.vue";
import Vant from "vant";
import "vant/lib/index.css";
import "amfe-flexible";
import router from "./router";
import "uno.css";

createApp(App).use(Vant).use(router). mount("#app");
