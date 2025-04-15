import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia";
import Counter from "./components/Counter.vue";
import { createRouter, createWebHistory } from "vue-router";

const pinia = createPinia();

const router = createRouter({
  routes: [
    {
      path: "/counter",
      component: Counter,
    },
  ],
  history: createWebHistory(),
});

createApp(App).use(pinia).use(router).mount("#app");
