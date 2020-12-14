import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
import { Message } from 'element-ui';

const routes = [
  {
    path: "/",
    name: "login",
    component: () => import("../views/login.vue"),
  },

  {
    path: "/home",
    name: "home",
    redirect:'/bgc',
    component: () => import("../views/home/index.vue"),
    children: [
      {
        path: "/bgc",
        name: "/bgc",
        meta:{title:'后台管理'},
        component: () => import("../views/home/bgc.vue"),
      },
      {
        path: "/shoplist",
        name: "/shoplist",
        meta:{title:'商品列表'},
        component: () => import("../views/home/shoplist.vue"),
      },
      {
        path: "/photo",
        name: "/photo",
        meta:{title:'相册管理'},
        component: () => import("../views/home/photo.vue"),
      },
    ],
  },
  {
    path: "/shop",
    name: "shop",
    redirect:'/shop-list',
    component: () => import("../views/shop/index.vue"),
    children: [
      {
        path: "/shop-list",
        name: "shop-list",
        meta:{title:'商品列表'},
        component: () => import("../views/shop/shop-list.vue"),
      },
      {
        path: "/shop-classify",
        name: "shop-classify",
        meta:{title:'分类列表'},
        component: () => import("../views/shop/shop-classify.vue"),
      },
      {
        path: "/shop-specification",
        name: "shop-specification",
        meta:{title:'商品规格'},
        component: () => import("../views/shop/shop-specification.vue"),
      },
      {
        path: "/shop-type",
        name: "shop-type",
        meta:{title:'商品类型'},
        component: () => import("../views/shop/shop-list.vue"),
      },
      {
        path: "/shop-comment",
        name: "shop-comment",
        meta:{title:'商品评论'},
        component: () => import("../views/shop/shop-comment.vue"),
      },
    ],
  },
  {
    path: "/order",
    name: "order",
    redirect:'/order-admin',
    component: () => import("../views/order/index.vue"),
    children: [
      {
        path: "/order-admin",
        name: "order-admin",
        meta:{title:'订单管理'},
        component: () => import("../views/order/order-admin.vue"),
      },
      {
        path: "/order-invoice",
        name: "order-invoice",
        meta:{title:'发票管理'},
        component: () => import("../views/order/order-invoice.vue"),
      },
      {
        path: "/order-after",
        name: "order-after",
        meta:{title:'售后服务'},
        component: () => import("../views/order/order-after.vue"),
      },
    ],
  },
  {
    path: "/member",
    name: "member",
    redirect:'/member-list',
    component: () => import("../views/member/index.vue"),
    children: [
      {
        path: "/member-list",
        name: "member-list",
        meta:{title:'会员列表'},
        component: () => import("../views/member/member-list.vue"),
      },
      {
        path: "/member-class",
        name: "member-class",
        meta:{title:'会员等级'},
        component: () => import("../views/member/member-class.vue"),
      },
    ],
  },
  {
    path: "/set",
    name: "set",
    redirect:'/set-basics',
    component: () => import("../views/set/index.vue"),
    children: [
      {
        path: "/set-basics",
        name: "set-basics",
        meta:{title:'基础设置'},
        component: () => import("../views/set/set-basics.vue"),
      },
      {
        path: "/set-logistics",
        name: "set-logistics",
        meta:{title:'物流设置'},
        component: () => import("../views/set/set-logistics.vue"),
      },
      {
        path: "/set-admin",
        name: "set-admin",
        meta:{title:'管理员设置'},
        component: () => import("../views/set/set-admin.vue"),
      },
      {
        path: "/set-deal",
        name: "set-deal",
        meta:{title:'交易设置'},
        component: () => import("../views/set/set-deal.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});
//全局路由守卫
router.beforeEach((to, form, next) => {
  if (to.path == '/') {
    next()
  } else {
    if (localStorage.getItem('token')) {
      var time=localStorage.getItem('time')
      var now=(new Date().getTime())/1000
      if(now-time>=20){
        next('/')
        Message({
          message: '账号失效',
          type: 'warning'
        });
        localStorage.clear()
      }else{
        next()
      }
    } else {
      next('/')
    }
  }
})








export default router;
