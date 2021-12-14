<template>
  <div>
    Home
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  /* eslint-disable no-unused-vars */
  beforeRouteEnter (to, from, next) {
    console.log("before-Route-Enter");
    next();
  },
  beforeRouteUpdate() {
    // hook
    console.log("before - route - update");
  },
  beforeRouteLeave(to, from, next) {
    console.log("before-router-leave");
    next();
  },
}
</script>

<style>

</style>