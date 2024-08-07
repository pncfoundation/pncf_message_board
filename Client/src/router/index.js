import {createRouter, createWebHashHistory} from 'vue-router'
import About from "@/views/About.vue";
import Board from "@/views/Board.vue";
import Admin from "@/views/Admin.vue";
import Error from "@/views/Error.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Board
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/pnc/admin',
    name: 'Admin Board',
    component: Admin
  },
  { // Used if the user tries visiting a page that does not exist
    path: "/:pathMatch(.*)*",
    name: "Not Found",
    component: Error
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
