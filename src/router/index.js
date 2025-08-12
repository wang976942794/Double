import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import SmsChat from '../views/SmsChat.vue'
import SmsBatch from '../views/SmsBatch.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    meta: { title: '登录' }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { title: '首页' }
  },
  {
    path: '/sms-chat',
    name: 'SmsChat',
    component: SmsChat,
    meta: { title: '短信聊天' }
  },
  {
    path: '/sms-batch',
    name: 'SmsBatch',
    component: SmsBatch,
    meta: { title: '短信批量发送' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
