<template>
  <div class="editor">
    <div class="top">
      <Input v-model="title" class="btn" :maxlength="50" placeholder="请输入文章标题"
             style="width:60%;margin-right:26%"></Input>
      <Button type="primary" class="btn" @click="gotoHome">返回首页</Button>
      <Button type="error" class="btn" @click="dialogVisible = true">发布</Button>
    </div>
    <markdown class="markdown" @editor="editor" :fullscreen="true"></markdown>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <span>确定要发布博客吗？</span>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="submit">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
  import markdown from "../../components/markdown";
  import {publicBlog} from "../../api/api";

  export default {
    data() {
      return {
        dialogVisible: false,
        title: "",
        contentHtml: "",
        v1: "",
        v2: "",
      }
    },
    components: {
      markdown: markdown
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      editor(data) {
        this.contentHtml = data;
      },
      submit() {
        this.dialogVisible=false;
        let config = {
          data: {
            id: "1",
            username: "于锦江",
            stuId: "123456",
            title: this.title,
            content: this.contentHtml
          }
        };
        publicBlog(config)
          .then(res => {
            console.log(res);
          })
          .catch(err => {
            console.log(err);
          })
      },
      gotoHome() {
        this.$router.push({
          name: "home"
        })
      }
    },

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
