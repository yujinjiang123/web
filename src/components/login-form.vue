<template>
  <div class="login-form">
    <div class="head">
      <a class="head-item" @click="gotoLogin" style="color: #303133;">登录</a>
      <a class="head-item" @click="gotoRegister" style="color: #303133;">注册</a>
    </div>
    <Form
      v-if="view=='login'"
      class="form"
      ref="formInline"
      :model="formInline"
      :rules="ruleInline"
    >
      <FormItem prop="username">
        <Input size="large" type="text" v-model="formInline.username" placeholder="用户名" required></Input>
      </FormItem>
      <FormItem prop="password">
        <Input size="large" type="password" v-model="formInline.password" placeholder="密码"></Input>
      </FormItem>
      <a class="forget-password" @click="forgetPassword()">忘记密码</a>
      <FormItem>
        <Button class="submit" type="primary" @click="handleSubmit('formInline')">登录</Button>
      </FormItem>
    </Form>
    <Form v-if="view=='register'" class="form" ref="register" :model="register" :rules="ruleInline">
      <FormItem prop="registerUsername">
        <Input size="large" type="text" v-model="register.username" placeholder="用户名"></Input>
      </FormItem>
      <FormItem prop="password1">
        <Input size="large" type="password" v-model="register.password1" placeholder="请输入密码"></Input>
      </FormItem>
      <FormItem prop="password2">
        <Input size="large" type="password" v-model="register.password2" placeholder="确认密码"></Input>
      </FormItem>
      <FormItem prop="email">
        <Input size="large" type="email" v-model="register.email" placeholder="邮箱地址"></Input>
      </FormItem>
      <FormItem prop="code">
        <div style="display: flex">
          <Input type="text" v-model="register.code" style="width:50%;" placeholder="请输入验证码"></Input>
          <Button
            @click="sendEmail"
            class="send-code"
            style="width:50%;"
            :disabled="canClick"
          >{{codeInfo}}
          </Button>
        </div>
      </FormItem>
      <FormItem>
        <Button class="submit" type="success" @click="register('register')">注册</Button>
      </FormItem>
    </Form>
  </div>
</template>
<script>
  import {sendEmail} from "../api/api";

  export default {
    data() {
      const validateResisterUsername = (rule, value, callback) => {
        if (value === "") {
          return callback(new Error("请输入用户名"));
        } else {
          callback();
        }
      };
      const validatePassword = (rule, value, callback) => {
        if (value === "") {
          return callback(new Error("请输入密码"));
        } else if (
          this.register.password1 != this.register.password2 &&
          this.register.password2 != ""
        ) {
          callback("两次密码不一致");
        } else {
          callback();
        }
      };
      const validateEmail = (rule, value, callback) => {
        if (value === "") {
          return callback(new Error("请输入邮箱"));
        } else if (
          !/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(
            value
          )
        ) {
          callback("请输入正确的邮箱地址");
        } else {
          callback();
        }
      };
      return {
        totalTime: 60,
        canClick: false, //添加canClick
        code: "",
        codeInfo: "获取验证码",
        view: "login",
        formInline: {
          username: "",
          password: ""
        },
        register: {
          username: "",
          email: "",
          password1: "",
          password2: "",
          code: ""
        },
        ruleInline: {
          username: [
            {
              required: true,
              message: "请输入用户名",
              trigger: "blur"
            }
          ],
          password: [
            {
              required: true,
              message: "请输入密码",
              trigger: "blur"
            },
            {
              type: "string",
              min: 6,
              message: "密码不能少于六位",
              trigger: "blur"
            }
          ],
          registerUsername: [
            {
              required: true,
              validator: validateResisterUsername,
              trigger: "blur"
            }
          ],
          password1: [
            {
              required: true,
              validator: validatePassword,
              trigger: "blur"
            }
          ],
          password2: [
            {
              required: true,
              validator: validatePassword,
              trigger: "blur"
            }
          ],
          email: [
            {
              required: true,
              validator: validateEmail,
              trigger: "blur"
            }
          ],
          code: [
            {
              required: true,
              message: "请输入验证码",
              trigger: "blur"
            }
          ]
        }
      };
    },
    methods: {
      gotoLogin() {
        if (this.$refs["register"] != undefined) {
          this.$refs["register"].resetFields();
        }
        this.view = "login";
      },
      gotoRegister() {
        if (this.$refs["formInline"] != undefined) {
          this.$refs["formInline"].resetFields();
        }
        this.view = "register";
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
      handleSubmit(name) {
        console.log(name);
        this.$refs[name].validate(valid => {
          if (valid) {
            var data = {
              username: this.formInline.username,
              password: this.formInline.password
            };
            this.$emit("listenToChileEvent", data);
          }
        });
      },
      sendEmail() {
        if (this.register.email === "") {
          this.$Message.warning("请填写邮箱");
        } else if (
          !/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(
            this.register.email
          )
        ) {
          this.$Message.warning("请输入正确的邮箱地址");
        } else {
          this.countDown();
          sendEmail(this.register.email)
            .then(res => {
              console.log(res.data);
              //TODO
            })
            .catch(err => {
              console.log(err);
            });
        }
      },
      register(){
        //TODO
        this.gotoLogin();
      },
      login(){
        //TODO
      },
    }
  }
</script>

<style>
  form {
    width: 60%;
    margin: auto;
    margin-top: 30px;
  }

  .head {
    width: 100%;
    display: flex;
    font-size: 20px;
    margin-bottom: 1px;
    color: #303133;
    border-bottom: 1px solid #dcdfe6;
  }

  .head-item {
    width: 50%;
    height: 100%;
    text-align: center;
    padding: 8px 0;
    border-right: 1px solid #dcdfe6;
    border-bottom: 2px solid rgba(255, 255, 255, 0);
    cursor: hand;
  }

  .head-item:hover {
    border-bottom: 2px solid #dcdfe6;
  }

  .form {
    margin-top: 20px;
    padding-bottom: 20px;
  }

  .submit {
    width: 100%;
    margin: auto;
    height: 40px;
  }

  .forget-password {
    float: right;
    margin-bottom: 10px;
    margin-top: -18px;
  }

  .login-form {
    margin-top: 40%;
    margin-bottom: 25px;
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
</style>
