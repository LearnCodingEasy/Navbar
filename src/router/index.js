// router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home/Home.vue";
import Navbar1 from "../components/Navbar/Navbar1.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/Navbar1",
    name: "Navbar1",
    component: Navbar1
  }
];


const router = createRouter({
  history: createWebHistory(),
  routes
});
export default router;
