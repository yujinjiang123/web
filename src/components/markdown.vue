<template>
  <div>
    <Button type="primary" @click="submit">发布</Button>
    <mavon-editor v-model="value" :ishljs="true" @change="changeData"></mavon-editor>
  </div>
</template>


<script>
  import {test} from "../api/api.js";

  var mavonEditor = require("mavon-editor");
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
      "mavon-editor": mavonEditor.mavonEditor
    },
    methods: {
      submit() {
        let url = 'https://hudong.hndt.com/TC/miniprograms/messages/moduleId?moduleId=8078&pageNumber=1&pageSize=1';
        test(url)
          .then(res => {
            console.log(res);
          })
          .catch(err => {
            console.log(err);
          })
      },
      changeData(value, render) {
        console.log(value);
        console.log(render);
        this.contentHtml = render;
      }
    }
  };
</script>
<style>
</style>
