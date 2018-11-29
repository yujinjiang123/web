<template>
  <div class="editor">
    <div class="top">
      <Input v-model="title" class="btn" :maxlength="50" placeholder="请输入文章标题"
             style="width:60%;margin-right:26%"></Input>
      <Button type="primary" class="btn" @click="gotoHome">返回首页</Button>
      <Button type="error" class="btn" @click="submit">发布</Button>
    </div>
    <markdown class="markdown" @editor="editor" :fullscreen="true"></markdown>
  </div>
</template>

<script>
  import markdown from "../../components/markdown";

  export default {
    data() {
      return {
        title: "",
        contentHtml: "",
        v1:"",
        v2:"",
      }
    },
    components: {
      markdown: markdown
    },
    methods: {
      editor(data) {
        this.contentHtml = data;
      },
      submit() {
        console.log(this.contentHtml);
      },
      gotoHome() {
        this.$router.push({
          name: "home",
        })
      }
    }
  }
</script>

<style>
  .editor {
    width: 100%;
    height: 100%;
  }

  .top {
    width: 100%;
    display: flex;
  }

  .btn {
    width: 80px;
    margin: 1%;
    margin-bottom: 0;
  }

  .markdown {
    padding: 20px 20px;
    height: 80%;
    background-color: #f8f8f9;
  }
</style>
