import { createApp } from "vue";
// import App from "./App.vue";
import Index from "./views/index";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

createApp(Index)
  .use(store)
  .use(router)
  .mount("#app");
