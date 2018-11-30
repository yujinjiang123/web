<template>
    <mavon-editor v-model="value" ref=md :ishljs="true" @change="changeData" @imgAdd="$imgAdd" ></mavon-editor>
</template>


<script>
  let MavonEditor = require("mavon-editor");
  import "mavon-editor/dist/css/index.css";
  import {uploadImage} from "../api/api";
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
      },
      $imgAdd(pos, $file){
        uploadImage($file)
          .then(res => {
            let url=res.httpUrl;
            console.log(url);
            // 第二步.将返回的url替换到文本原位置![...](0) -> ![...](url)
            // 通过引入对象获取: import {mavonEditor} from ... 等方式引入后，此时$vm即为mavonEditor
            // 通过$refs获取: html声明ref : <mavon-editor ref=md ></mavon-editor>， 此时$vm为 this.$refs.md`
            this.$refs.md.$img2Url(pos, url);
          }).catch(err=>{
            console.log(err);
        })
      }
    }
  };
</script>
<style>
</style>
