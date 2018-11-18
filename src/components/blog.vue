<template>
    <div @click="gotoBlog()" style="background:#eee;padding:1px;margin-bottom:2px" class="font">
        <Card :bordered="false">
            <p slot="title" >{{blog.title}}</p>
            <p>{{blog.content}}</p>
            <div class="info">
                <Avatar :src="blog.image" />
                <Time class="text" :time="blog.time" />
                <div class="read-collection ">
                    <p class="text" style="color:#2d8cf0;">{{blog.readNumber}}<p  style="padding:9px 2px 0px;">阅读</p></p>
                    <p class="text" style="color:#2d8cf0;">{{blog.collection}}<p  style="padding:9px 2px 0px;">收藏</p></p>
                </div>
            </div>
        </Card>
    </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    blog: {}
  },
  methods: {
    gotoBlog() {
      window.location.href = this.blog.url;
    }
  }
};
</script>

<style>
.font {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
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


