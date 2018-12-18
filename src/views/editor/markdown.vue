<template>
  <div class="editor">
    <div class="top">
      <Input v-model="title" class="btn" :maxlength="50" placeholder="请输入文章标题"
             style="width:60%;margin-right:26%"></Input>
      <Button type="primary" class="btn" @click="gotoHome">返回首页</Button>
      <Button type="error" class="btn" @click="publishBlog">发布</Button>
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
  import markdown from "../../components/editor/markdown";
  import {publicBlog} from "../../api/blog";

  export default {
    data() {
      return {
        dialogVisible: false,
        title: "",
        contentHtml: "",
      }
    },
    components: {
      markdown: markdown
    },
    methods: {
      publishBlog(){
        if(this.title===''){
          this.$message({
            message: '请输入标题',
            type: 'error'
          });
          return ;
        }
        if(this.contentHtml===''){
          this.$message({
            message: '请输入内容',
            type: 'error'
          });
          return;
        }
        this.dialogVisible=true;
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {
          });
      },
      editor(data) {
        this.contentHtml = data;
      },
      submit() {
        let config={
          message:'发送成功',
          type: 'success'
        };
        console.log(this.contentHtml);
        this.dialogVisible = false;
        let stuId=localStorage.username;
        let params = {
          stuId:stuId,
          username: stuId,
          title: this.title,
          content: this.contentHtml
        };
        publicBlog(params)
          .then(res => {
            console.log(res);
            if(res.status){
              this.$message(config);
              this.$router.replace({
                name:"home"
              })
            }else{
              config.message='发送失败';
              config.type="error";
              this.$message(config);
            }
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

<style >
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
