<template>
  <div class="login">
    <Row type="flex" justify="center" class="code-row-bg">
      <Col :xs="{ span:20 }" :sm="{ span: 10}" :md="{ span: 8 }" :lg="{ span:6 }" :xl="{ span:6 }">
        <login-form @listenToChileEvent="login"></login-form>
      </Col>
    </Row>
  </div>
</template>

<script>
import LoginForm from "@/components/login-form";

export default {
  components: {
    loginForm: LoginForm
  },
  methods: {
    login(data) {
      console.log(data);
      //TODO
      this.$Message.success("登录成功");
      this.$router.push({
        name: "home"
      });
    }
  }
};
</script>

<style>
.login {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url("./../assets/images/login-bg.jpg");
  background-size: cover;
  background-position: center;
}
</style>

