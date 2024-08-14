import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/Home.vue"
import HistoryView from "../views/HistoryView.vue"

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/history",
    component: HistoryView
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes: routes
})
