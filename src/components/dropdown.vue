<template>
  <Dropdown>
    <a href="javascript:void(0)">
      <slot name="dropdown"></slot>
    </a>
    <DropdownMenu slot="list">
      <DropdownItem><span>我的消息</span></DropdownItem>
      <DropdownItem><span @click="personalCenter">个人中心</span></DropdownItem>
      <!-- <DropdownItem><span>我的博客</span></DropdownItem>
      <DropdownItem ><span @click="rePassword">修改密码</span></DropdownItem> -->
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
      },
      rePassword(){
        //TODO
        this.$router.push({
          name:"rePassword"
        })
      },
      personalCenter(){
        this.$router.push({
          name:'my-data'
        })
      }
    }
  }
</script>
