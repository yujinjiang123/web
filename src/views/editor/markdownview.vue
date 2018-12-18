<template>
  <div>
    <top></top>
    <div class="content">
      <span class="markdown-body" v-html="essay"></span>
    </div>
  </div>
</template>


<script>
  import Top from "../top";
  export default {
    name: "editor",
    data() {
      return {
        essay:"",
      };
    },
    components:{
      top:Top
    },
    created() {
      this.essay=localStorage.essay;
      console.log(this.essay);
    }
  };
</script>
<style scoped>
  @import "../../assets/dist/css/index.css";
  .content{
    width:80%;
    margin-left:20%;
    margin-top:3%;
  }
</style>
