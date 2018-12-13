<template>
  <div style="background:#eee;padding:1px;margin-bottom:2px">
    <Card :bordered="false">
      <p class="title" @click="gotoBlog(blog.id)" slot="title">{{blog.title}}</p>
      <p>{{blog.content}}</p>
      <div class="info">
        <Avatar :src="blog.image"/>
        <Time class="text" :time="blog.time"/>
        <div class="read-collection ">
          <p class="text" style="color:#2d8cf0;">{{blog.readNumber}}
          <p style="padding:9px 2px 0px;">阅读</p></p>
          <p class="text" style="color:#2d8cf0;">{{blog.collection}}
          <p style="padding:9px 2px 0px;">收藏</p></p>
        </div>
      </div>
    </Card>
  </div>
</template>
<script>
  import {goBlog} from "./../api/api";
  export default {
    data() {
      return {};
    },
    props: {
      blog: {}
    },
    methods: {
      gotoBlog(id){
        console.log(id);
        //todo
      },
    }
  };
</script>

<style>
  .title {
    width: 100%;
  }

  .title:hover {
    color: #2db7f5;
    cursor: pointer;
  }

  .info {
    display: flex;
  }

  .text {
    padding-top: 9px;
    padding-left: 10px;
  }

  .read-collection {
    display: flex;
    margin-left: auto;
  }
</style>


