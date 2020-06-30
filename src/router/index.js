import Vue from "vue";
import VueRouter from "vue-router";
const Home = ()=>import("@/views/tabbar/Home.vue")
const Kecheng = ()=>import("@/views/tabbar/Kecheng.vue")
const Yue = ()=>import("@/views/tabbar/Yue.vue")
const Lianxi = ()=>import("@/views/tabbar/Lianxi.vue")
const Person = ()=>import("@/views/tabbar/Person.vue")


Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/kecheng",
    name: "kecheng",
    component: Kecheng
  },
  {
    path: "/yue",
    name: "yue",
    component: Yue
  },
  {
    path: "/lianxi",
    name: "lianxi",
    component: Lianxi
  },
  {
    path: "/person",
    name: "person",
    component: Person
  },
  {
    path:"/",
    redirect:"/home"
    
  }
];

const router = new VueRouter({
  routes
});

export default router;
