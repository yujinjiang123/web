<template>
  <div class="login">
    <Row type="flex" justify="center" class="code-row-bg">
      <Col :xs="{ span:20 }" :sm="{ span: 10}" :md="{ span: 8 }" :lg="{ span:6 }" :xl="{ span:6 }">
        <login-form ></login-form>
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

