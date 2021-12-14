<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/home">Home</router-link> |
      <router-link to="/user/3">User</router-link> -->
      <router-link :to="{name:'User',params:{id:2}}">User</router-link>
      <div id="nav"><router-link to="/foo/1">Foo</router-link></div>
      <button @click="handleToUser">to user</button>
    </div>
    <router-view></router-view>
    <router-view name="one"></router-view>
    <router-view name="two"></router-view>
  </div>
</template>

<script>
export default {
  name:"App",
  comments:{},
  methods:{
    handleToUser(){
      //push
      this.$router.push({
        name:"User",
        params:{
          id:3,
        }
      });
      //this.$router.push("user/3");
      //replace
      //this.$router.replace("/user/3");
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
