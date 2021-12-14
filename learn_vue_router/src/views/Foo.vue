<template>
  <div>
    Foo
    <div v-show="loading">Loading...</div>
    <div v-show="showError">Error</div>
    <div>
      {{post.title}}
      {{post.body}}
    </div>
  </div>
</template>

<script>
import {apiPost} from "../api/index"
export default {
  data(){
    return{
      showError:false,
      loading:false,
      post:{},
    }
  },
  created(){
    this.fetchData();
  },
  watch: {
    $route: "fetchData",
  },
  methods:{
    fetchData(){
      this.loading = true;
      this.error = false;
      this.post = {};
      apiPost(this.$route.params.id,this.showError).then((post) => {
        console.log(post);
        this.post = post;
        this.loading = false;
      }).catch(()=>{
        this.loading = false;
        this.error = true;
      })
    }
    
  }
}
</script>

<style>

</style>