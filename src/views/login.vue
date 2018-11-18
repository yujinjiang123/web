<template>
  <div class="login">
    <Row type="flex" justify="end" class="code-row-bg">
        <Col  :xs="{ span:20 ,pull:2}" :sm="{ span: 10, pull: 4 }" :md="{ span: 6, offset: 4 }">
            <div class="login-form">
                <login-form @listenToChileEvent="login"></login-form>
            </div>
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
  /* background-image: url("./../assets/images/fullstack.jpg"); */
  background-size: cover;
  background-position: center;
}

.login-form {
  height: 320px;
  padding-top: 60px;
  margin-top: 80px;
  margin-bottom: 25px;
  background-color: rgba(255, 255, 255, 0.65);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>

