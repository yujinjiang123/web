<template>
  <div id="app">
    <backtop></backtop>
    <router-view/>
  </div>
</template>

<script>
  import BackTop from "./components/backtop"
  export default {
    name: "App",
    components:{
      backtop:BackTop,
    }
  };
</script>

<style>
  html, body {
    width: 100%;
    height: 100%;
    /* overflow: hidden; */
    margin: 0;
    padding: 0;
    background-color: #f8f8f9;
  }

  #app {
    width: 100%;
    height: 100%;
    position: absolute;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  }
</style>
