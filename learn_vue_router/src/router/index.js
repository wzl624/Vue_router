import VueRouter from "vue-router";
import Vue from "vue";
import Home from "../views/Home.vue";
import User from "../views/User.vue";
import Details from "../views/Details.vue";
import Foo from "../views/Foo.vue";
import Bar from "../views/Bar.vue";
//import Zhangsan from "../views/Zhangsan.vue"
//use -> koa
//koa.use() -> 添加
//插件
//Vue.component("RouterView",RouterView)
//Vue.component("RouterLink",RouterLink)
Vue.use(VueRouter);
const router = new VueRouter({
  
  routes:[
    {
      path:"/",
      component:Home,
      beforeEnter:(to, from, next) => {
        console.log("before-enter");
        next();
      },
      children:[
        {
          path:"foo",
          component:Foo
        },
        {
          path:"redirect-foo",
          //redirect:"foo"
          redirect(route){
            console.log(route);
            return route.query.to;
          }
        }
      ],
    },
    {
      path:"/foo/:id",
      name:"Foo",
      component:Foo
    },
    // {
    //   // / -> 绝对路径
    //   path:"/jia",
    //   redirect:"/home",
    // },
    {
      alias:["/jia","/wuzi"],
      path:"/home",
      //component:Home,
      components:{
        default:Home,
          one:Foo,
          two:Bar
      }
    },
    {
      path:"/redirect-user/:id",
      redirect:"/user/:id"
    },
    {
      name:"User",
      path:"/user/:id",
      component:User,
      children:[
        {
          path:"foo",
          component:Foo,
        },
        {
          path:"bar",
          component:Bar
        }
      ],
    },
    {
      path:"/details/:id",
      component:Details,
      //props:true,
      // props:{
      //   id:"333"
      // },
      props(route){
        console.log(route);
        return {
          id:route.id,
        }
      }
    },
    // {
    //   path:"/user/zhangsan",
    //   component:Zhangsan,
    // },
    {
      path:"*",
      redirect:"/",
    }
    
  ]

})


router.beforeEach((to,from,next) => {
  // console.log("to",to);
  // console.log("from",from);
  // console.log("next",next);
  console.log("before-each");
  next();
})

router.afterEach(() => {
  console.log("after-each");
})
export default router;