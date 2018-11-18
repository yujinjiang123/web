<template>
    <Form ref="formInline" :model="formInline" :rules="ruleInline" >
        <FormItem prop="username">
            <Input size="large" type="text"  v-model="formInline.username" placeholder="用户名">
            </Input>
        </FormItem>
        <FormItem prop="password">
            <Input size="large"  type="password" v-model="formInline.password" placeholder="密码">
            </Input>
        </FormItem>
            <a class="forget-password" @click="forgetPassword()" >忘记密码</a>
        <FormItem>
            <Button class="submit" type="primary" @click="handleSubmit('formInline')">登录</Button>
        </FormItem>
    </Form>
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
</style>
