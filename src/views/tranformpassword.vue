<template>
<div style="width:80%;height:100%;margin:auto;">
    <Steps :current="current">
        <Step title="原密码"></Step>
        <Step title="新密码"></Step>
        <Step title="完成"></Step>
    </Steps>
    <div class="content">
        <Input v-model="oldPassword"  v-if="current==0" placeholder="请输入旧密码" style="width: 300px;" />
        <Input v-model="newPassword1" v-if="current==1" placeholder="请输入新密码" style="width: 300px" />
        <Input v-model="newPassword2" v-if="current==1" placeholder="请确认旧密码" style="width: 300px" />
        <p v-if="current==2">修改成功</p>
    </div>
    <Button type="primary" @click="next" class="net">Next step</Button>
</div>
</template>
<script>
export default {
  data() {
    return {
      current: 0,
      oldPassword: "",
      newPassword1: "",
      newPassword2: ""
    };
  },
  methods: {
    next() {
      if (this.current == 3) {
        this.current = 0;
      } else {
        this.current += 1;
      }
    }
  }
};
</script>
<style>
.content {
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  width: 80%;
  height: 50%;
  display: flex;
}
.next {
  float: right;
  margin-right: 10%;
}
</style>

