<template>
  <div class="re-password">
    <top>
      <search @search="searchBlog" slot="search"></search>
      <p class="editor" slot="editor" @click="gotoEditor"> <Icon size="18" class="icon" type="ios-create-outline" />写博客</p>
      <dropdown slot="user">
        <useravatar slot="dropdown"></useravatar>
      </dropdown>
    </top>
    <div style="width:80%;height:80%;margin:50px">
      <Steps :current="current" style="width:80%;margin:auto">
        <Step title="原密码" style="width:40%"></Step>
        <Step title="新密码" style="width:40%"></Step>
        <Step title="完成" style="width:20%"></Step>
      </Steps>
      <div class="content">
        <Input v-if="current==0"  v-model="oldPassword" type="password" placeholder="请输入旧密码" style="width: 300px;margin:auto"></Input>
        <Form v-if="current==1" ref="formInline" :model="formInline" :rules="ruleInline" style="width: 300px;margin:auto">
          <FormItem prop="newPassword1">
            <Input type="password" v-model="formInline.newPassword1" placeholder="请输入新密码" style="width: 300px;margin:auto"></Input>
          </FormItem>
          <FormItem prop="newPassword2">
            <Input type="password" v-model="formInline.newPassword2" placeholder="确认密码" style="width:300px;margin:auto"></Input>
          </FormItem>
        </Form>
        <p v-if="current==2">修改成功</p>
      </div>
      <Button type="primary" class="next" @click="next('formInline')" >下一步</Button>
    </div>
  </div>
</template>
<script>
  import Search from "@/components/search";
  import Head from "@/components/head";
  import Dropdown from "@/components/dropdown";
  import UserAvatar from "@/components/userAvatar";
export default {
  data() {
    return {
      current: 0,
      oldPassword: "",
      formInline: {
        newPassword1: "",
        newPassword2: ""
      },
      ruleInline: {
        oldPassword:[
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
        newPassword1: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
        newPassword2: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { type: 'string', min: 6, message: '密码不能少于六位', trigger: 'blur' }
        ]
      }
    };
  },
  components: {
    search: Search,
    top: Head,
    dropdown: Dropdown,
    useravatar: UserAvatar
  },
  methods: {
    next(name) {
      if(this.current==1){
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.current += 1;
          }else{
            //TODO
          }
        })
      } else if (this.current == 2) {
        this.$router.replace({
          name:"home",
        })
      } else {
        this.current += 1;
      }
    }
  }
};
</script>
<style>
  .re-password{
    width:100%;
    height: 100%;
  }
.content {
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  width: 100%;
  height: 50%;
  display: flex;
}
  .next{
    float: right;
    margin-right:20%;
  }
</style>

