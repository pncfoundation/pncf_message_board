import {createRouter, createWebHashHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Board from "@/views/Board.vue";
import Contact from "@/views/Contact.vue";
import Error from "@/views/Error.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/board',
    name: 'Board',
    component: Board
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
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
