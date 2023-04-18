import {createRouter, createWebHashHistory} from 'vue-router'
// 2.1 配置我们的路由
const router = createRouter({
  history: createWebHashHistory(),
  // 映射关系：path -> component
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
      component: () => import("@/views/home/home.vue")
    },
    {
      path: "/favor",
      component: () => import("@/views/favor/favor.vue")
    },
    {
      path: "/order",
      component: () => import("@/views/order/order.vue")
    },
    {
      path: "/massage",
      component: () => import("@/views/massage/massage.vue")
    },
    {
      path: "/city",
      component: () => import("@/views/city/city.vue"),
      // 额外信息： 隐藏tab-bar
      // meta: {
      //   hideTabbBar: true
      // }
    }
  ]
}) 

export default router