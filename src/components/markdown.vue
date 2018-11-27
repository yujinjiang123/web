<template>
    <mavon-editor v-model="value" :ishljs="true" @change="changeData"></mavon-editor>
</template>


<script>
  let MavonEditor = require("mavon-editor");
  import "mavon-editor/dist/css/index.css";
  export default {
    name: "editor",
    data() {
      return {
        value: "",
        contentHtml: ""
      };
    },
    components: {
      "mavon-editor": MavonEditor.mavonEditor
    },
    methods: {
      changeData(value, render) {
        this.contentHtml = render;
        this.$emit("editor",this.contentHtml);
      }
    }
  };
</script>
<style>
</style>
