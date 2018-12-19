<template>
  <div>
    <span class="markdown-body" v-html="essay"></span>
  </div>
</template>


<script>
  let MavonEditor = require("mavon-editor");
  import "mavon-editor/dist/css/index.css";
  export default {
    name: "editor",
    data() {
      return {
        value: '',
        contentHtml: '',
        essay:'',
      };
    }
  };
</script>
<style >
  @import "../../assets/dist/css/index.css";
</style>
