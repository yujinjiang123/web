<template>
  <div class="home">
    <top>
      <search @search="searchBlog" slot="search"></search>
      <dropdown slot="user">
        <useravatar slot="dropdown"></useravatar>
      </dropdown>
    </top>
    <div class="lantern">
      <Row type="flex" justify="start" class="code-row-bg">
        <Col :xs="{ span:24}" :sm="{ span: 8, push: 4 }" :md="{ span: 6, push: 5 }">
          <lantern :array='images'></lantern>
        </Col>
      </Row>
    </div>
    <div class="blogs" v-for="blog in blogs">
      <Row type="flex" justify="start" class="code-row-bg">
        <Col :xs="{ span:22,push:1 }" :sm="{ span: 12, push: 4 }" :md="{ span: 12, push: 5 }">
          <blog :blog=blog></blog>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script>
import Lantern from "@/components/lantern";
import Blog from "@/components/blog";
import Search from "@/components/search";
import Head from "@/components/head";
import Dropdown from "@/components/dropdown";
import UserAvatar from "@/components/userAvatar";
import {getBlogs} from "./../api/api";
export default {
  components: {
<<<<<<< HEAD
    // responsive: ResponsiveLayou,
=======
>>>>>>> 9aae435d2059ed2bcbb90a47c99a0bc07b22ffef
    lantern: Lantern,
    blog: Blog,
    search: Search,
    top: Head,
    dropdown: Dropdown,
    useravatar: UserAvatar
  },
  data() {
    return {
      page:1,
      pageSize:15,
      images: [
        {
          id: 1,
          image: require("./../assets/3.jpg"),
          url: "http://www.baidu.com"
        },
        {
          id: 2,
          image: require("./../assets/4.jpg"),
          url: "http://www.baidu.com"
        },
        {
          id: 3,
          image: require("./../assets/3.jpg"),
          url: "http://www.baidu.com"
        },
        {
          id: 4,
          image: require("./../assets/4.jpg"),
          url: "http://www.baidu.com"
        }
      ],
      blogs: [
        {
          title: "学习VUE",
          content: "我爱学习，学习爱我",
          image: "https://i.loli.net/2017/08/21/599a521472424.jpg",
          url: "https://cn.vuejs.org/v2/guide/routing.html",
          time: new Date().getTime() - 60 * 3 * 1000,
          readNumber: 123,
          collection: 456
        },
        {
          title: "学习VUE",
          content: "我爱学习，学习爱我",
          image: "https://i.loli.net/2017/08/21/599a521472424.jpg",
          url: "http://www.baidu.com",
          time: new Date().getTime() - 60 * 3 * 1000,
          readNumber: 123,
          collection: 456
        },
        {
          title: "学习VUE",
          content: "我爱学习，学习爱我",
          image: "https://i.loli.net/2017/08/21/599a521472424.jpg",
          url: "https://cn.vuejs.org/v2/guide/routing.html",
          time: new Date().getTime() - 60 * 3 * 1000,
          readNumber: 123,
          collection: 456
        },
        {
          title: "学习VUE",
          content: "我爱学习，学习爱我",
          image: "https://i.loli.net/2017/08/21/599a521472424.jpg",
          url: "http://www.baidu.com",
          time: new Date().getTime() - 60 * 3 * 1000,
          readNumber: 123,
          collection: 456
        },
        {
          title: "学习VUE",
          content: "我爱学习，学习爱我",
          image: "https://i.loli.net/2017/08/21/599a521472424.jpg",
          url: "https://cn.vuejs.org/v2/guide/routing.html",
          time: new Date().getTime() - 60 * 3 * 1000,
          readNumber: 123,
          collection: 456
        },
        {
          title: "学习VUE",
          content: "我爱学习，学习爱我",
          image: "https://i.loli.net/2017/08/21/599a521472424.jpg",
          url: "http://www.baidu.com",
          time: new Date().getTime() - 60 * 3 * 1000,
          readNumber: 123,
          collection: 456
        },
        {
          title: "学习VUE",
          content: "我爱学习，学习爱我",
          image: "https://i.loli.net/2017/08/21/599a521472424.jpg",
          url: "https://cn.vuejs.org/v2/guide/routing.html",
          time: new Date().getTime() - 60 * 3 * 1000,
          readNumber: 123,
          collection: 456
        },
        {
          title: "学习VUE",
          content: "我爱学习，学习爱我",
          image: "https://i.loli.net/2017/08/21/599a521472424.jpg",
          url: "http://www.baidu.com",
          time: new Date().getTime() - 60 * 3 * 1000,
          readNumber: 123,
          collection: 456
        }
      ]
    };
  },
  methods: {
    searchBlog(data) {
      console.log(data);
      //TODO
    }
  },
  created:function () {
    //获取数据信息
    getBlogs(this.page,this.pageSize)
      .then(res=>{
        console.log(res);
        if(res==null){
          this.$Message.warning('没有消息了');
        }else{
          this.blogs.concat(res);
          this.page+=1;
        }
      })
      .catch(err=>{
        this.$Message.error('数据获取失败');
        console.log(err);
      })
  }
};
</script>

<style>
.home {
  background-color: #f8f8f9;
}

.lantern {
  width: 100%;
  height: 100%;
  padding: 15px;
}

.blogs {
  width: 100%;
  height: auto;
}
</style>

