import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    redirect: "Login",

  },
  {
    path: "/home",
    name: "home",
    component: () => import("../views/HomeView.vue"),
    meta: {
      needRequire: true,
    },
    redirect:"home/index",
    children: [
      {
        path: "index",
        name: "index",
        component: () => import("../views/Index.vue")
      },
      {
        path: "Document",
        name: "Docuemnt",
        component: () => import("../views/Document.vue")
      },
      {
        path: "Lead",
        name: "Lead",
        component: () => import("../views/Lead.vue")
      },
    ]
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/Login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/login.vue"),

  }
];

const router = new VueRouter({
  routes,
});

// router.beforeEach((to,from,next)=>{
//   let flag=to.matched.some(item=>item.meta.needRequire)
//   console.log(to);
//   if(flag){
//     //有token说明登录成功 进入下一个页面
//     if(localStorage.getItem("token")){
//       next()
// 		}else{
// 			next("/login")
// 		}
//   }else{
//     //没有登录 跳转到登录页面
//     //路由守卫中 千万不要使用循环
//     next()
//   }
// })
router.beforeEach((to, from, next) => {
  if (to.name === 'Login') {
    //登录界面不设权限 不然每个用户都无法登录
    next()
  } else {
    //非登录页面设置权限 登陆后才可以跳转
    if (localStorage.getItem('token')) {
      //有token值 已登录 
      next()
    } else {
      //没登录 跳转登录界面
      next({ name: 'Login' })
    }
  }
})
export default router;
