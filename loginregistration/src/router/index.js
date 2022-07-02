import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProfileViewVue from '../views/ProfileView.vue'
import LoginViewVue from '../views/LoginView.vue'
import RegistrationViewVue from '../views/RegistrationView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/profile',
      name: 'profile',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: ProfileViewVue
    },
    {
      path: "/login",
      name: "login",
      component: LoginViewVue
    },
    {
      path: "/registration",
      name: "registration",
      component: RegistrationViewVue
    }
  ]
})

export default router
