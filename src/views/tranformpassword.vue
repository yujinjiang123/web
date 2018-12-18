<template>
  <div class="re-password">
    <top></top>
    <div style="width:80%;height:60%;padding:50px;margin-left:10%;margin-top:1%;background-color:white">
      <Steps :current="current" style="width:80%;margin:50px auto">
        <Step title="原密码" style="width:40%"></Step>
        <Step title="新密码" style="width:40%"></Step>
        <Step title="完成" style="width:20%"></Step>
      </Steps>
      <div class="content">
        <Input v-if="current==0"  size="large" type="email" v-model="email" placeholder="请输入邮箱地址" style="width: 300px;margin:auto" ></Input>
        <div v-if="current==1" style="display: flex">
          <Input type="text" v-model="code" style="width:50%;" placeholder="请输入验证码"></Input>
          <Button
            @click="SendEmail"
            class="send-code"
            style="width:40%;"
            :disabled="canClick"
          >{{codeInfo}}
          </Button>
        </div>
        <Form v-if="current==2" ref="formInline" :model="formInline" :rules="ruleInline" style="width: 300px;margin:auto">
          <FormItem prop="newPassword1">
            <Input type="password" v-model="formInline.newPassword1" placeholder="请输入新密码" style="width: 300px;margin:auto"></Input>
          </FormItem>
          <FormItem prop="newPassword2">
            <Input type="password" v-model="formInline.newPassword2" placeholder="确认密码" style="width:300px;margin:auto"></Input>
          </FormItem>
        </Form>
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
  import {sendEmail,codeIdentify,changePassword} from "@/api/user";
  import md5 from 'js-md5';
  export default {
  data() {
    const validatePassword = (rule, value, callback) => {
      if (value === "") {
        return callback(new Error("请输入密码"));
      } else if (
        this.formInline.newPassword1 !== this.formInline.newPassword2 &&
        this.formInline.newPassword2 !== ""
      ) {
        callback("两次密码不一致");
      } else {
        callback();
      }
    };
    return {
      totalTime: 60,
      current: 0,
      email:'',
      codeInfo: "获取验证码",
      code:'',
      formInline: {
        newPassword1: "",
        newPassword2: ""
      },
      ruleInline: {
        newPassword1: [
          {required: true,
            validator: validatePassword,
            trigger: "blur" }
        ],
        newPassword2: [
          {required: true,
            validator: validatePassword,
            trigger: "blur"},
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
      if(this.current==0){
        this.SendEmail();
      }else if(this.current==1){
        //todo
        codeIdentify(this.email,this.code).then(res=>{
          console.log(res);
          if(res.status){
            this.current++;
          }else{
            this.$Message.warning("验证码不正确");
          }
        })
        this.current++;
      } else if (this.current == 2) {
        let password=md5(this.formInline.password);
        changePassword(this.email,password);
        this.$router.replace({
          name:"login",
        })
      }
    },
    SendEmail() {
      if (this.email === "") {
        this.$Message.warning("请填写邮箱");
      } else if (
        !/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(
          this.email
        )
      ) {
        this.$Message.warning("请输入正确的邮箱地址");
      } else {
        this.countDown();
        //todo
        sendEmail(this.email);
        this.current += 1;
      }
    },
    countDown() {
      if (this.canClick) return; //改动的是这两行代码
      this.canClick = true;
      this.codeInfo = this.totalTime + "s后重新发送";
      let clock = window.setInterval(() => {
        this.totalTime--;
        this.codeInfo = this.totalTime + "s后重新发送";
        if (this.totalTime < 0) {
          window.clearInterval(clock);
          this.codeInfo = "重新发送验证码";
          this.totalTime = 60;
          this.canClick = false; //这里重新开启
        }
      },1000)
    },
  },
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

