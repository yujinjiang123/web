<template>
  <div class="login-form">
    <div>
      <p class="sign-in">登录</p>
    </div>
    <Form ref="formInline" :model="formInline" :rules="ruleInline">
      <FormItem prop="username">
        <Input size="large" type="text" v-model="formInline.username" placeholder="用户名" required>
        </Input>
      </FormItem>
      <FormItem prop="password">
        <Input size="large" type="password" v-model="formInline.password" placeholder="密码">
        </Input>
      </FormItem>
      <a class="forget-password" @click="forgetPassword()">忘记密码</a>
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

.sign-in {
  padding-bottom: 8px;
  margin-top: -50px;
  text-align: center;
  font-size: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
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
  padding-top: 60px;
  margin-top: 40%;
  margin-bottom: 25px;
  background-color: rgba(255, 255, 255, 0.65);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
