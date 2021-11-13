import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "./layout";
import Dashboard from "./views/Dashboard";
import About from "./views/About";

Vue.use(VueRouter);

const routes = [
  {
    path:"/",
    component:Layout,
    redirect:"/dashboard",
    children:[
      {
        path:"dashboard",
        component:Dashboard
      },
      {
        path:"about",
        component:About
      }
    ]
  },
  {
    path:"*",
    redirect:"/"
  }
];

const router = new VueRouter({
  routes
});

export default router;