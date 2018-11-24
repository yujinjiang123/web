<template>
  <Dropdown>
    <a href="javascript:void(0)">
      <slot name="dropdown"></slot>
    </a>
    <DropdownMenu slot="list">
      <DropdownItem>我的消息</DropdownItem>
      <DropdownItem>个人中心·</DropdownItem>
      <DropdownItem>我的博客</DropdownItem>
      <DropdownItem>修改密码</DropdownItem>
      <DropdownItem><span @click="exit">退出登录</span></DropdownItem>
    </DropdownMenu>
  </Dropdown>
</template>
<script>
  export default {
    methods: {
      exit() {
        //TODO
        this.$router.replace({
          name: "login"
        })
      }
    }
  }
</script>
