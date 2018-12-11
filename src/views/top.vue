<template>
  <top>
    <search slot="search" @search="searchBlog"></search>
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
    components:{
      top:Head,
      search:Search,
      dropdown:Dropdown,
      useravatar:UserAvatar
    },
    methods:{
      searchBlog(value){
        //todo
        this.$emit("sendBlog", value);
      },
      gotoEditor(){
        this.$router.push({
          name:"markdown"
        })
      }
    }
  }
</script>

<style>
search{
  cursor:default
}
</style>

