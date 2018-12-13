<template>
  <div>
    <span class="markdown-body" v-html="essay"></span>
  </div>
</template>


<script>
  export default {
    name: "editor",
    data() {
      return {
        essay:"",
      };
    },
    props:{
      id:"",
    },
    created(){
      console.log(this.id);
    }
  };
</script>
<style>
  @import "../../../node_modules/mavon-editor/dist/css/index.css";
</style>
