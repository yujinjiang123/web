<template>
  <div class="login-form">
    <div class="head">
      <a class="head-item" style="color: #303133;">登录</a>
      <a class="head-item" style="color: #303133;"> 注册 </a>
    </div>
    <Form class="form" ref="formInline" :model="formInline" :rules="ruleInline">
      <FormItem prop="username">
        <Input size="large" type="text" v-model="formInline.username" placeholder="用户名" required>
        </Input>
      </FormItem>
      <FormItem prop="password">
        <Input size="large" type="password" v-model="formInline.password" placeholder="密码">
        </Input>
      </FormItem>
      <a class="forget-password" @click="forgetPassword()">忘记密码</a><br/>
      <FormItem>
        <Button class="submit" type="primary" @click="handleSubmit('formInline')">登录</Button>
      </FormItem>
    </Form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formInline: {
        username: "",
        password: ""
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
        ]
      }
    };
  },
  methods: {
    handleSubmit(name) {
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
    forgetPassword() {
      this.$router.replace({
        name: "findPassword"
      });
    }
  }
};
</script>

<style>
form {
  width: 60%;
  margin: auto;
  margin-top: 30px;
}

.head{
  width:100%;
  display: flex;
  font-size: 20px;
  margin-bottom: 1px;
  color:#303133;
  border-bottom: 1px solid #DCDFE6;
}

.head-item {
  width:50%;
  height: 100%;
  text-align: center;
  padding:8px 0;
  border-right: 1px solid #DCDFE6;
  border-bottom: 2px solid rgba(255,255,255,0);
  cursor: hand;
}

.head-item:hover{
  border-bottom: 2px solid #DCDFE6;
}

.form{
  margin-top:20px;
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
  height: 300px;
  margin-top: 40%;
  margin-bottom: 25px;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
