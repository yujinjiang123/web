<template>
  <Menu mode="horizontal" :theme="theme">
    <MenuItem name="1">
      <div  @click="gotoPage('home')">
        <Icon type="ios-home" size="20"/>首页
      </div>
    </MenuItem>
    <MenuItem name="user" style="right:5%;float:right;border-bottom: 0px">
      <slot name="user"></slot>
    </MenuItem>
    <MenuItem name="editor" style="right:5%;float:right;border-bottom: 0px">
      <slot name="editor"></slot>
    </MenuItem>
    <MenuItem name="search" style="border-bottom:0;float:right;right:10%;cursor:default;"  >
      <slot name="search"></slot>
    </MenuItem>
    <MenuItem name="filterRoom" style="margin-right:5%;border-bottom: 0;float:right;">
      <slot name="filterRoom"></slot>
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
      },
    methods:{
      gotoPage(pageName){
        console.log(pageName)
        this.$router.replace({
          name:pageName
        })
      }
    }
  };
</script>

<style>
</style>
