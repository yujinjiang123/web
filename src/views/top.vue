<template>
  <top>
    <search @search="searchBlog" slot="search"></search>
    <p class="editor" slot="editor" @click="gotoEditor"> <Icon size="18" class="icon" type="ios-create-outline" />写博客</p>
    <dropdown slot="user">
      <useravatar slot="dropdown"></useravatar>
    </dropdown>
  </top>
</template>

<script>
  import Search from "@/components/search";
  import Head from "@/components/head";
  import Dropdown from "@/components/dropdown";
  import UserAvatar from "@/components/userAvatar";
  export default {
        name: "top",
      components: {
        search: Search,
        top: Head,
        dropdown: Dropdown,
        useravatar: UserAvatar
      },
  }
</script>

<style>

  .editor:hover{
    color:#ed4014;
  }
</style>
