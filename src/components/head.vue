<template>
  <Menu mode="horizontal" :theme="theme">
    <MenuItem name="1">
      <Icon type="ios-paper"/>
      内容管理
    </MenuItem>
    <MenuItem name="2">
      <Icon type="ios-people"/>
      用户管理
    </MenuItem>
    <MenuItem name="4">
      <Icon type="ios-construct"/>
      综合设置
    </MenuItem>
    <MenuItem name="user" style="right:5%;float:right;border-bottom: 0px">
      <slot name="user"></slot>
    </MenuItem>
    <MenuItem name="search" style="border-bottom: 0;float:right;right:10%;">
      <slot name="search"></slot>
    </MenuItem>
    <MenuItem name="user" style="right:5%;float:right;border-bottom: 0px">
      <slot></slot>
    </MenuItem>
  </Menu>
</template>
<script>
  export default {
    data() {
      return {
        theme: "light"
      };
    }
  };
</script>

<style>
</style>
