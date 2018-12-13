<template>
  <div class="login">
    <Row type="flex" justify="center" class="code-row-bg">
      <Col :xs="{ span:20 }" :sm="{ span: 10}" :md="{ span: 8 }" :lg="{ span:6 }" :xl="{ span:6 }">
        <login-form @listenToChileEvent="Login"></login-form>
      </Col>
    </Row>
  </div>
</template>

<script>
import LoginForm from "@/components/login-form";
import { login } from "../api/api";
export default {
  components: {
    loginForm: LoginForm
  },
  methods: {
    //登录验证
    Login(data) {
      console.log(data);
      let msg = "登录成功";
      //TODO
      // login(data)
      //   .then(res=>{
      //     console.log(res);
      //     this.$router.push({
      //       name: "home"
      //     });
      //   })
      //   .catch(err=>{
      //     console.log(err);
      //     msg="登录失败";
      //   });
      this.$Message.success(msg);
      this.$router.replace({
        name: "home"
      });
    },
    register(){
    }
  }
};
</script>

<style>
.login {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url("../assets/images/login-bg.jpg");
  background-size: cover;
  background-position: center;
}
</style>

