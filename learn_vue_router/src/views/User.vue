<template>
  <div>
    user:{{$route.params.id}}
    <router-view></router-view>
    <button @click="back">back</button>
  </div>
  
</template>

<script>
export default {
  created(){
    //路由对象
    //router给我们注入的全局对象
    //user.id -> fetch api -> user
    //console.log(this.$route)
    console.log(`fetch user api id: ${this.$route.params.id}`);
  },
  methods:{
    back(){
      //this.$router.back();
      this.$router.go(-1);
    }
  },
  watch:{
    $route(){
      console.log(`watch - fetch user api id: ${this.$route.params.id}`);
    }
  },
  beforeRouteUpdate() {
    // vue-router
    console.log(
      `before-route-udate - fetch user api id: ${this.$route.params.id}`
    );
  },
}
</script>

<style>

</style>